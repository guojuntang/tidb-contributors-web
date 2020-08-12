import Vue from 'vue'
import App from './App.vue'
import 'element-ui/lib/theme-chalk/index.css';
// import {Card, Pagination} from 'element-ui'
import ElementUI from 'element-ui'

Vue.config.productionTip = false
// Vue.use(Card)
// Vue.use(Pagination)
Vue.use(ElementUI)

new Vue({
  render: h => h(App),
}).$mount('#app')
