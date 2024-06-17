<template>
  <DialogWrapper
    :visible="visible"
    :title="_title"
    :width="width"
    v-bind="options"
    @close="closeDialog"
    @cancel="handleCancel"
    @submit="handleConfirm"
  >
    <slot>
      <div class="text-body1" v-html="_message"></div>
    </slot>

    <template #footer>
      <!-- <ConfirmationButtons
        @confirm="handleConfirm"
        @cancel="handleCancel"
      /> -->
    </template>

  </DialogWrapper>
</template>

<script lang="ts" setup>

  // Core
  import { ref } from 'vue'


  type PromiseResolve = (value: boolean | PromiseLike<boolean>) => void
  type PromiseReject = (reason?: any) => void

  interface Props {
    width: string | number
    checkBeforeSubmit?: () => (Promise<boolean> | boolean)
  }

  const props = withDefaults(defineProps<Props>(), {
    width: 500,
  })

  const $emit = defineEmits<{
    (e: 'submit'): void
    (e: 'close'): void
    (e: 'cancel'): void
  }>()

  defineExpose({
    open,
    closeDialog,
  })

  const visible = ref(false)
  const _title = ref('')
  const _message = ref('')
  let _resolve: PromiseResolve | null = null
  let _reject: PromiseReject | null = null

  // Если передан слот, message не передаём
  function open (title: string, message?: string): Promise<boolean> {
    visible.value = true
    _title.value = title

    if (message)
      _message.value = message

    return new Promise((resolve, reject) => {
      _resolve = resolve
      _reject = reject
    })
  }

  async function handleConfirm () {
    if (props.checkBeforeSubmit) {
      if (await props.checkBeforeSubmit()) {
        $emit('submit')
      }
    } else {
      (_resolve as PromiseResolve)(true)
      closeDialog()
    }
  }

  function handleCancel () {
    (_reject as PromiseReject)(true)
    $emit('cancel')
    closeDialog()
  }

  function closeDialog () {
    visible.value = false
    $emit('close')
  }

</script>

<style lang="scss" scoped>

</style>
