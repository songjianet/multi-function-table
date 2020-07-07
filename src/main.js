import Vue from 'vue'
import App from './App.vue'
import { Button, Table, TableColumn, Pagination } from 'element-ui'

import './assets/style/iconfont.css'

Vue.use(Button)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Pagination)

new Vue({
  el: '#app',
  render: h => h(App)
})
