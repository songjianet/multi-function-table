<template>
  <MultiFunctionTable
    :table-data="tableData"
    :table-headers="tableHeaders"
    :table-row-right-click-options="rightClickOptions"
    :total="9"
    :hide-on-single-page="false"
    :is-checkbox="true"
    @currentPage="currentPage"
    @currentSelection="currentSelection">
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
  import MultiFunctionTable from './lib/MultiFunctionTable'

  const HEADERS = [
    {
      prop: 'id',
      label: 'ID',
      options: {
        type: 'sort'
      }
    },
    { prop: 'name', label: '名称' },
    {
      prop: 'status',
      label: '状态',
      options: {
        type: 'selector',
        value: [{
          key: -1,
          val: '全部'
        }, {
          key: 0,
          val: '等待中'
        }, {
          key: 1,
          val: '运行中'
        }]
      }
    },
    {
      prop: 'type',
      label: '类型',
      options: {
        type: 'selector',
        value: [{
          key: -1,
          val: '全部'
        }, {
          key: 0,
          val: '基础性'
        }, {
          key: 1,
          val: '企业型e1'
        }, {
          key: 2,
          val: '企业型e2'
        }]
      }
    },
    { prop: 'iso', label: '镜像' },
    { prop: 'configure', label: '配置' },
    { prop: 'network', label: '网络' },
    {
      prop: 'createTime',
      label: '创建时间',
      options: {
        type: 'sort'
      }
    },
  ]

  const RIGHT_CLICK_OPTIONS = [
    { name: '修改', icon: '<i class="el-icon-edit"></i>' },
    { name: '启动', icon: '<i class="el-icon-video-play"></i>' },
    { name: '关机', icon: '<i class="el-icon-edit"></i>' },
    { name: '重启', icon: '<i class="el-icon-edit"></i>' },
    {
      name: '网络',
      icon: '<i class="el-icon-edit"></i>',
      secondMenu: [
        { name: '加入', icon: '<i class="el-icon-edit"></i>' },
        { name: '离开', icon: '<i class="el-icon-edit"></i>' }
      ]
    }
  ]

  export default {
    data() {
      return {
        tableData: [],
        tableHeaders: HEADERS,
        rightClickOptions: RIGHT_CLICK_OPTIONS
      }
    },
    mounted() {
      for (let i = 0; i < 10; i++) {
        this.tableData.push({
          id: 'i-djpru7t9' + i,
          name: 'testDEMO' + i,
          status: '1' + i,
          type: '企业型 e2' + i,
          iso: 'CentOS 7.7 64bit' + i,
          configure: '2CPU 4G' + i,
          network: '(cjx-demo) / 192.168.0.2' + i,
          createTime: '2020-07-02 17:35:42' + i
        })
      }
    },
    methods: {
      detailPage(id) {
        console.log(id)
      },

      currentPage(e) {
        this.tableData = []
        for (let i = e * 10; i < e * 10 + 10; i++) {
          this.tableData.push({
            id: 'i-djpru7t9' + i,
            name: 'testDEMO' + i,
            status: '1' + i,
            type: '企业型 e2' + i,
            iso: 'CentOS 7.7 64bit' + i,
            configure: '2CPU 4G' + i,
            network: '(cjx-demo) / 192.168.0.2' + i,
            createTime: '2020-07-02 17:35:42' + i
          })
        }
      },

      currentSelection(e) {
        console.log(e)
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
