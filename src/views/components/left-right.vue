<template>
  <div class="left-right" v-if="isShow" transition="left-right-slide">
    <slot></slot>
  </div>
</template>
<style lang="stylus" rel="stylesheet/stylus">
  .left-right {
    position: fixed;
    background-color: #ffffff;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

  .left-right-slide {
    &-transition {
      transform :translateX(0);
      transition: .3s all
    }
    &-enter, &-leave{
      transform: translateX(100%)
    }

  }
</style>
<script type="text/babel">
  export default {
    props: {
      'isShow': {
        type: Boolean,
        default: false
      }
    }
  }
</script>
