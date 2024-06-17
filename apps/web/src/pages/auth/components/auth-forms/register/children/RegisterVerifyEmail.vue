<template>
  <div class="flex flex-column h-full items-center mt-20">
    <VForm class="max-w-screen-sm w-full" @submit.prevent="handleVerifyEmail">
      <BaseInputWithValidation
        name="email"
        type="email"
        label="Электронная почта"
      >
        <template #prepend-inner>
          <VIcon :icon="'mdi-email'" color="primary" />
        </template>
      </BaseInputWithValidation>

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

  // Types
  import type { CreateVerifyDto } from 'api/src/modules/auth/dto/auth.dto'

  // Store
  import { useUserStore } from '@/stores/user'

  const { verifyEmail }  = useUserStore()

  const $router = useRouter()

  const { values, validate } = useForm<CreateVerifyDto>({
    validationSchema: {
      email: 'required|email',
    },
    initialValues: {
      email: null,
    },
  })

  const handleVerifyEmail = async () => {
    try {
      const { valid } = await validate()

      if (valid) {
        await verifyEmail(values)
        $router.push({ name: 'register.verify-code', query: { email: values.email } })
      }
    } catch (error) {}
  }
</script>
