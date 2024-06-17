<template>
  <VSnackbar :timeout="timeout" v-model:model-value="_snackbar">
    <VAlert border="top" type="warning" variant="outlined" prominent>
      Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum.
      Suspendisse non nisl sit amet velit hendrerit rutrum. Nullam vel sem.
      Pellentesque dapibus hendrerit tortor.
    </VAlert>
  </VSnackbar>
</template>

<script setup lang="ts">
  interface Props {
    timeout: number
    snackbar: boolean
  }

  const props = defineProps<Props>()

  const $emit = defineEmits<{
    (e: 'update:snackbar', value: boolean): void
  }>()

  const _snackbar = computed({
    get() {
      return props.snackbar
    },
    set(value: boolean) {
      $emit('update:snackbar', value)
    },
  })
</script>

<style scoped></style>
