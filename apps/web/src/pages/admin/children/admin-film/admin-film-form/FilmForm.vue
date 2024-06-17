<template>
  <div class="grid grid-col-1 gap-1 pb-20">
    <BaseInputWithValidation
      variant="solo"
      name="title"
      label="Название"
      clearable
    />

    <BaseInputWithValidation
      variant="solo"
      name="shortTitle"
      label="Кодовое название"
      clearable
    />

    <BaseInputWithValidation
      variant="solo"
      name="description"
      label="Описание"
      clearable
    />


    <BaseInputWithValidation
      type="number"
      variant="solo"
      name="duration"
      label="Продолжительность (в минутах)"
      clearable
    />

    <DateInputWithValidation
      label="Дата начала"
      name="dateStart"
      :min="
        new Date(new Date().setDate(new Date().getDate() - 1)).toISOString()
      "
    />

    <BaseDropZoneWithValidation :max-files="1" name="imagesIds" v-model:files="values.images" :max-file-size="10485760"/>

    <BaseSelectWithValidation label="Актеры" class="mt-5" name="actorsIds" :items="actors" multiple chips/>

    <BaseSelectWithValidation label="Режиссер" class="mt-5" name="directorId" :items="actors" chips/>

    <p class="text-xl font-semibold">Сеансы</p>
    <DateInput class="mt-2"
      v-model="sessionDate"
      label="Дата начала сеанса"
      :min=" new Date(new Date().setDate(new Date().getDate() - 1)).toISOString()"
    />

    <TimePicker v-model="sessionTime"/>

    <BaseButton label="Добавить" @click="handleAddSession"/>

    <div class="d-flex flex-col gap-y-2 " v-if="sessions.length">
      <div class="d-flex justify-between items-center border-2 border-gray my-2 p-4 rounded-[16px]" v-for="({ sessionTimeStart,status, cinemaHall, tickets }, index) in sessions" :key="index">
        <div class="d-flex flex-col gap-y-2">
          <div class="d-flex">
            <span class="font-semibold mr-2">Статус:</span>
            <span>{{ dataBySessionStatus[status]?.label ?? 'Создано' }}</span>
          </div>
          <div class="d-flex">
            <span class="font-semibold mr-2">Зал: </span>
            <span>{{ cinemaHall?.name ?? 'Не задан' }}</span>
          </div>
          <div class="d-flex">
            <span class="font-semibold mr-2">Продано билетов: </span>
            <span>{{ tickets?.filter(t => t.status === TicketStatus.BOOKED)?.length ?? 0 }}</span>
          </div>
          <div class="d-flex">
            <span class="font-semibold mr-2">Билетов осталось: </span>
            <span>{{ tickets?.filter(t => t.status !== TicketStatus.BOOKED)?.length ?? 56 }}</span>
          </div>
          <div class="d-flex">
            <span class="font-semibold mr-2">Дата начала:</span>
            <span>{{ formatDate(sessionTimeStart, 'dd.MM.yyyy, HH:mm') }}</span>
          </div>

          <BaseButton :disabled="!!tickets?.filter(t => t.status === TicketStatus.BOOKED)?.length" class="mt-4" label="Удалить" @click="handleDeleteSession(index)"/>
        </div>
      </div>
    </div>
  </div>

  <AppToolbar :show-filter-button="false">
    <div class="d-flex w-full h-full justify-between items-center p-2">
      <ButtonLink class="font-semibold text-base" :to="{name: 'admin.films'}" label="Назад"/>

      <BaseButton label="Сохранить" @click="handleSubmit"/>
    </div>
  </AppToolbar>
</template>

<script setup lang="ts"></script>

<script lang="ts" setup>
  // Core
  import { storeToRefs } from 'pinia'
  import { useForm } from 'vee-validate'
  import { pick } from 'lodash'

  // Types
  import { FilmResource, Session, TicketStatus, dataBySessionStatus  } from '@/@types/schema'
  import { FullCreateFilm } from 'api/src/modules/film/dto/film.dto'

  // Hooks
  import { useNotify } from '@/utils/hooks/use-notify'
  import { formatDate } from '@/utils/functions/format-date'

  // Store
  import { useActorStore } from '@/stores/actors'

  class Form implements FullCreateFilm {}

  interface Props {
    film?: FilmResource
  }

  const props = defineProps<Props>()

  const $emit = defineEmits<{
    (e: 'submit', value: Form): void
  }>()

  const { notifyError } = useNotify()

  const { getActors } = useActorStore()
  const { actors } = storeToRefs(useActorStore())

  const initialValues = computed<Form>(() => {
    return {
      title: props.film ? props.film.title : null,
      shortTitle: props.film ? props.film.shortTitle : null,
      duration: props.film ? props.film.duration : null,
      description: props.film ? props.film.description : null,
      dateStart: props.film ? props.film.dateStart : null,
      images: props.film ? props.film.images : [],
      imagesIds: props.film ? props.film.images.map(i => i.id) : [],
      actorsIds: props.film ? props.film.actors.filter((a) => a.position !== 'Режиссер')?.map(a => a.actor.id) : [],
      directorId: props.film ? props.film.actors.find((a) => a.position === 'Режиссер')?.actor?.id : [],
    }
  })

  const validationSchema = computed<Form>(() => {
    return {
      title: 'required',
      shortTitle: 'required',
      duration: 'required|min_value:60',
      dateStart: 'required',
      imagesIds: 'required|min:1',
      actorsIds: 'required',
      directorId: 'required',
    }
  })

  const { values, validate } = useForm<Form>({
    initialValues,
    validationSchema,
  })

  const sessionTime = ref('')
  const sessionDate = ref('')
  const sessions = ref<Session[]>(props.film ? props.film.sessions : [])

  function handleAddSession() {
    if(sessionDate.value && sessionTime.value) {
      sessions.value.push({
        sessionTimeStart: `${sessionDate.value}T${sessionTime.value}`,
      })
  
      sessionDate.value = ''
      sessionTime.value = ''
    }
    else
      notifyError('Заполните форму')
  }

  function handleDeleteSession(index: number) {
    sessions.value = sessions.value.splice(index, 1)
  }

  async function handleSubmit() {
    try {
      const { valid } = await validate()

      let form = pick(values, 'title', 'shortTitle', 'description', 'duration', 'dateStart')
      form['imageId'] = values.imagesIds?.[0]
      form['sessions'] = sessions.value?.map(s => ({
        cinemaHallId: 1,
        sessionTimeStart: s.sessionTimeStart,
      }))
      form['actors'] = values.actorsIds?.map(id => ({
        actorId: id,
        position: 'Актер',
      }))
      form['actors'].push({
        actorId: values.directorId,
        position: 'Режиссер',
      })

      if (valid) $emit('submit', form)
      else notifyError('Заполните форму')
    } catch (error) {
      console.log(error)
      notifyError(error)
    }
  }

  fetchData()
  async function fetchData() {
    await getActors()
  }
</script>
