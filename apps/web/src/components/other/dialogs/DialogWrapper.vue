<template>
  <v-dialog 
    :model-value="visible"
    @update:model-value="$emit('close')"
  >
    <v-card
      class="modal-wrapper"
      :style="wrapperStyles"
    >
      <div
        class="modal-wrapper__header mb-9"
        :class="`skin-${headerSkin}`"
      >
        <div class="modal-wrapper__header-wrapper text-h1 ">
          <span>{{ title }}</span>

          <div
            v-if="$slots['header-actions']"
            class="row items-center mr-8"
          >
            <slot name="header-actions"></slot>
          </div>

        </div>

        <template v-if="$slots.close">
          <div
            class="ml-8"
            @click="$emit('close')"
          >
            <slot name="close"></slot>
          </div>
        </template>

        <BaseButton
          v-else
          icon="close"
          color="grey-7"
          @click="$emit('close')"
        />
      </div>

      <slot name="additional-bar"></slot>

      <slot></slot>

      <div
        v-if="$slots.footer || buttonCancelVisible || buttonConfirmVisible"
        class="modal-wrapper__footer mt-6"
      >
        <template v-if="$slots.footer">
          <div class="full-width">
            <slot name="footer"></slot>
          </div>

        </template>

        <template v-else-if="!hideDefaultFooter">
          <BaseButton
            v-if="buttonCancelVisible"
            class="mr-8"
            :label="buttonCancelText"
            :color="buttonCancelColor"
            @click="$emit('cancel')"
          />

          <BaseButton
            v-if="buttonConfirmVisible"
            :label="buttonConfirmText"
            :color="skin"
            :disabled="buttonConfirmDisabled"
            @click="$emit('submit')"
          />
        </template>
      </div>
    </v-card>

  </v-dialog>
</template>

<script lang="ts" setup>

  import { computed } from 'vue'


  type Props = {
    headerSkin?: 'default' | 'border-bottom'
    visible: boolean
    width?: number | string
    height: string
    title: string
    buttonCancelVisible?: boolean
    buttonCancelText?: string
    buttonConfirmText?:string
    buttonConfirmVisible?: boolean
    buttonConfirmDisabled?: boolean
    buttonCancelColor: 'primary' | 'secondary' | 'positive' | 'accent'
    skin?: 'primary' | 'secondary' | 'positive' | 'accent'
    hideDefaultFooter?: boolean
    withScroll?: boolean
  }

  const props = withDefaults(defineProps<Props>(), {
    buttonCancelText: 'Вернуться',
    buttonConfirmText: 'Сохранить',
    buttonCancelVisible: true,
    buttonConfirmDisabled: false,
    buttonConfirmVisible: true,
    hideDefaultFooter: false,
    headerSkin: 'default',
    skin: 'positive',
    width: 1024,
  })

  const wrapperStyles = computed(() => {
    return {
      width: `${props.width}px`,
      height: props.height,
      maxWidth: '100vw',

    }
  })
</script>

<style lang="scss" scoped>
  .modal-wrapper {
    display: flex;
    flex-direction: column;
    padding: 20px 32px 32px;
    overflow: hidden !important;
    border-radius: 16px;

    &__header {
      display: flex;
      justify-content: space-between;
      align-items: center;

      height: 32px;

      &-wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;

        flex-direction: row;
        flex-grow: 1;
        width: 100%;
      }
    }

    &__footer {
      display: flex;
      justify-content: space-between;
      align-items: end;
    }
  }

  .skin {
    &-border-bottom {
      border-bottom: 1px solid rgba(0, 0, 0, 0.12);
    }
  }
</style>
