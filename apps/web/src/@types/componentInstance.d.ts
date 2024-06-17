import type { GlobalComponents } from 'vue'
import type { GlobalComponents as AutoImportComponents } from './components'

/**
 * @see https://github.com/unplugin/unplugin-vue-components/issues/601#issuecomment-1437848252
 */
declare global {
  type ComponentInstance = {
    [Property in keyof GlobalComponents]: InstanceType<GlobalComponents[Property]>
  } & {
    [Property in keyof AutoImportComponents]: InstanceType<AutoImportComponents[Property]>
  }
}
