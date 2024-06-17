<template>
  <div class="d-flex items-center my-1">
    <v-avatar :size="iconSize">
      <v-img
        alt="John"
        v-if="showImage"
        :src="getImagePath(user?.image?.path)"
      />
    </v-avatar>

    <slot name="name" :user-name="user?.name" v-if="withName">
      <p class="text-h5 ml-4">{{ user?.name }}</p>
    </slot>
  </div>
</template>

<script setup lang="ts">
  import type { UserShortResource } from '@/@types/schema'
  import { getImagePath } from '@/utils/functions/get-image-path'

  interface Props {
    user: UserShortResource
    size?: 'small' | 'medium' | 'big'
    withName?: boolean
  }

  const props = withDefaults(defineProps<Props>(), {
    size: 'small',
  })

  const iconSize = computed(() => {
    if (props.size === 'big') return 60
    else if (props.size === 'medium') return 45
    else return 40
  })

  const showImage = ref(true)

  watch(
    () => props.user?.image?.path,
    () => {
      showImage.value = false
      setTimeout(() => {
        showImage.value = true
      }, 250)
    },
  )
</script>

<style scoped></style>
