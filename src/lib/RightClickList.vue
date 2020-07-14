<template>
  <div
    v-if="listOptions.length !== 0 && rightClickStatus"
    :class="rightClickStatus ? 'list_mask' : ''"
    @click="(rightClickStatus = false) & (secondMenuShowStatus = false)"
    @click.right="_tableRowListPosition">
    <dl
      class="container"
      :class="rightClickStatus ? 'list' : ''"
      :style="rightClickStatus ? clickTableRowListStyle : ''">
      <dd
        @mouseover="fItem.secondMenu && fItem.secondMenu.length > 0 ? secondMenuShowStatus = true : secondMenuShowStatus = false"
        class="f-list"
        v-for="(fItem, fIndex) in listOptions"
        :key="'f' + fIndex">
        <span v-html="fItem.icon"></span>
        <span>{{fItem.name}}</span>
        <dl v-if="fItem.secondMenu && secondMenuShowStatus">
          <dd v-for="(sItem, sIndex) in fItem.secondMenu" :key="'s' + sIndex">
            <span v-html="sItem.icon"></span>
            <span>{{sItem.name}}</span>
          </dd>
        </dl>
      </dd>
    </dl>
  </div>
</template>

<script>
  export default {
    name: 'right-click-list',

    props: {
      listOptions: {
        type: Array,
        default: () => { return [] }
      },
      tableBodyClick: {
        type: Object,
        default: {}
      }, // 与表格组合使用时传入的鼠标右键点击的event坐标
      tableHeaderHeight: {
        type: String | Number,
        default: 50
      }
    },

    data() {
      return {
        secondMenuShowStatus: false,
        rightClickStatus: false,
        clickTableRowListStyle: {}
      }
    },

    mounted() {

    },

    methods: {
      _tableRowListPosition(e) {
        if (e.clientY < this.tableHeaderHeight) {
          return false
        }

        this.secondMenuShowStatus = false

        e.preventDefault()

        this.clickTableRowListStyle = {
          left: e.clientX + 'px',
          top: e.clientY + 'px'
        }
      }
    },

    watch: {
      tableBodyClick: {
        handler(n) {
          if (n.left && n.top) {
            this.rightClickStatus = true
            this.clickTableRowListStyle = n
          } else {
            this.rightClickStatus = false
          }
        },
        immediate: true
      }
    }
  }
</script>

<style lang="scss" scoped>
  .list_mask {
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 9;

    .list {
      position: absolute;
      z-index: 99;
    }
  }
</style>
