## multi-function-table

> 基于`Element UI`进行二次开发的多功能表格组件

### 安装

#### 使用npm进行安装

```shell script
npm i multi-function-table
```

#### 使用yarn进行安装

```shell script
yarn add multi-function-table
```

### 快速上手

#### 全局引入

在`main.js`中引入：

```javascript
import Vue from 'vue'
import MultiFunctionTable from 'multi-function-table'
import App from './App.vue'

Vue.use(MultiFunctionTable)

new Vue({
  el: '#app',
  render: h => h(App)
})
```

在组件中引入：

```vue
<template>
  <MultiFunctionTable></MultiFunctionTable>
</template>
<script>
  import MultiFunctionTable from 'multi-function-table'

  export default {
    components: { MultiFunctionTable }
  }
</script>
```

### 表头背景颜色与字体颜色

```vue
<template>
  <MultiFunctionTable
    :table-data="tableData"
    :table-headers="tableHeaders"
    header-background="#000000"
    header-font-color="#ff0000">
  </MultiFunctionTable>
</template>
<script>
  export default {
    data() {
      return {
        tableData: [{
          name: '小明',
          mobile: '133xxxx8976',
          sex: '男'
        }, {
          name: '小红',
          mobile: '173xxxx8976',
          sex: '女'
        }],
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

### 表头中字体颜色

```vue
<template>
  <MultiFunctionTable
    :table-data="tableData"
    :table-headers="tableHeaders"
    body-color="green"
    header-background="#000000"
    header-font-color="#ff0000">
  </MultiFunctionTable>
