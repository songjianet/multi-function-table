<template>
  <div>
    <Index :propData='initData'/>
  </div>
</template>

<script>
  import Index from './lib/index'
  export default {
    data(){
      return {
        initData: 'hello 你好'
      }
    },
    components: {
      Index
    }
  }
</script>
