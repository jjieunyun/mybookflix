import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


// 설치했던 fontawesome-svg-core와 vue-fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// 이렇게하면 모든 아이콘들을 불러올 수 있다.
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

// 불러온 아이콘을 라이브러리에 담습니다.
library.add(
  fas,
  far,
  fab
)

// fontawesome아이콘을 Vue탬플릿에 사용할 수 있게 등록해 줍니다.
Vue.component('font-awesome-icon', FontAwesomeIcon)


Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false /* eslint-disable no-new */ 


//외부 js문서 import하기
import headerScroll from '@/assets/js/header.js'
Vue.use(headerScroll)

//import ContentsSlider from '@/assets/js/Slider'
//Vue.use(ContentsSlider)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')