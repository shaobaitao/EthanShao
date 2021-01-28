import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import './assets/fonts/fonts.css'
import './assets/icons/iconfont.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.use(Vuetify)
Vue.use(ElementUI);

new Vue({
  vuetify: new Vuetify(),
  render: h => h(App),
}).$mount('#app')
