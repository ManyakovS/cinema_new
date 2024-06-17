<template>
  <div class="flex flex-column h-full items-center mt-6">
    <div class="d-flex flex-column items-center max-w-[400px]">
      <div class="text-h6 text-primary-lighten-1">
        Введите код подтверждения
      </div>

      <div class="text-p text-primary-lighten-1 text-center">
        Код был отправлен на <b>{{ queryEmail }}.</b> Скопируйте его из письма и
        вставьте в поле.
      </div>
    </div>
    <VForm class="max-w-screen-sm w-full" @submit.prevent="handleRestore">
      <BaseOPTInputWithValidation name="verifyCode" />

      <BaseButton class="w-full mt-2" label="Подтвердить" type="submit" />
      <div class="d-inline-flex text-p mt-4 gap-2 justify-center w-full">
        <ButtonLink
          :to="{ name: 'register.verify-email' }"
          label="Изменить адрес электронный почты"
        />
      </div>
    </VForm>
  </div>
</template>

<script lang="ts" setup>
  // Core
  import { useRouter } from 'vue-router'
  import { useForm } from 'vee-validate'
  import { storeToRefs } from 'pinia'

  // Store
  import { useUserStore } from '@/stores/user'
  
  // Utils
  import { useNotify } from '@/utils/hooks/use-notify'

  interface Form {
    verifyCode: string
    email: string
  }

  const { queryEmail } = storeToRefs(useUserStore())
  const { verifyCode } = useUserStore()

  const $router = useRouter()

  const { notifyError } = useNotify()

  const validationSchema = computed(() => {
    return {
      verifyCode: 'required|min:6',
      email: 'required',
    }
  })

  const { values, validate } = useForm<Form>({
    validationSchema,
    initialValues: {
      verifyCode: '',
      email: queryEmail.value,
    },
  })

  const handleRestore = async () => {
    try {
      const { valid } = await validate()

      if (valid) {
        const verify = await verifyCode(values)

        if(verify)
          $router.push({ name: 'register.main.form', query: { email: values.email, verifyCode: values.verifyCode } })
      }
    } catch (error) {
      notifyError(error)
    }
  }
</script>
