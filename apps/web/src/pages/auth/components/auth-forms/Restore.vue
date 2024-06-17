<template>
  <div class="flex flex-column h-full items-center mt-16">
    <VForm class="max-w-screen-sm w-full" @submit.prevent="handleRestore">
      <BaseInputWithValidation
        name="email"
        type="email"
        label="Электронная почта"
      >
        <template #prepend-inner>
          <VIcon :icon="'mdi-email'" color="primary" />
        </template>
      </BaseInputWithValidation>

      <BaseButton
        class="w-full"
        :label="
          !isTimeOver ? `${timeFormated.slice(0, 2)} Отправить` : 'Отправить'
        "
        :disabled="!isTimeOver"
        type="submit"
      />
      <div class="d-inline-flex text-p mt-4 gap-2 justify-center w-full">
        <ButtonLink :to="{ name: 'login' }" label="Вернуться к авторизации" />
      </div>
    </VForm>
  </div>

  <RealTimeCounter
    ref="timer"
    v-model:isTimeOver="isTimeOver"
    v-model:timeFormated="timeFormated"
    name="restoreCounter"
    :time="60"
  >
    <template #default>
      <span style="display: none" />
    </template>
  </RealTimeCounter>
</template>

<script lang="ts" setup>
  // Core
  import { useRouter } from 'vue-router'
  import { useForm } from 'vee-validate'
  import { storeToRefs } from 'pinia'

  // Types
  import type { RegisterUserDto } from 'api/src/modules/auth/dto/auth.dto'

  // Store
  import { RESTORE_EMAIL, useUserStore } from '@/stores/user'

  const { register, setQueryEmail } = useUserStore()
  const { queryEmail } = storeToRefs(useUserStore())

  const $router = useRouter()

  const timer = ref<ComponentInstance['RealTimeCounter'] | null>(null)

  const isTimeOver = ref(true)
  const timeFormated = ref()

  const { values, validate } = useForm<{ email: string }>({
    validationSchema: {
      email: 'required|email',
    },
    initialValues: {
      email: null,
    },
  })

  const handleRestore = async () => {
    try {
      const { valid } = await validate()

      if (valid) {
        timer.value.restart()
        // TODO: Запрос на код

        setQueryEmail(values.email)
        $router.push({ name: 'restore-password' })
      }
    } catch (error) {}
  }
</script>
