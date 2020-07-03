import Index from "./src/components/index.vue"

const components = [Index]
let main = {}

main.install = (Vue) => {
  components.map(component => {
    Vue.component(components[key].name, components[key]) // 注册组件
    main[components[key].name] = components[key];
  })
}

/* 支持使用标签的方式引入 */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default main

export {
  Index
}
