<template>
  <div class="flex flex-column h-full items-center mt-4">
    <VForm class="max-w-screen-sm w-full" @submit.prevent="handleRegistration">
      <InputPassword name="password" style="display:none"/>
      
      <BaseInputWithValidation
        type="text"
        name="user_name"
        label="ФИО"
      >
      <template #prepend-inner>
          <VIcon :icon="'mdi-account'" color="primary" />
        </template>
      </BaseInputWithValidation>
      
      <InputPassword name="userPassword" type="password"/>

      <InputPassword label="Повторите пароль" name="confirmationPassword" type="password"/>

      <BaseButton class="w-full" label="Зарегистрироваться" type="submit" />
      <div class="d-inline-flex text-p mt-4 gap-2 justify-center w-full">
        <ButtonLink :to="{ name: 'login' }" label="У меня уже есть аккаунт" />
      </div>
    </VForm>
  </div>
</template>

<script lang="ts" setup>
  // Core
  import { useRouter } from 'vue-router'
  import { useForm } from 'vee-validate'

  // Store
  import { useUserStore } from '@/stores/user'

  interface Form {
    user_name: string
    email: string
    userPassword: string
    confirmationPassword: string
    verifyCode: string
  }

  const userStore = useUserStore()

  const $router = useRouter()
  const $route = useRoute()

  const { values, validate } = useForm<Form>({
    validationSchema: {
      user_name: 'required|full_name',
      email: 'required|email',
      userPassword: 'required|min:8',
      confirmationPassword: 'required|confirmed:@userPassword',
    },
    initialValues: {
      user_name: ' ',
      email: $route.query?.email?.toString(),
      userPassword: '',
      confirmationPassword: null,
      verifyCode: $route.query?.verifyCode?.toString(),
    },
  })

  const handleRegistration = async () => {
    try {
      const { valid } = await validate()

      if (valid) {
        await userStore.register({
          name: values.user_name,
          password: values.userPassword,
          email: values.email,
          verifyCode: values.verifyCode,
        })
        $router.push('/')
      }
    } catch (error) {}
  }
</script>
