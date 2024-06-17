<template>
  <div class="flex flex-column h-full w-full items-center mt-8">
    <VForm class="max-w-screen-sm w-full" @submit.prevent="handleLogin">
      <BaseInputWithValidation
        name="email"
        type="email"
        label="Электронная почта"
      >
        <template #prepend-inner>
          <VIcon :icon="'mdi-email'" color="primary" />
        </template>
      </BaseInputWithValidation>

      <InputPassword name="password" type="password" />

      <!-- <BaseCheckbox label="Запомнить пароль" v-model="isRemember"/> -->

      <BaseButton class="w-full" label="Авторизоваться" type="submit" />
      <div class="d-inline-flex text-p mt-2 gap-2 justify-center w-full">
        Нет аккаунта?
        <ButtonLink :to="{ name: 'register' }" label="Зарегистрироваться" />
      </div>

      <div class="d-flex justify-center w-full mt-12">
        <ButtonLink :to="{ name: 'restore' }" label="Забыли пароль?" />
      </div>
    </VForm>
  </div>
</template>

<script lang="ts" setup>
  // Core
  import { useRouter } from 'vue-router'
  import { useForm } from 'vee-validate'

  // Types
  import type { LoginUserDto } from 'api/src/modules/auth/dto/auth.dto'

  // Store
  import { useUserStore } from '@/stores/user'

  const userStore = useUserStore()
  const $router = useRouter()

  const { values, validate } = useForm<LoginUserDto>({
    validationSchema: {
      email: 'required|email',
      password: 'required',
    },
  })

  const handleLogin = async () => {
    try {
      const { valid } = await validate()

      if (valid) {
        await userStore.login(values)
        $router.push('/')
      }
    } catch (error) {}
  }
</script>
