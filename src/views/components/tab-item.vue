<template>
  <div class="tab-item-page">
    <div class="tab-items fn-clear">
      <div class="tab" v-for="item in tabItems" v-bind:style="tabObject">
        <span @click="tabChange(item, $index)">{{item.text}}</span>
      </div>
    </div>
    <div class="line" transition="line-run" v-bind:style="lineObj"></div>
  </div>
</template>
<style lang="stylus" rel="stylesheet/stylus">
  /* 清理浮动 */
  .fn-clear:after
    visibility: hidden
    display: block
    font-size: 0
    content: " "
    clear: both
    height: 0
  .fn-clear
    zoom:1
  .tab-item-page
    border-top 1px solid
    padding 40px 0
    .tab-items
      .tab
        float left
        text-align center
        padding 0 30px
        box-sizing border-box
        span
          display inline-block
          padding 10px 0
    .line
      display inline-block
      margin-top 20px
      border-bottom 2px solid#909090
      transition .5s all
</style>
<script type="text/babel">
  export default {
    props: {
      'tabItems': {
        type: Array,
        default: []
      }
    },
    data() {
      return {
        tabObject: {},
        lineObj: {}
      }
    },
    ready() {
     let tabNums = this.tabItems.length
      this.tabObject = {
        width: 100/tabNums +'%'
      }
      this.lineObj = {
        width: (100/tabNums) +'%',
        transform: 'translateX(0)'
      }
    },
    methods: {
      tabChange(item, $index){
        console.log($index)
        this.lineObj.transform = `translateX(${$index* 100}%)`
      }
    }
  }
</script>
