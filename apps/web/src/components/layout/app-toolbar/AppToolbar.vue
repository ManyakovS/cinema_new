<template>
  <v-toolbar class="app-toolbar" ref="element" >
    <slot></slot>
    <div
      class="app-toolbar__end"
      v-if="$slots['end'] || showFilterButton"
    >
      <slot name="end">
      </slot>
    </div>
  </v-toolbar>
</template>

<script lang="ts" setup>
  // Core
  import { onMounted, onUnmounted, ref } from 'vue'
  
  // Types
  import { VToolbar } from 'vuetify/lib/components/index.mjs'

  interface Props {
    showFilterButton?: boolean,
    filterSelected?: boolean,
    hideFilterButtonLabel?: boolean,
    crutchTargetSelector?: string,
  }

  interface Emits {
    (e: 'open-filter'): void
  }

  const props = withDefaults(defineProps<Props>(), {
    showFilterButton: true,
    filterSelected: false,
    hideFilterButtonLabel: true,
    crutchTargetSelector: '.q-page-container',
    menu: () => [],
  })

  const emit = defineEmits<Emits>()

  const element = ref<VToolbar | null>(null)

  const crutch = ref<HTMLElement | undefined>()

  /**
   * Добавление вниз контейнера страницы элемента с выстой равной высоте AppToolbar,
   * что бы он не перекрывал контент. Высота не меняется, поэтому без resizeObserver
   *
   * Quasar добавляет/убирает padding для q-footer у q-page-container,
   * по-сути мы делаем тоже самое для своего кастомного второго футера (AppToolbar)
   * и не вмешиваемся в логику паддингов квазара
   *
   * Ну и AppToolbar на странице в ед. числе
   */
  const addCrutch = () => {
    const crutchTarget = document.querySelector(props.crutchTargetSelector)

    if (!crutchTarget) return

    const _crutch = document.createElement('div')

    _crutch.classList.add('app-toolbar-space-crutch')
    _crutch.style.height = `${getHeigth()}px`

    crutchTarget.append(_crutch)
    crutch.value = _crutch
  }

  const getHeigth = (): number => {
    return element.value?.$el.offsetHeight
  }

  /**
   * на случай, когда AppToolbar скрывается не через v-if, а стилями
   */
  const onIntersection = ({ isIntersecting }: { isIntersecting: boolean }) => {
    const crutchVal = crutch.value

    if (crutchVal) {
      if (isIntersecting) {
        crutchVal.classList.remove('hidden')
        crutchVal.style.height = `${getHeigth()}px`
      } else {
        crutchVal.classList.add('hidden')
      }
    }
  }

  /* onMounted(() => {
    addCrutch()
  }) */

  /* onUnmounted(() => {
    crutch.value?.remove()
  }) */

</script>

<style lang="scss" scoped>
  .app-toolbar {
    --app-toolbar-column-gap: 16px;
    display: flex;
    flex-wrap: wrap;
    gap: var(--app-toolbar-column-gap);
    padding: 16px var(--page-section-content-side-space);
    position: fixed;
    left: 0;
    right: 0;
    bottom: 68px;
    background: #fff;
    min-height: 64px;
    border-bottom: 1px solid #FAFAFA;
    z-index: 2000;
    box-shadow:
      0px -6px 6px -3px #ADC8D133,
      0px -10px 14px 1px #ADC8D124,
      0px -4px 18px 3px #ADC8D11F;

    &__end {
      display: flex;
      margin-left: auto;
      gap: var(--app-toolbar-column-gap);
    }
  }
</style>
