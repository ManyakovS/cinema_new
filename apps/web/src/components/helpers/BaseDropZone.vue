<template>
  <div>
    <FileList class="mb-4"
      :files="files"
      :fileIds="_fileIds"
      :readonly="readonly"
    />

    <div v-bind="getRootProps()">
      <input v-bind="getInputProps()" />
    </div>
    <button @click="open">
      <slot></slot>
    </button>
  </div>
</template>

<script setup lang="ts">
  import { Image } from '@/@types/schema'
  import { useDropzone } from 'vue3-dropzone'
  import { request } from '@/utils/services/client'

  type LoadingProgressDataType = {
    id: string
    controller: any
    progress: number
  }

  export interface Props {
    fileIds: number[]
    files: Image[]
    maxFileSize?: number // максимальный размер файла в байтах
    acceptedFileTypes?: string[] // типы файлов (например, ['image/png', 'image/jpeg'])
    maxFiles?: number // максимальное количество файлов
  }
  // Определение пропсов
  const props = withDefaults(defineProps<Props>(), {
    files: () => [],
    fileIds: () => [],
    acceptedFileTypes: () => ['image/png', 'image/jpeg'],
  })

  const $emit = defineEmits<{
    (e: 'update:files', value: Image[]): void
    (e: 'update:fileIds', value: number[]): void
    (e: 'update:filesCount', value: number): void
  }>()

  const { open, getRootProps, getInputProps } = useDropzone({
    onDrop: async (acceptedFiles) => {
      const formData = new FormData()
      acceptedFiles.forEach((file) => {
        formData.append('file', file)
      })

      // Здесь вызывается функция для загрузки файлов
      const file = await fetchFile(formData)

      updateData(file)
    },
    maxSize: props.maxFileSize, // Установка ограничения размера файла
    accept: props.acceptedFileTypes, // Установка разрешённых типов файла
    maxFiles: props.maxFiles, // Установка ограничения на количество файлов
    // ... другие опции ...
  })

  function updateData(file: Image) {
    if (file) {
      let files = [...props.files, file]
      if(props.maxFiles)
        files = files.slice(-props.maxFiles)
      const fileIds = files.map((file) => file.id)

      $emit('update:files', files)
      $emit('update:fileIds', fileIds)
    }
  }

  const loadingProgressData = ref<LoadingProgressDataType[]>([])

  function abortUpload({ id, controller }: LoadingProgressDataType) {
    controller.abort()
    removeLoadingProgressDataItem(id)
  }

  function removeLoadingProgressDataItem(id: string) {
    loadingProgressData.value = loadingProgressData.value.filter(
      (item) => item.id !== id
    )
  }

  async function fetchFile(formData) {
    const controller = new AbortController()
    const id = Date.now().toString(36)

    try {
      const postImage = (body: any) =>
        request<void>('/image', {
          method: 'POST',
          body,
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${localStorage.getItem('access_token')}`,
          },
          params: {
            signal: controller.signal,
            onUploadProgress: (progressEvent) =>
              setProgressData(progressEvent.progress as number, id, controller),
          },
        })

      const data = await postImage(formData)
      return data.data // Верните data, которая предположительно содержит информацию о файле
    } catch (error) {
      console.error(error)
    }
  }

  function setProgressData(progress: number, id: string, controller: any) {
    const data = loadingProgressData.value.find((item) => item.id === id)

    if (progress === 1) removeLoadingProgressDataItem(id)
    else if (data) data.progress = progress
    else loadingProgressData.value.push({ id, controller, progress })
  }
</script>
