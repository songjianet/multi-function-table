<template>
  <div class="container">
    <el-table
      :data="tableData"
      style="width: 100%"
      :header-row-style="{height: tableHeaderHeight + 'px'}"
      @row-contextmenu="clickRight">
      <el-table-column
        v-for="(item, index) in tableHeaders"
        :key="index"
        :prop="item.prop"
        :label="item.label"
        :render-header="setHeader">
        <!--   普通插槽   -->
        <template slot-scope="scope">
          <slot :name="item.prop" :row="scope.row" :$index="scope.$index">
            <span>{{scope.row ? scope.row[item.prop] : ''}}</span>
          </slot>
        </template>
      </el-table-column>
    </el-table>
    <!--  鼠标右键点击表格行后弹出的列表  -->
    <div
      v-show="tableRowRightClickOptions.length !== 0 && tableRowRightClickStatus"
      :class="tableRowRightClickStatus ? 'row-list_mask' : ''"
      @click="tableRowRightClickStatus = false"
      @click.right="_tableRowListPosition">
      <right-click-list
        :class="tableRowRightClickStatus ? 'row-list' : ''"
        :style="tableRowRightClickStatus ? clickTableRowListStyle : ''"
        :list-options="tableRowRightClickOptions" />
    </div>
  </div>
</template>

<script type="text/jsx">
  import RightClickList from './right-click-list'

  export default {
    name: 'multi-function-table',

    props: {
      tableHeaders: {
        type: Array,
        default: () => { return [] }
      }, // 表头
      tableData: {
        type: Array,
        default: () => { return [] }
      }, // 表格总数据
      tableRowRightClickOptions: {
        type: Array,
        default: () => { return [] }
      }, // 右键点击后操作列表的数据
      tableHeaderHeight: {
        type: String | Number,
        default: 50
      } // 表头高度
    },

    data() {
      return {
        tableRowRightClickStatus: false,
        clickTableRowListStyle: {},
      }
    },

    mounted() {

    },

    methods: {
      /**
       * 点击表格中的行时触发
       * */
      clickRight(row, column, e) {
        this._tableRowListPosition(e)

        this.tableRowRightClickStatus = true
      },

      /**
       * 设置多功能表头
       * @param {Function} h 参照element-ui
       * @param {Object} column 参照element-ui
       * @param {Number} $index 参照element-ui
       * @return 处理后的DOM
       * */
      setHeader(h, { column, $index }) {
        let dom

        this.tableHeaders.forEach(item => {
          if (item.prop === column.property) {
            if (!item.options) {
              // 不存表头配置项时，返回默认的表头
              dom = <span>{ item.label }</span>
            } else {
              // tableHeaders中存在表头配置项
              dom = this._renderHeaderLabelIcon(item.options, column.label)
            }
          }
        })

        return dom
      },

      /**
       * 根据不同功能渲染表头文字和图标
       * @param {Object} options 传入的多功能表格中表头的配置文件
       * @param {String} label 传入的表头文字
       * @return 处理后的DOM
       * */
      _renderHeaderLabelIcon(options, label) {
        let _dom

        if (options.type === 'sort') {
          options.value === 'desc' ?
            _dom = <span>{ label }<i class="el-icon-sort-down"></i></span> :
            _dom = <span>{ label }<i class="el-icon-sort-up"></i></span>
        } else if (options.type === 'selector') {
          _dom = <span>{ label }<i class="el-icon-arrow-down"></i></span>
        }

        return _dom
      },

      /**
       * 渲染表格行右键列表的起始位置坐标
       * */
      _tableRowListPosition(e) {
        if (e.clientY < this.tableHeaderHeight) {
          return false
        }

        e.preventDefault()

        this.clickTableRowListStyle = {
          left: e.clientX + 'px',
          top: e.clientY + 'px'
        }
      }
    },

    components: {
      RightClickList
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    position: relative;

    .row-list_mask {
      width: 100vw;
      height: 100vh;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 9;

      .row-list {
        position: absolute;
        z-index: 99;
      }
    }
  }
</style>
