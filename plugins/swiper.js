import Vue from 'vue'
import Swiper from 'swiper/dist/js/swiper'
// require styles
import 'swiper/dist/css/swiper.css'
// Vue.use(Swiper)
// Vue.use(VueAwesomeSwiper /* { default global options } */)
// if (process.browser) {
//   const VueAwesomeSwiper = require('vue-awesome-swiper/dist/ssr')
//   Vue.use(VueAwesomeSwiper)
// }
Vue.prototype.$Swiper = Swiper
