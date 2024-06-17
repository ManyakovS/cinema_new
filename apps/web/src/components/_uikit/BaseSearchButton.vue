<template>
  <VBtn
    v-bind="props"
    class="base-search-button"
    size="26"
    prepend-icon="mdi-magnify"
    @click="handleSearch"
  >
    <v-dialog activator="parent" max-width="340" class="base-search-window">
      <template #default="{ isActive }">
        <v-card>
          <template #text>
            <BaseInput
              v-model:model-value="search"
              placeholder="Поиск"
              hide-details
            />
          </template>

          <template #actions>
            <div class="d-flex gap-4 justify-end w-full">
              <BaseButton label="Очистить" @click="handleClear(isActive)" />

              <BaseButton label="Найти" @click="handleSearch(isActive)" />
            </div>
          </template>
        </v-card>
      </template>
    </v-dialog>
  </VBtn>
</template>

<script setup lang="ts">
  interface Props {}

  const props = defineProps<Props>()

  const $emit = defineEmits<{
    (e: 'update:search', value: string): void
  }>()

  const search = ref('')

  function handleSearch(isActive: any) {
    $emit('update:search', search.value)
    isActive.value = false
  }

  function handleClear(isActive: any) {
    $emit('update:search', '')
    isActive.value = false
  }
</script>

<style scoped lang="scss">
  .base-search-button {
    position: absolute;
    top: 15px;
    right: 16px;
    font-size: 22px;
  }

  :deep(.v-overlay__scrim) {
    background: transparent;
  }

  .base-search-window .v-card {
    border-radius: 16px;
  }

  :deep(.v-card-text) {
    padding: 16px !important;
  }
</style>
