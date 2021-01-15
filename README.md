## multi-function-table

> 基于`ElementUI`进行二次开发的多功能表格组件

---

### 安装

#### 使用npm进行安装

```shell script
npm i multi-function-table
```

#### 使用yarn进行安装

```shell script
yarn add multi-function-table
```

---

### 引入

#### 全局引入

```javascript
import Vue from 'vue'
import App from './App.vue'
import MultiFunctionTable from 'multi-function-table'

Vue.use(MultiFunctionTable)

new Vue({
  el: '#app',
  render: h => h(App)
})
```

#### 组件中引入

```vue
<template>
  <multi-function-table></multi-function-table>
</template>
<script>
  import MultiFunctionTable from 'multi-function-table'

  export default {
    components: { MultiFunctionTable }
  }
</script>
```

---

### 参数说明

#### 基础参数说明

|参数|说明|类型|可选值|默认值
|:----|:----|:----|:----|:----|
|table-headers|表头以及带有多操作选项的配置。多选操作包含提示文字、排序。|Array|prop / label / options|[]|
|table-height|是否启用固定表头。|String|'200px'|'false'|
|table-data|表格中的数据。|Array|-|[]|
|table-header-height|表头的高度。|String / Number|-|50|
|header-background|表头背景颜色。|String|-|'#f2f5fa'|
|header-font-color|表头文字颜色。|String|-|'#909399'|
|is-stripe|是否启用斑马纹表格。|Boolean|false / true|true|
|stripe-background|斑马纹背景颜色。|String|-|'#f7f8fa'|
|body-color|表格中数据展示区域的字体颜色。|String|-|'#001741'|
|is-checkbox|是否启用表格多选操作。|Boolean|false / true|false|
|is-page|是否启用分页器。|Boolean|false / true|false|
|page|当前选中的页面。|Number|-|1|
|total|表格数据总条数。|Number|-|0|
|page-size|分页大小，决定一页显示多少条数据。|Number|-|10|
|page-sizes|快捷选择分页大小，可以通过选择分页器中的选项决定分页大小。|Array|-|[5, 10, 25, 50, 100]|
|page-position|分页器位置。|String|'left' / 'center' / 'right'|'center'|
|page-layout|分页器功能布局配置，可任意选择可选值，进行顺序的调整。|String|'prev' / 'pager' / 'next' / 'sizes' / 'jumper'|'prev, pager, next, sizes, jumper'|
|page-background|是否启用带有选中背景的分页器。|Boolean|false / true|true|
|hide-on-single-page|是否在只有一页数据时候隐藏分页器。|Boolean|false / true|true|

#### 表头多选参数说明

|参数|说明|类型|可选值|默认值
|:----|:----|:----|:----|:----|
|prop|对应`table-data`中需要显示的字段。|String|-|-|
|label|字段需要在表头中展示的名称。|String|-|-|
|options|表头是否支持操作选项。目前多功能表头只支持信息提示'popover'、排序'sort'|Array|'popover' / 'sort'|-|

### 方法说明

|事件名称|说明|回调参数|参数说明
|:----|:----|:----|:----|
|rowClick|当某一行被点击时会触发该事件。|row, column, event|row: 当前行数据。column: 当前列数据。event: 事件信息。|
|currentPage|当分页器的当前页发生变化时会触发该事件。|page|page: 当前选中的页码。|
|selectionChange|当多选框选中项发生变化时会触发该事件。|selection|selection: 勾选的下标数组。|
|sizeChange|当分页器中分页大小发生改变时会触发该事件。|size|size: 选中的分页大小。|

### 多功能表格使用示例

#### 基础表格

基础表格展示

```vue
<template>
  <multi-function-table
    :table-data="tableData"
    :table-headers="tableHeaders" />
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        { name: '小明', mobile: '133xxxx8976', sex: '男'},
        { name: '小红', mobile: '173xxxx8976', sex: '女'}
      ],
      tableHeaders: [
        { prop: 'name', label: '姓名' },
        { prop: 'mobile', label: '手机号' },
        { prop: 'sex', label: '性别' }
      ]
    }
  }
}
</script>
```

#### 多功能表头

多功能表头允许使用提示信息和排序功能。多功能表头只需要在`table-header`参数中进行配置即可。

```vue
<template>
  <multi-function-table
    :table-data="tableData"
    :table-headers="tableHeaders" />
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        { name: '小明', mobile: '133xxxx8976', sex: '男'},
        { name: '小红', mobile: '173xxxx8976', sex: '女'}
      ],
      tableHeaders: [
        { prop: 'name', label: '姓名' },
        { prop: 'mobile', label: '手机号' },
        {
          prop: 'sex',
          label: '性别',
          options: [
            {
              type: 'popover',
              props: {
                icon: 'el-icon-edit',
                content: '提示内容'
              }
            },
            {
              type: 'sort'
            }
          ]
        }
      ]
    }
  }
}
</script>
```


#### 自定义模板

自定义列的显示内容，可以搭配其他`ElementUI`组件一起使用。通常自定义列需要使用插槽进行实现。

```vue
<template>
  <multi-function-table
    :table-data="tableData"
    :table-headers="tableHeaders">
    <template slot="options" slot-scope="scope">
      <el-button>按钮</el-button>
    </template>
  </multi-function-table>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        { name: '小明', mobile: '133xxxx8976', sex: '男'},
        { name: '小红', mobile: '173xxxx8976', sex: '女'}
      ],
      tableHeaders: [
        { prop: 'name', label: '姓名' },
        { prop: 'mobile', label: '手机号' },
        { prop: 'sex', label: '性别' },
        { prop: 'options', label: '操作' }
      ]
    }
  }
}
</script>
```
