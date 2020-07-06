<template>
  <dl class="container">
    <dd class="f-list" v-for="(fItem, fIndex) in listOptions" :key="'f' + fIndex">
      <span v-html="fItem.icon"></span>
      <span>{{fItem.name}}</span>
      <dl v-if="fItem.secondMenu">
        <dd v-for="(sItem, sIndex) in fItem.secondMenu" :key="'s' + sIndex">
          <span v-html="sItem.icon"></span>
          <span>{{sItem.name}}</span>
        </dd>
      </dl>
    </dd>
  </dl>
</template>

<script>
  export default {
    name: 'right-click-list',

    props: {
      listOptions: {
        type: Array,
        default: () => { return [] }
      }
    },

    mounted() {
      console.log(this.listOptions)
    }
  }
</script>

<style lang="scss" scoped>

</style>
