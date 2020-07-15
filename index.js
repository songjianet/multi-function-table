import MultiFunctionTable from './src/lib/MultiFunctionTable'
import RightClickList from './src/lib/RightClickList'

MultiFunctionTable.install = Vue => {
  Vue.component(MultiFunctionTable.name, MultiFunctionTable)
  Vue.component(RightClickList.name, RightClickList)
}

export default MultiFunctionTable

export {
  MultiFunctionTable,
  RightClickList
}


// import MultiFunctionTable from './src/lib/MultiFunctionTable'
// import RightClickList from './src/lib/RightClickList'
//
// const components = [
//   MultiFunctionTable,
//   RightClickList
// ] // 还可以再写别的组件
//
// let componentObj = {};
//
// componentObj.install = (Vue) => {
//   components.map(component => {
//     Vue.component(components[key].name, components[key]) // 注册组件
//     componentObj[components[key].name] = components[key]
//   })
// }
//
// /* 支持使用标签的方式引入 */
// if (typeof window !== 'undefined' && window.Vue) {
//   install(window.Vue)
// }
//
// export default componentObj // 默认全局导出
//
// export {
//   MultiFunctionTable,
//   RightClickList   //     按需导出
// }
