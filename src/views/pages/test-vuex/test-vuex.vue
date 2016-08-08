<template>
    <div>text-vuex</div>
</template>
<style lang="stylus" rel="stylesheet/stylus">

</style>
<script type="text/babel">
  import store from './store'
  import {actionDemo} from './actions'
  export default {
    store: store,
    vuex: {
      getters: {
        num: state => state.number
      },
      actions: {
        actionDemo
      }
    },
    ready () {
      this.actionDemo()
      console.log('num',this.num)
//      console.log('num', this.num)
//      console.log('actionDemo', this.actionDemo)

    }
  }
</script>
