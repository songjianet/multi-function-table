// import Index from "./src/lib/index"
//
// const components = [Index]
// let main = {}
//
// main.install = (Vue) => {
//   components.map(component => {
//     Vue.component(component.name, component) // 注册组件
//     main[component.name] = component
//   })
// }
//
// /* 支持使用标签的方式引入 */
// if (typeof window !== 'undefined' && window.Vue) {
//   install(window.Vue)
// }
//
// export default main
//
// export {
//   Index
// }

import Main from './src/lib/index'
import _Vue from 'vue'

Main.install = Vue => {
  if (!Vue) {
    window.Vue = Vue = _Vue
  }
  Vue.component(Main.name, Main)
}
export default Main
