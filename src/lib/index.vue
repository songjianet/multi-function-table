<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column
      v-for="(item, index) in tableHeaders"
      :key="index"
      :prop="item.prop"
      :label="item.label"
      :render-header="openMultiTableHeader ? renderHeader : (h, { column, $index }) => {
        return column.label
      }">
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

      openMultiTableHeader: {
        type: Boolean,
        default: false
      }, // 开启
    },

    data() {
      return {
        renderHeader(h, { column, $index }) {
          return (
            <i class="el-icon-caret-bottom"></i>
          )
          console.log(h, column, $index)
        }
      }
    },

    mounted() {
    }
  }
</script>

<style lang="scss"></style>
