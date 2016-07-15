<template>
  <div>
    <button class="increment-a" @click="addition">Increment +1</button>
    <button class="increment-a" @click="demo">demo</button>
  </div>
</template>
<style>
  .increment-a {
    border: 1px solid;
  }
</style>
<script>
  import { addition } from './vuex/actions'
  import { demo } from './vuex/actions'
  console.log('demo', demo)
  export default {
    vuex: {
      actions: {
        addition: addition,
        demo: demo
      }
    },
    methods: {
      demo () {
      }
    }
  }
</script>
