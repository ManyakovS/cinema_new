<template>
  <div class="flex flex-column h-full items-center mt-6">
    <div class="d-flex flex-column items-center max-w-[400px]">
      <div v-if="!values.token" class="text-h6 text-primary-lighten-1">
        Введите код подтверждения
      </div>

      <div v-else class="text-h6 text-primary-lighten-1">
        Введите новый пароль
      </div>

      <div
        v-if="!values.token"
        class="text-p text-primary-lighten-1 text-center"
      >
        Код был отправлен на <b>{{ queryEmail }}.</b> Скопируйте его из письма
        и вставьте в поле.
      </div>
    </div>
    <VForm class="max-w-screen-sm w-full" @submit.prevent="handleRestore">
      <template v-if="!values.token">
        <BaseOPTInputWithValidation name="code" />
      </template>

      <template v-else>
        <InputPassword class="mt-2" label="Новый пароль" name="password" />

        <InputPassword
          class="mt-1"
          label="Повторите пароль"
          name="confirmationPassword"
        />
      </template>

      <BaseButton
        class="w-full mt-2"
        :label="!values.token ? 'Подтвердить' : 'Изменить пароль'"
        type="submit"
      />
      <div class="d-inline-flex text-p mt-4 gap-2 justify-center w-full">
        <ButtonLink
          :to="{ name: 'restore' }"
          label="Изменить адрес электронный почты"
        />
      </div>
    </VForm>
    <!-- <VBtn @click="handle">фываыаа</VBtn> -->
  </div>
</template>

<script lang="ts" setup>
  // Core
  import { useRoute, useRouter } from 'vue-router'
  import { useForm } from 'vee-validate'
  import { storeToRefs } from 'pinia'

  // Store
  import { useUserStore } from '@/stores/user'

  interface Form {
    code: string
    token: string
    password: string
    confirmationPassword: string
  }

  const { queryEmail } = storeToRefs(useUserStore())

  const $router = useRouter()
  const $route = useRoute()

  const _token = $route.query.token
  const _email = $route.query.email

  const validationSchema = computed(() => {
    return {
      code: 'required|min:6',
      token: _token ? 'required' : '',
      password: _token ? 'required|min:8' : '',
      confirmationPassword: _token ? 'required|confirmed:@password' : '',
    }
  })

  const { values, validate } = useForm<Form>({
    validationSchema,
    initialValues: {
      code: '',
      token: Array.isArray(_token) ? _token[0] : _token,
      password: null,
      confirmationPassword: null,
    },
  })

  /* TODO: Удалить потом */
  function handle() {
    console.log(values)
    $router.push({
      name: 'restore-password',
      query: {
        email: 'Rafael2111@yandex.ru',
        token:
          '24124kdfhUKDt2tjaDGFLUIKAg_afhbasdukgjffguiuifas__abjajsfjafsasfhjnasf++112rasf',
      },
    })
  }

  const handleRestore = async () => {
    try {
      const { valid } = await validate()

      if (valid) {
        if (!values.token) {
          /* TODO: Подтверждение кода */
          values.token =
            '24124kdfhUKDt2tjaDGFLUIKAg_afhbasdukgjffguiuifas__abjajsfjafsasfhjnasf++112rasf'
        } else {
          /* TODO: Смена пароля */
          $router.push('')
        }
      }
    } catch (error) {}
  }
</script>
