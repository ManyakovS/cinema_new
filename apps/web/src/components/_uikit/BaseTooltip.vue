<template>
  <v-tooltip v-model="isShow" :location="location" :text="text">
    <template v-slot:activator="activator">
      <slot
        name="default"
        :click="handleClick"
        :activator="activator"
        :isShow="isShow"
      />
    </template>
  </v-tooltip>
</template>

<script setup lang="ts">
  interface Props {
    time: number
    location: 'top' | 'bottom' | 'left' | 'right'
    text: string
  }

  const props = withDefaults(defineProps<Props>(), {
    time: 1500,
    location: 'top',
  })

  const isShow = ref(false)

  const handleClick = () => {
    isShow.value = true

    setTimeout(() => {
      isShow.value = false
    }, props.time)
  }
</script>

<style lang="scss">
  .v-overlay__content {
    max-width: 180px !important;
  }
</style>
