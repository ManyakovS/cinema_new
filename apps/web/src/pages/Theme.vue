<template>
  <v-btn color="secondary" @click="toggleTheme">toggle theme</v-btn>
  ...

  <v-btn color="primary-lighten-5" @click="toggleTheme">toggle theme</v-btn>
  <v-btn color="primary-darken-3" @click="toggleTheme">toggle theme</v-btn>
  <v-btn color="primary-darken-2" @click="toggleTheme">toggle theme</v-btn>

  <v-btn color="primary" @click="toggleTheme">toggle theme</v-btn>
</template>

<script setup>
  import { useTheme } from 'vuetify'

  const theme = useTheme()

  function toggleTheme() {
    theme.global.name.value = theme.global.current.value.dark
      ? 'lightTheme'
      : 'dark'
  }
</script>
