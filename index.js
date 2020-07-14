import MultiFunctionTable from './src/lib/MultiFunctionTable'

MultiFunctionTable.install = Vue => {
  Vue.component(MultiFunctionTable.name, MultiFunctionTable)
}

export default MultiFunctionTable
