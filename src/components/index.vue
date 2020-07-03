<template>
  <div class="container">
    <div>{{msg}}</div>
    <div>{{propData}}</div>
    <el-button type="primary">主要按钮</el-button>
  </div>
</template>

<script>
  export default {
    name: 'multi-function-table',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    props: {
      propData: {
        type: String,
        default: '我是默认值'
      }
    }
  }
</script>

<style lang="scss">
  .container{
    text-align: center;
  }
</style>
