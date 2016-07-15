<template>
  <div class="popup-zzc" @click="close" v-if="isShow" transition="zzc-slide"></div>
  <div class="popup" v-if="isShow" transition="popup-slide">
    <slot></slot>
  </div>
</template>
<style lang="stylus" rel="stylesheet/stylus">
  .popup-zzc {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    color: #ffffff;
    z-index: 10;
  }

  .popup {
    width: 100%;
    height: 300Px;
    background-color: #ffffff;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 11

  }

  .popup-slide {
    &-transition {
      transition: .3s all
      transform: translateY(0)
    }
    &-enter {
      transform: translateY(100%)
    }
    &-leave {
      transform: translateY(100%)
    }

  }

  .zzc-slide {
    &-transition {
      opacity: 1;
      transition: .3s all
    }
    &-enter, &-leave {
      opacity: 0
    }
  }
</style>
<script type="text/babel">
  export default {
    props: {
      isShow: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      close () {
        this.isShow = false
      }
    }
  }
</script>
