<template>
  <div>
    <!--alertMsg-->
    <div class="msg">
      <div class="msg-name">alertMsg:</div>
      <div class="msg-demo">
        <button class="msg-btn" @click="demo1">demo1</button>
        <button class="msg-btn" @click="demo2">demo2</button>
      </div>
    </div>
    <!--dialogService-->
    <div class="msg">
      <div class="msg-name">alertMsg:</div>
      <div class="msg-demo">
        <button class="msg-btn" @click="demo3">demo3</button>
        <button class="msg-btn" @click="demo4">demo4</button>
      </div>
    </div>
    <!--popup-->
    <div class="msg">
      <div class="msg-name">popup:</div>
      <div class="msg-demo">
        <button class="msg-btn" @click="popup1()">popup1</button>
      </div>
    </div>
    <!--left->right-->
    <div class="msg">
      <div class="msg-name">left->right:</div>
      <div class="msg-demo">
        <button class="msg-btn" @click="leftRight()">left->right</button>
      </div>
    </div>
    <!--loading-->
    <div class="msg">
      <div class="msg-name">loading:</div>
      <div class="msg-demo">
        <button class="msg-btn" @click="loading()">loading</button>
      </div>
    </div>

    <!--img-->
    <div class="msg">
      <div class="msg-name">img:</div>
      <div class="msg-demo">
        <button class="msg-btn" @click="img()">img</button>
      </div>
    </div>
  </div>
  <!--alertMsg组件-->
  <alert-msg :is-show.sync="isMsgShow" :options.sync="options"></alert-msg>
  <!--dialogService组件-->
  <dialog-service :is-show.sync="isDialogShow" :content="content" :on-cancel="onCancel" :cancel-text="cancelText"
                  :ok-text="okText" :on-ok="onOK"></dialog-service>
  <!--popup组件-->
  <popup :is-show.sync="popupShow">
    <div>slot</div>
    <button @click="popupBtn">点击</button>
  </popup>
  <!--leftRight-->
  <left-right :is-show.sync="isLeftRightShow">left-right页面</left-right>
  <!--loading-->
  <loading :is-show.sync="isLoadingShow"></loading>
  {{num}}
  <div v-for="yea in yeas">{{yea}}</div>
</template>
<style lang="stylus" rel="stylesheet/stylus">
  .msg {
    padding: 10Px;
    border-bottom 1px solid
    .msg-name {
      float: left;
      margin-right: 10Px;
      line-height: 25Px
    }
    .msg-demo {
      .msg-btn {
        border: 1px solid;
        margin-right: 5Px
      }
    }
  }
</style>
<script type="text/babel">
  import alertMsg from '../components/alertMsg.vue'
  import dialogService from '../components/dialogService.vue'
  import popup from '../components/popup.vue'
  import leftRight from '../components/left-right.vue'
  import loading from '../components/loading.vue'
  export default {
    init () {
//      this.yeas = [5,6,7,8];  // init的话 数据
    },
    created () {
//      this.yeas = [1,2,3,4];
    },
    compiled() {
//      this.yeas = [1,2,3,4];
    },
    attached() {
//      this.yeas = [1,2,3,4];
    },
    ready() {
      window.onpopstate = () => {  // 每当处于激活状态的历史记录条目发生变化时就会触发
        this.isLeftRightShow = false
      }
    },
    components: {
      alertMsg,
      dialogService,
      popup,
      leftRight,
      loading
    },
    data () {
      return {
        num: 100,
        isMsgShow: false,
        options: {},
        isDialogShow: false,
        content: '',
        cancelText: '',
        onCancel: () => {
        },
        onOK: () => {
        },
        okText: '',
        popupShow: false,
        isLeftRightShow: false,
        isLoadingShow: false
      }
    },
    methods: {
      // alertMsg 组件测试
      demo1 () {
        this.isMsgShow = true;
        this.options = { content: 'demo1,字体:蓝色,背景:浅灰', textColor: 'blue', backgroundColor: '#e5e5e5' }
      },
      demo2 () {
        this.isMsgShow = true;
        this.options = { content: 'demo1,字体:红色,背景:白色', textColor: 'red', backgroundColor: '' }
      },
      // dialogService 组件测试
      demo3 () {
        this.isDialogShow = true;
        this.content = '测试demo3-dialogService';
        this.cancelText = 'cancel';
        this.onCancel = () => {
          console.log('触发onCancel方法')
          this.isDialogShow = false;
        };
        this.onOK = () => {
          console.log('触发onOk方法')
          this.isDialogShow = false;
        };
        this.okText = 'ok'
      },
      demo4 () {
        this.isDialogShow = true;
        this.content = '测试demo4-dialogService';
        this.cancelText = '取消';
        this.okText = '确认';
        this.onCancel = () => {
          console.log('触发onCancel方法')
          this.isDialogShow = false;
        };
        this.onOK = () => {
          console.log('触发onOk方法')
          this.isDialogShow = false;
        };
      },
      popup1 () {
        this.popupShow = true
      },
      popupBtn () {
        console.log('123232')
        this.num = 123
      },
      leftRight () {
        window.history.pushState('',''); // history 存一条记录
        this.isLoadingShow = true;// 显示菊花转模拟
        setTimeout(() => {
          this.isLoadingShow = false;// 关闭菊花转模拟
          this.isLeftRightShow = true;// 显示left->right
        },2000)
        console.log('leftRight')
      },
      loading () {
        console.log('loading')
        this.isLoadingShow = true
      }
    }
  }
</script>
