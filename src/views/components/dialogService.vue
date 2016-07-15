<template>
  <div class="zzc" @click="close" v-if="isShow" transition="zzc-slide"></div>
  <div class="alert-msg-content" v-if="isShow" :style="setStyle" transition="dialog-slide">
    <div class="alert-msg-head">
      <span>{{content}}</span>
    </div>
    <div class="alert-msg-foot">
      <div class="alert-msg-cancel" @click="onCancel"><span>{{cancelText}}</span></div>
      <div class="alert-msg-ok" @click="onOk"><span>{{okText}}</span></div>
    </div>
  </div>
</template>
<style lang="stylus" rel="stylesheet/stylus">
  .zzc-slide {
    &-transition {
      opacity: 1
      transition: all .3s
    }
    &-enter, &-leave {
      opacity: 0
    }
  }

  .dialog-slide {
    &-transition {
      opacity: 1
      transition: all .3s
    }
    &-enter, &-leave {
      opacity: 0
      transform: translate(-50%, -50%) scale(0.5)!important;
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
    width: 250Px;
    height: 130Px;
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
    .alert-msg-head {
      width: 100%;
      height: 60%;
      border-bottom: 1px solid #e5e5e5;
      display: table;
      span {
        display: table-cell;
        vertical-align: middle;
        font-weight: bold;
        font-size: 20Px;
        padding: 0 10Px
      }
    }
    .alert-msg-foot {
      width: 100%;
      height: 40%;
      .alert-msg-cancel {
        height: 100%;
        width: 50%;
        float: left;
        display: table;
        border-right: 1px solid #e5e5e5;
        box-sizing: border-box;
        span {
          display: table-cell;
          vertical-align: middle
        }
      }
      .alert-msg-ok {
        height: 100%;
        width: 50%;
        float: right;
        display: table;
        span {
          display: table-cell;
          vertical-align: middle
        }
      }
    }
  }
</style>
<script type="text/babel">
  export default {
    props: {
      isShow: {
        type: Boolean,
        twoWay: true // 双向绑定 调用组件的页面 必须要加上.sync
      },
      content: {
        type: String,
        default: '默认内容'
      },
      okText: {
        type: String,
        default: '确认'
      },
      cancelText: {
        type: String,
        default: '取消'
      },
      onCancel: {
        type: Function,
        default: () => {
        }
      },
      onOk: {
        type: Function,
        default: () => {
        }
      }
    },
    methods: {
      close () {
        this.isShow = false
      }
    }
  }


</script>
