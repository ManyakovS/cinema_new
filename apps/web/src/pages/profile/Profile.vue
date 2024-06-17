<template>
  <div class="d-flex flex-column">
    <div class="d-flex justify-between">
      <h1>Профиль</h1>

      <span>EDIT BUTTON</span>
    </div>

    <div>
      <BaseDropZone
        :max-file-size="10485760"
        :max-files="1"
        @update:files="handleChangeImage"
      >
        <UserCard :user="user" size="big" with-name />
      </BaseDropZone>
    </div>

    <div>PHONE</div>
    <div>EMAIL</div>

    <VDivider class="my-7" />

    <ProfileRouteButtonsGroup />
  </div>
</template>

<script setup lang="ts">
  // Core
  import { storeToRefs } from 'pinia'

  // Store
  import { useUserStore } from '@/stores/user'

  // Hooks
  import { useNotify } from '@/utils/hooks/use-notify'

  // Types
  import { Image } from '@/@types/schema'

  const { notifyError } = useNotify()

  const { user } = storeToRefs(useUserStore())
  const { changeImage } = useUserStore()

  async function handleChangeImage(images: Image[]) {
    await changeImage(user.value.id, images[0].id).catch(notifyError)
  }
</script>

<style scoped></style>
