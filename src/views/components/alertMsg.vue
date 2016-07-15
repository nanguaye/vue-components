<template>
  <!--@click="close"-->
  <div class="zzc"  v-if="isShow" transition="zzc-slide"></div>
  <div class="alert-msg-content" v-if="isShow" :style="setStyle" transition="msg-slide">
    <span>{{options.content}}</span>
  </div>
</template>
<style lang="stylus" rel="stylesheet/stylus">
  .zzc-slide {
    &-transition {
      opacity: 1;
      transition: .3s all
    }
    &-enter, &-leave {
      opacity: 0
    }
  }

  .msg-slide {
    &-transition {
      opacity: 1;
      transition: .3s all
    }
    &-enter {
      opacity: 0
      transform: translate(-50%, -50%) scale(1.5) rotate(180deg) !important;
    }
    &-leave {
      opacity: 0
      transform: translate(-50%, -50%) scale(0)!important;
    }
  }

  /*0------1-------0*/
  .zzc {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    color: #ffffff;
    z-index: 10;
  }

  .alert-msg-content {
    width: 150Px;
    height: 80Px;
    background-color: #ffffff;
    border-radius: 6Px;
    text-align: center;
    z-index: 11;
    position: fixed;
    top: 50%;
    left: 50%;
    display: table;
    transform: translate(-50%, -50%) scale(1);
    span {
      display: table-cell;
      vertical-align: middle
    }
  }
</style>
<script type="text/babel">
  export default {
//    props: ['msgShow', 'msgContent']
    props: {
      isShow: {
        type: Boolean,
        default: false   // 默认值
      },
      options: {
        type: Object,
        default: function () {
          return {}
        }
      }
    },
    computed: {
      setStyle: function () {
        return {
          color: this.options.textColor || '#000000',
          background: this.options.backgroundColor || '#ffffff'
        }
      }
    },
    methods: {
      close () {
        this.isShow = false;
        this.options = {}
      }
    },
    watch: {
       'isShow': function (newVal, oldVal) {
            console.log('newVal',newVal,'oldVal', oldVal)
         if (newVal) {    // 这里是为了解决连续弹出的时候造成的问题..可以去掉看看效果
           if (newVal !== oldVal) {
             setTimeout( () => {
               this.close()
             },1000)
           }
         }
       }
    }
  }
</script>
