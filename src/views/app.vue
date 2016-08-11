<template>
  <div>
    <!--<test></test>-->
    <!--<com-display></com-display>-->
    <!--<test-vuex></test-vuex>-->
    <choose-product></choose-product>
  </div>
</template>

<script type="text/babel">
  //  import test from './pages/Test.vue'
  //  import comDisplay from './pages/componentDisplay.vue'
//  import testVuex from './pages/test-vuex/test-vuex.vue'
  import chooseProduct from './components/choose-product.vue'
  export default {
    components: {
//      test
//      comDisplay
//      testVuex
      chooseProduct
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
