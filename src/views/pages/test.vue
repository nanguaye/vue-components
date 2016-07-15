<template>
  <div>Test</div>
  <div>
    <Display></Display>
    <Increment></Increment>
  </div>
  <div>测试公用组件</div>
  <div>
    <div class="div-btn">
      <button class="btn1" @click="demo1()">按钮1</button>
    </div>
    <div class="div-btn">
      <button class="btn1" @click="demo2()">按钮2</button>
    </div>
    <div class="div-btn">
      <button class="btn1" @click="demo3()">按钮3</button>
    </div>
    <div class="div-btn">
      <button class="btn1" @click="demo4()">按钮4</button>
    </div>

  </div>
  <!--:msg-content="msgContent"-->
  <!--这里要是不加sync 那一次点击的时候 msgShow true 显示.这时候会传给子,然后子里面做close时候,msgSHow=>false,
  <!--然后 我们再点的时候!父还是会传给子 true 但是这个时候 子是不会反馈给父的了!所以导致在父里面这个组件 -->
<alert-msg :msg-show.sync='msgShow' :options.sync="options" ></alert-msg>
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
<script>
  import Display from './Display.vue'
  import Increment from './Increment.vue'
  import store from './vuex/store' // import 我们刚刚创建的 store
  import alertMsg from '../components/alertMsg.vue'
  console.log('store', store)
  export default {
    components: {
      Display,
      Increment,
      alertMsg
    },
    store: store, // 在根组件加入 store，让它的子组件和 store 连接
    data () {
      return {
        msgShow: false,
        options: {}
      }
    },
    methods: {
      demo1 () {
        this.msgShow = true; // 弹出弹窗
        this.options = {content:'demo1,字体:蓝色,背景:浅灰',textColor:'blue',backgroundColor:'#e5e5e5'}
      },
      demo2 () {
        this.msgShow = true; // 弹出弹窗
        this.options = {content:'demo2字体:红色,背景:白色',textColor:'red',backgroundColor:'#ffffff'}
      }
    }
  }
</script>
