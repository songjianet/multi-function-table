<template>
 <div class="container">
    <!--  表格  -->
    <el-table
      ref="multipleTable"
      :stripe="isStripe"
      :data="tableData"
      style="width: 100%"
      :header-row-style="{height: tableHeaderHeight + 'px'}"
      :header-cell-style="{
        backgroundColor: headerBackground,
        color: headerFontColor
      }"
      :height="tableHeight"
      :cell-style="cellStyle"
      :row-style="() => {return {color: this.bodyColor}}"
      @row-click="rowClick"
      @row-contextmenu="clickRight"
      @selection-change="handleSelectionChange">
      <el-table-column
        v-if="isCheckbox"
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column
        v-for="(item, index) in tableHeaders"
        :key="index"
        :prop="item.prop"
        :label="item.label"
        :sortable="item.options ? !!item.options.map(i => i.type).includes('sort') : false"
        :render-header="setHeader"
        :width="item.width">
        <!--   普通插槽   -->
        <template slot-scope="scope" >
          <slot :name="item.prop" :row="scope.row" :$index="scope.$index">
            <span>{{scope.row ? scope.row[item.prop] : ''}}</span>
          </slot>
        </template>
      </el-table-column>
    </el-table>

    <!--  分页  -->
    <div v-if="isPage" class="pagination-container" style="display: flex;" :style="setPagePositionStyle()">
      <el-pagination
        :background="pageBackground"
        :layout="pageLayout"
        :total="total"
        :page-sizes="pageSizes"
        :page-size="pageSize"
        :hide-on-single-page="hideOnSinglePage"
        :current-page.sync="privatePage"
        @current-change="currentPage"
        @size-change="_handleSizeChange">
      </el-pagination>
    </div>

    <!--  鼠标右键点击表格行后弹出的列表  -->
    <right-click-list
      :menu="$scopedSlots.clickMenu"
      :value="tableBodyClick"
      :list-options="tableRowRightClickOptions"/>
  </div>
</template>

