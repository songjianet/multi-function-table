<template>
  <el-table :data="tableData" style="width: 100%">
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
</template>

<script type="text/jsx">
  export default {
    name: 'multi-function-table',

    props: {
      tableHeaders: {
        type: Array,
        default: () => {
          return []
        }
      }, // 表头
      tableData: {
        type: Array,
        default: () => {
          return []
        }
      }, // 表格总数据
    },

    data() {
      return {}
    },

    mounted() {},

    methods: {
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
      }
    },

    computed: {

    }
  }
</script>

<style lang="scss"></style>
