import Vue from 'vue'
import App from './App.vue'
import {
  Button,
  Table,
  TableColumn,
  Pagination,
  Dropdown,
  DropdownMenu,
  DropdownItem
} from 'element-ui'

import './assets/style/iconfont.css'

Vue.use(Button)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Pagination)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)

new Vue({
  el: '#app',
  render: h => h(App)
})
