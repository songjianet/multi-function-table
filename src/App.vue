<template>
  <MultiFunctionTable
    :table-data="tableData"
    :table-headers="tableHeaders"
    :open-multi-table-header="false">
    <template slot="id" slot-scope="scope">
      <span class="mft-url-style" @click="detailPage(scope.row.id)">{{scope.row.id}}</span>
    </template>
    <template slot="iso" slot-scope="scope">
      <span class="icon iconfont iconcentos"></span>
      <span>{{scope.row.iso}}</span>
    </template>
  </MultiFunctionTable>
</template>

<script>
  import MultiFunctionTable from './lib/index'

  const HEADERS = [
    { prop: 'id', label: 'ID' },
    { prop: 'name', label: '名称' },
    { prop: 'status', label: '状态' },
    { prop: 'type', label: '类型' },
    { prop: 'iso', label: '镜像' },
    { prop: 'configure', label: '配置' },
    { prop: 'network', label: '网络' },
    { prop: 'createTime', label: '创建时间' },
  ]

  const DATA = [{
    id: 'i-djpru7t9',
    name: 'testDEMO',
    status: '1',
    type: '企业型 e2',
    iso: 'CentOS 7.7 64bit',
    configure: '2CPU 4G',
    network: '(cjx-demo) / 192.168.0.2',
    createTime: '2020-07-02 17:35:42'
  }, {
    id: 'i-dji0sru7t9',
    name: 'testDEMO666',
    status: '0',
    type: '个人型 e1',
    iso: 'ubuntu 6.5 64bit',
    configure: '1CPU 2G',
    network: '(cjx-demo) / 192.168.0.1',
    createTime: '2020-01-22 11:15:12'
  }]

  export default {
    data(){
      return {
        tableData: DATA,
        tableHeaders: HEADERS
      }
    },
    methods: {
      detailPage(id) {
        console.log(id)
      }
    },
    components: {
      MultiFunctionTable
    }
  }
</script>

<style lang="scss" scoped>
  .mft-url-style {
    color: #0366d6;
    &:hover {
      border-bottom: 1px solid #0041af;
      cursor: pointer;
    }
  }
</style>
