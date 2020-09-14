<template>
  <dl
    class="options-list"
    ref="optionsList"
    :class="isMaskShow ? 'list' : ''"
    :style="isMaskShow ? renderOptionsListStyle : ''">
    <dd
      @mouseover="fItem.secondMenu && fItem.secondMenu.length > 0 ? secondMenuShowStatus = true : secondMenuShowStatus = false"
      class="f-list"
      v-for="(fItem, fIndex) in listOptions"
      :key="'f' + fIndex">
      <span v-html="fItem.icon"></span>
      <span @click.stop="handleClick(fItem)">{{fItem.name}}</span>
      <dl v-if="fItem.secondMenu && secondMenuShowStatus">
        <dd v-for="(sItem, sIndex) in fItem.secondMenu" :key="'s' + sIndex">
          <span v-html="sItem.icon"></span>
          <span @click.stop="handleClick(sItem)">{{sItem.name}}</span>
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
      },
      value: {
        type: Object,
        default: {}
      } // 与表格组合使用时传入的鼠标右键点击的event坐标
    },

    data() {
      return {
        secondMenuShowStatus: false, // 二级菜单显示隐藏
        isMaskShow: false, // 遮罩层状态
        renderOptionsListStyle: {}, // 操作菜单样式渲染
        tempRenderOptionsListStyle: {}, // 临时保存操作菜单样式，用于滚动时候计算
        toDocumentHeight: '' // 坐标到整个文档之间的距离
      }
    },

    methods: {
      handleClick(item) {
        if(item.fn) {
          // HACK 暂时先这样 有时间再改
          const context = this.$parent.$parent
          item.fn.call(context, this.value.current.row)
        }
      }
    },
    mounted() {
      if (!window.onscroll) {
        window.onscroll = () => {
          console.log(this.tempRenderOptionsListStyle)
          const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
          if (Object.keys(this.tempRenderOptionsListStyle).length !== 0) {
            this.renderOptionsListStyle = {
              top:  (this.toDocumentHeight - scrollTop) + 'px',
              left: this.tempRenderOptionsListStyle.left,
              display: 'block'
            }
          }
        }
      }
    },

    watch: {
      value: {
        handler(n) {
          if (n.left && n.top) {
            this.isMaskShow = true
            this.$refs['optionsList'].style = `display: block; left: ${n.left}; top: ${n.top}`
            this.secondMenuShowStatus = false
            this.tempRenderOptionsListStyle = n
            this.toDocumentHeight = parseInt(n.top.split('px')[0]) + (document.documentElement.scrollTop || document.body.scrollTop)
          } else {
            this.isMaskShow = false
          }
        },
        immediate: true
      }
    }
  }
</script>

<style lang="scss" scoped>
  .options-list {
    display: none;
  }

  .list {
    position: fixed;
    z-index: 99;
  }
</style>