<script type="text/jsx">
  import RightClickList from './RightClickList'

  export default {
    name: 'multi-function-table',

    props: {
      dataTakeOverMode: {
        type: Boolean,
        default: false
      }, // 是否启用数据接管
      tableHeaders: {
        type: Array,
        default: () => { return [] }
      }, // 表头
      tableHeight: {
        type: String,
        default: 'false'
      },
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
      }, // 表头高度
      isStripe: {
        type: Boolean,
        default: true
      }, // 是否为斑马纹表格
      stripeBackground: {
        type: String,
        default: '#f7f8fa'
      }, // 斑马纹表格背景颜色
      bodyColor: {
        type: String,
        default: '#001741'
      },
      isCheckbox: {
        type: Boolean,
        default: false
      }, // 启用表格多选
      isPage: {
        type: Boolean,
        default: false
      }, // 是否启用表格分页
      page: {
        type: Number,
        default: 1
      }, // 当前页
      total: {
        type: Number,
        default: 0
      }, // 总条数
      pageSize: {
        type: Number,
        default: 10
      }, // 分页大小
      pageSizes: {
        type: Array,
        default: () => { return [5, 10, 25, 50, 100] }
      }, // 可更改的分页大小
      pagePosition: {
        type: String,
        default: 'center'
      },
      pageLayout: {
        type: String,
        default: () => { return 'prev, pager, next, sizes, jumper' }
      }, // 分页模板
      pageBackground: {
        type: Boolean,
        default: true
      }, // 分页器背景
      hideOnSinglePage: {
        type: Boolean,
        default: false
      }, // 只有一个页面时是否隐藏分页器
      headerBackground: {
        type: String,
        default: '#f2f5fa'
      }, // 设置表头背景颜色
      headerFontColor: {
        type: String,
        default: '#909399'
      } // 设置表头字体颜色
    },

    data() {
      return {
        tableBodyClick: {}, // 点击表格中行的坐标
        tableHeadersSortActive: '',
        tableHeadersSortStatus: '',
        privatePage: 1
      }
    },

    watch: {
      page: function () {
        this.privatePage = this.page
      }
    },

    mounted() {
      this.privatePage = this.page

      if (!window.rightClickOptionsList) {
        window.rightClickOptionsList = () => {
          const DOM = document.getElementsByClassName('options-list')
          for (let i = 0, length = DOM.length; i < length; i++) {
            DOM[i].style = 'display: none;'
          }
        }
      }

      document.body.removeEventListener('click', window.rightClickOptionsList)
      document.body.addEventListener('click', window.rightClickOptionsList)
    },

    methods: {
      /**
       * 当前页选中的时候触发
       * */
      currentPage(e) {
        if (this.dataTakeOverMode) {

        } else {
          this.$emit('currentPage', e)
        }
      },

      rowClick(row, column, event) {
        this.$emit('rowClick', row, column, event)
      },

      /**
       * 点击表格中的行时触发, 渲染表格行右键列表的起始位置坐标
       * */
      clickRight(row, column, e) {
        if (this.tableRowRightClickOptions.length === 0) {
          return false
        }

        e.preventDefault()

        this.tableBodyClick = {
          left: e.clientX + 'px',
          top: e.clientY + 'px',
          current: {row, column, e}
        }
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
              dom = this._renderHeaderLabelIcon(h, item.options, column.label, column.property)
            }
          }
        })

        return dom
      },

      /**
       * 根据不同功能渲染表头文字和图标
       * @param {Object} options 传入的多功能表格中表头的配置文件
       * @param {String} label 传入的表头label
       * @param {String} prop 传入的表头prop
       * @return 处理后的DOM
       * */
      _renderHeaderLabelIcon(h, options, label, prop) {
        let _dom = []

        if (options.length === 1) {
          if (options[0].type === 'sort') {
            _dom.push(
              <span class="render-header">
                { label }
              </span>
            )
          }

          if (options[0].type === 'popover') {
            _dom.push(
              h('span', {}, [
                h('span', {}, ''),
                h('el-popover', { props: { placement: 'top', width: '200', trigger: 'hover', content: options[0].props.content }}, [
                  h('span', { slot: 'reference', class: 'font-normal', style: { cursor: 'pointer' }}, [
                    h('span', label),
                    h('i', { class: options[0].props.icon, style: { margin: '0 5px' } })
                  ])
                ])
              ])
            )
          }
        } else {
          options.forEach(item => {
            if (item.type === 'sort' && options.length < 1) {
              _dom.push(
                <span class="render-header">
                { label }
              </span>
              )
            }

            if (item.type === 'popover') {
              _dom.push(
                h('span', {}, [
                  h('span', {}, ''),
                  h('el-popover', { props: { placement: 'top', width: '200', trigger: 'hover', content: item.props.content }}, [
                    h('span', { slot: 'reference', class: 'font-normal', style: { cursor: 'pointer' }}, [
                      h('span', label),
                      h('i', { class: item.props.icon, style: { margin: '0 5px' } })
                    ])
                  ])
                ])
              )
            }
          })
        }

        return _dom
      },

      /**
      * 暴露出的静态方法 用于表格有复选框的时候 可以清空复选空与设置默认选中状态
      * @static method
      * @param {Array} rows 可选参数 传入默认选中行的数据对象传入一个数组 如果不传走清空逻辑
      * */
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row)
          })
        } else {
          this.$refs.multipleTable.clearSelection()
        }
      },

      handleSelectionChange(val) {
        this.$emit('selectionChange', val)
      },

      setPagePositionStyle() {
        let temp = ''

        if (this.pagePosition === 'left') {
          temp = 'flex-start'
        } else if (this.pagePosition === 'center') {
          temp = 'center'
        } else if (this.pagePosition === 'right') {
          temp = 'flex-end'
        }

        return { justifyContent: temp }
      },

      cellStyle({row, column, rowIndex, columnIndex}) {
        let obj = {}
        if (rowIndex % 2 !== 0) {
          obj['background'] = this.stripeBackground
        }
        return obj
      },

      _handleSizeChange(val) {
        this.$emit('sizeChange', val)
      }
    },

    components: {
      RightClickList
    }
  }
</script>

<style lang="scss" scoped>
  .container /deep/ .el-table th >.cell {
    padding-left: 14px;
    width: calc(100% - 4px);
  }

  .container /deep/ .el-table__header-wrapper,
  .container /deep/ .el-table__header-wrapper thead th,
  .container /deep/ .el-table__header-wrapper thead th .cell {
    overflow: visible !important;
  }

  .container {
    position: relative;

    .pagination-container {
      margin-top: 20px;
    }
  }

  .render-header {
    &:hover {
      cursor: pointer;
    }
  }
</style>
