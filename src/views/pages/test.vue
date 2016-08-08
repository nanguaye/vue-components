<template>
  <div>Test</div>
  <div>
    <Display></Display>
    <Increment></Increment>
  </div>
</template>
<style>
  .div-btn {
    width: 100%;
    text-align: center;
    padding: 40px 0;
  }

  .btn1 {
    border: 1px solid;

  }
</style>
<script type="text/babel">
  import Display from './Display.vue'
  import Increment from './Increment.vue'
  import store from './vuex/store' // import 我们刚刚创建的 store
  console.log('store', store)
  export default {
    vuex: {
      getters: {

      },
      actions: {

      }
    },
    components: {
      Display,
      Increment
    },
    store: store, // 在根组件加入 store，让它的子组件和 store 连接
    methods: {}
  }
</script>
