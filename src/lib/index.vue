<template>
  <div class="container">
    <!--  表格  -->
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

    <!--  分页  -->
    <div class="pagination-container">
      <el-pagination
        :layout="pageLayout"
        :total="total"
        :hide-on-single-page="hideOnSinglePage"
        @current-change="currentPage">
      </el-pagination>
    </div>

    <!--  鼠标右键点击表格行后弹出的列表  -->
    <right-click-list
      :table-header-height="tableHeaderHeight"
      :table-body-click="tableBodyClick"
      :list-options="tableRowRightClickOptions" />
  </div>
</template>

<script type="text/jsx">
  import RightClickList from './right-click-list'

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
      page: {
        type: Number,
        default: 1
      }, // 当前页
      total: {
        type: Number,
        default: undefined
      }, // 总条数
      pageSize: {
        type: Number,
        default: 10
      }, // 分页大小
      pageSizes: {
        type: Array,
        default: () => { return [5, 10, 25, 50, 100] }
      }, // 可更改的分页大小
      pageLayout: {
        type: String,
        default: () => { return 'prev, pager, next' }
      }, // 分页模板
      hideOnSinglePage: {
        type: Boolean,
        default: false
      }, // 只有一个页面时是否隐藏分页器
    },

    data() {
      return {
        tableHeaderSelectorActive: undefined, // 表格中选中的表头
        listPositionStyle: {}, // 表格中选择器表头的
        tableBodyClick: {}, // 点击表格中行的坐标
        tableHeadersSortActive: '',
        tableHeadersSortStatus: '',
      }
    },

    created() {},

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

      /**
       * 点击表格中的行时触发, 渲染表格行右键列表的起始位置坐标
       * */
      clickRight(row, column, e) {
        if (e.clientY < this.tableHeaderHeight) {
          return false
        }

        e.preventDefault()

        this.tableBodyClick = {
          left: e.clientX + 'px',
          top: e.clientY + 'px'
        }

        console.log(this.tableBodyClick)
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
              dom = this._renderHeaderLabelIcon(item.options, column.label, column.property)
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
      _renderHeaderLabelIcon(options, label, prop) {
        let _dom

        if (options.type === 'sort') {
          _dom =
            <span class="sort" onClick={ () => this._sortTableHeaderClick(prop) }>
              { label }
              {
                this.tableHeadersSortActive ?
                  (
                    this.tableHeadersSortActive === prop ?
                      <i class={ this.tableHeadersSortStatus === 'asc' ? 'el-icon-sort-up' : 'el-icon-sort-down'}></i> :
                      <i class="el-icon-sort"></i>
                  ) :
                  <i class="el-icon-sort"></i>
              }
            </span>
        } else if (options.type === 'selector') {
          _dom =
            <span class="selector" onClick={ (e) => this._selectorTableHeaderClick(e, prop) }>
              { label }
              <i class="el-icon-arrow-down"></i>
              {
                this.tableHeaderSelectorActive === prop ?
                  <dl class="selector-list" style={ this.listPositionStyle }>
                    {
                      this.tableHeaders.map(item => {
                        if (prop === item.prop) {
                          return item.options.value.map(oItem => {
                            return <dd key={ oItem.key }>{ oItem.val }</dd>
                          })
                        }
                      })
                    }
                  </dl> :
                  ''
              }
            </span>
        }

        return _dom
      },

      /**
       * 鼠标点击表格中带有排序的表头
       * @param {String} prop 表格表头数据字段名
       * */
      _sortTableHeaderClick(prop) {
        this.tableHeadersSortActive = prop

        if (this.tableHeadersSortStatus === 'desc') {
          this.tableHeadersSortStatus = 'asc'
        } else {
          this.tableHeadersSortStatus = 'desc'
        }
      },

      /**
       * 鼠标点击表格中带有选择器的表头
       * @param {Object} e
       * @param {String} prop 表格表头数据字段名
       * */
      _selectorTableHeaderClick(e, prop) {
        this.listPositionStyle = {
          left: e.clientX + 'px',
          top: e.clientY + 'px'
        }

        this.tableHeaderSelectorActive ?
          (
            this.tableHeaderSelectorActive === prop ?
              this.tableHeaderSelectorActive = undefined :
              this.tableHeaderSelectorActive = prop
          ) :
          this.tableHeaderSelectorActive = prop
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

    .pagination-container {
      margin-top: 20px;
    }
  }

  .sort {
    &:hover {
      cursor: pointer;
    }
  }

  .selector {
    .selector-list {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 9;
      background-color: black;
      color: aliceblue;

      > dd {
        margin: 0;
      }
    }

    &:hover {
      cursor: pointer;
    }
  }
</style>