</template>
<script>
  export default {
    data() {
      return {
        tableData: [{
          name: '小明',
          mobile: '133xxxx8976',
          sex: '男'
        }, {
          name: '小红',
          mobile: '173xxxx8976',
          sex: '女'
        }],
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

### 斑马纹

- 斑马纹默认为开启状态，可通过`isStripe`这个字段的布尔值进行设置，默认为`true`开启状态。

```vue
<template>
  <MultiFunctionTable
    :table-data="tableData"
    :table-headers="tableHeaders"
    stripe-background="red"
    header-background="#000000"
    header-font-color="#ff0000">
  </MultiFunctionTable>
</template>
<script>
  export default {
    data() {
      return {
        tableData: [{
          name: '小明',
          mobile: '133xxxx8976',
          sex: '男'
        }, {
          name: '小红',
          mobile: '173xxxx8976',
          sex: '女'
        }],
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

### 设置列宽度

在表头的配置相中增加`width`对象，用于设置列的宽度。

```ecmascript6
tableHeaders: [
  { prop: 'name', label: '姓名', width: 100 },
  { prop: 'mobile', label: '手机号' },
  { prop: 'sex', label: '性别' }
]
```

### 基础表格

基础的表格展示用法。

```vue
<template>
  <MultiFunctionTable
    :table-data="tableData"
    :table-headers="tableHeaders">
  </MultiFunctionTable>
</template>
<script>
  export default {
    data() {
      return {
        tableData: [{
          name: '小明',
          mobile: '133xxxx8976',
          sex: '男'
        }, {
          name: '小红',
          mobile: '173xxxx8976',
          sex: '女'
        }],
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

### 表格排序

```vue
<template>
  <MultiFunctionTable
    :table-data="tableData"
    :table-headers="tableHeaders">
  </MultiFunctionTable>
</template>
<script>
  export default {
    data() {
      return {
        tableData: [{
          name: '小明',
          mobile: '133xxxx8976',
          sex: '男'
        }, {
          name: '小红',
          mobile: '173xxxx8976',
          sex: '女'
        }],
        tableHeaders: [
          { prop: 'name', label: '姓名' },
          { prop: 'mobile', label: '手机号' },
          { prop: 'sex', label: '性别', options: { type: 'sort' } }
        ]
      }
    }
  }
</script>
```

### 多操作选项列表

可以在表格中的每一行数据进行右键点击，点击后会弹出一个操作列表，当对数据的操作选项过多时建议使用。
在参数的配置中，可以通过`icon`字段传入一个`icon`的`DOM`结构，用于操作选项的图标显示。
针对`DOM`的传入可以让你更灵活的使用`Element UI`提供的图标，也可以使用来自`iconfont`的图标。
可以传递fn选项为操作列表添加点击事件，注意fn不能用箭头函数 因为箭头函数用call apply绑定this
内部将this也就是上下文绑定为调用table组件的实例
fn中的row参数为当前选中行的数据

```vue
<template>
  <MultiFunctionTable
    :table-data="tableData"
    :table-headers="tableHeaders"
    :table-row-right-click-options="rightClickOptions">
  </MultiFunctionTable>
</template>
<script>
  export default {
    data() {
      return {
        tableData: [{
          name: '小明',
          mobile: '133xxxx8976',
          sex: '男'
        }, {
          name: '小红',
          mobile: '173xxxx8976',
          sex: '女'
        }],
        tableHeaders: [
          { prop: 'name', label: '姓名' },
          { prop: 'mobile', label: '手机号' },
          { prop: 'sex', label: '性别' }
        ],
        rightClickOptions: [
          { name: '修改', icon: '<i class="el-icon-edit"></i>', fn: function(row) {console.log(row)} },
          { name: '删除', icon: '<i class="el-icon-delete"></i>' }
        ]
      }
    }
  }
</script>
```

### 表格多选

通过将`is-checkbox`字段设置为`true`以增加表格多选功能，选中的项可以通过`currentSelection`方法进行返回。
如果设置默认复选状态与清空复选框，可以通过表格的静态方法toggleSelection进行设置。
如果直接调用toggleSelection()方法会清空当前复选状态
给toggleSelection方法传递一个数组toggleSelection(rows) 可以设置默认选中状态

```vue
<template>
  <el-button type="primary" @click="clearCheckbox">清空复选状态</el-button>
  <br>
  <el-button type="primary" @click="setCheckbox">设置默认复选框</el-button>
  <MultiFunctionTable
    ref="table"
    :table-data="tableData"
    :table-headers="tableHeaders"
    :is-checkbox="true"
    @currentSelection="currentSelection">
  </MultiFunctionTable>
</template>
<script>
  export default {
    data() {
      return {
        tableData: [{
          name: '小明',
          mobile: '133xxxx8976',
          sex: '男'
        }, {
          name: '小红',
          mobile: '173xxxx8976',
          sex: '女'
        }],
        tableHeaders: [
          { prop: 'name', label: '姓名' },
          { prop: 'mobile', label: '手机号' },
          { prop: 'sex', label: '性别' }
        ]
      }
    },
    methods: {
      currentSelection(e) {
        console.log(e)
      },
      clearCheckbox() {
        this.$refs.table.toggleSelection()
      },
      setCheckbox(rows) {
        this.$refs.table.toggleSelection([this.tableData[0]])
      }
    }
  }
</script>
```

### 分页

在该表格组件中，可以通过`is-page`参数传递一个布尔值来决定是否开启分页。
`hide-on-single-page`参数值为`true`时，在表格中只有一页数据的时候隐藏分页器

```vue
<template>
  <MultiFunctionTable
    :table-data="tableData"
    :table-headers="tableHeaders"
    :total="tableData.length"
    :page="1"
    :page-size="10"
    :hide-on-single-page="true">
  </MultiFunctionTable>
</template>
<script>
  export default {
    data() {
      return {
        tableData: [{
          name: '小明',
          mobile: '133xxxx8976',
          sex: '男'
        }, {
          name: '小红',
          mobile: '173xxxx8976',
          sex: '女'
        }],
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

### 分页大小选择器

分页大小选择器为用户提供几种可以改变分页大小的选项。

```vue
<template>
  <MultiFunctionTable
    :table-data="tableData"
    :table-headers="tableHeaders"
    :total="tableData.length"
    :page="1"
    :page-size="10"
    :page-sizes="[5, 10, 25, 50, 100]">
  </MultiFunctionTable>
</template>
<script>
  export default {
    data() {
      return {
        tableData: [{
          name: '小明',
          mobile: '133xxxx8976',
          sex: '男'
        }, {
          name: '小红',
          mobile: '173xxxx8976',
          sex: '女'
        }],
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

### 分页器布局

可以根据使用场景组合不同的分页器子模块的布局方式。

```vue
<template>
  <MultiFunctionTable
    :table-data="tableData"
    :table-headers="tableHeaders"
    :total="tableData.length"
    :page="1"
    :page-size="10"
    page-layout="prev, pager, next">
  </MultiFunctionTable>
</template>
<script>
  export default {
    data() {
      return {
        tableData: [{
          name: '小明',
          mobile: '133xxxx8976',
          sex: '男'
        }, {
          name: '小红',
          mobile: '173xxxx8976',
          sex: '女'
        }],
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

### 分页器位置

通过`page-position`参数设置分页器相对于表格的位置，提供`left`、`center`和`right`三个选项，默认为`center`。

```vue
<template>
  <MultiFunctionTable
    :table-data="tableData"
    :table-headers="tableHeaders"
    :total="tableData.length"
    :page="1"
    :page-size="10"
    page-position="right"
    page-layout="prev, pager, next">
  </MultiFunctionTable>
</template>
```

### 分页器背景

```vue
<template>
  <MultiFunctionTable
    :table-data="tableData"
    :table-headers="tableHeaders"
    :total="tableData.length"
    :page="1"
    :page-size="10"
    :page-background="true"
    page-layout="prev, pager, next">
  </MultiFunctionTable>
</template>
<script>
  export default {
    data() {
      return {
        tableData: [{
          name: '小明',
          mobile: '133xxxx8976',
          sex: '男'
        }, {
          name: '小红',
          mobile: '173xxxx8976',
          sex: '女'
        }],
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

### 事件

|事件名|说明|参数
|:----|:----|:----|
|rowClick|当某一行被点击时会触发该事件|```row, column, event```|
|currentPage|当分页器的当前页发生变化时会触发该事件|```page```|
|selectionChange|当多选框选中项发生变化时会触发该事件|```selection```|

