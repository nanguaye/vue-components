<template>
    <div>incrementchild</div>
</template>
<style>
</style>
<script>
  export default {
    ready () {
      this.$on('childMsg', function (data) {
        console.log('incrementchild', data)
      })
      this.$on('emit', function (data) {
        console.log('emit', data)
      })
      this.$on('fatherMsg', function (data) {
        console.log('fatherMsg', data)
      })
    }
  }
</script>
