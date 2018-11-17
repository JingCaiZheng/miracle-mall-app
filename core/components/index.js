import link from './base/link'
import navigation from './common/bottom_menu'
import header from './base/header'
import button from './base/button'

export default {
  install (Vue){
      Vue.component('mLink', link),
      Vue.component('m-button',button),
      Vue.component('mHeader', header),
      Vue.component('mNavigation', navigation)
  }
}
