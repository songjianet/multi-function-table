<template>
  <div>
    <img src="https://cn.vuejs.org/images/logo.png" alt="">
    <div>{{msg}}</div>
    <br>
    <el-button type="primary" @click="clearCheckbox">清空复选状态</el-button>
    <br>
    <el-button type="primary" @click="setCheckbox">设置默认复选框</el-button>
    <div>
      <MultiFunctionTable
        :table-data="tableData"
        :table-headers="tableHeaders"
        table-max-height="300">
        <template slot="id" slot-scope="scope">
          <span class="mft-url-style" @click="detailPage(scope.row.id)">{{scope.row.id}}</span>
        </template>
        <template slot="iso" slot-scope="scope">
          <el-popover
            placement="bottom"
            title="标题"
            width="200"
            trigger="click"
            content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
            <el-button slot="reference">click 激活</el-button>
          </el-popover>
        </template>
      </MultiFunctionTable>
    </div>
  </div>
</template>

<script>
  import MultiFunctionTable from './lib/MultiFunctionTable'

  const HEADERS = [
    {
      prop: 'id',
      label: 'ID'
    },
    {prop: 'name', label: '名称'},
    {prop: 'status', label: '状态', width: 100},
    {prop: 'type', label: '类型', width: 100},
    {prop: 'iso', label: '镜像'},
    {prop: 'configure', label: '配置'},
    {
      prop: 'network',
      label: '网络',
      options: [
        {
          type: 'popover',
          props: {
            icon: 'el-icon-edit',
            content: 'fadf'
          }
        },
        {
          type: 'sort'
        }
      ]
    },
    {prop: 'createTime', label: '创建时间'}
  ]

  const RIGHT_CLICK_OPTIONS = [
    {name: '修改', icon: '<i class="el-icon-edit"></i>', fn: function(val) {
      console.log(val)
      this.msg = "world"
    }},
    {name: '启动', icon: '<i class="el-icon-video-play"></i>'},
    {name: '关机', icon: '<i class="el-icon-edit"></i>'},
    {name: '重启', icon: '<i class="el-icon-edit"></i>'},
    {
      name: '网络',
      icon: '<i class="el-icon-edit"></i>',
      secondMenu: [
        {name: '加入', icon: '<i class="el-icon-edit"></i>'},
        {name: '离开', icon: '<i class="el-icon-edit"></i>'}
      ]
    }
  ]

  export default {
    data() {
      return {
        msg: 'hello',
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

      rowClick(row, column, even) {
        console.log(row, column, even)
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
      },
      clearCheckbox() {
        this.$refs.table.toggleSelection()
      },
      setCheckbox(rows) {
        this.$refs.table.toggleSelection([this.tableData[0]])
      },
      sizeChange(val) {
        console.log(val)
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
