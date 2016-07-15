<template>
  <div>
    <h3>Count is {{ getCount }}</h3>
    <h3>{{getCount1}}</h3>
    <h3>{{ b }}</h3>
    <h3 @click="demo()">点击</h3>
    <div v-mydirective:hello.a.b="dirNum">{{dirNum}}</div>
  </div>
</template>
<style>
</style>
<script>
//  import { getCount } from './vuex/getters'
  export default {
    vuex: {
      getters: {
        // 注意在这里你需要 `getCount` 函数本身而不是它的执行结果 'getCount()'
        // 这个 getCount 方法用es6语法写的话 state => state.count
        getCount: function (state) {
          return state.count
        }
      }
    },
    data () {
      console.log('执行data')
      return {
        getCount1: 1000,
        a: 1,
        dirNum: 100
      }
    },
    computed: {
      b: {
        get : function (val) {
          console.log('get')
          return 50
        },
        set: function (newVal) {
          console.log('set', newVal)
        }
      }
    },
    methods: {
      demo () {
        this.dirNum = 200;
        this.a = 5;
        console.log('demo!demo')
      }
    },
    watch: {
    },
    directives: {
      mydirective:{
        bind: function () {
          console.log('bindbind')
          // 准备工作
          // 例如，添加事件处理器或只需要运行一次的高耗任务
        },
        update: function (value, oldValue) {
          // 值更新时的工作
          // 也会以初始值为参数调用一次
          this.el.innerHTML =
            'name - '       + this.name + '<br>' +
            'expression - ' + this.expression + '<br>' +
            'argument - '   + this.arg  + '<br>' +
            'modifiers - '  + JSON.stringify(this.modifiers) + '<br>' +
            'value - '      + value
        },
        unbind: function () {
          // 清理工作
          // 例如，删除 bind() 添加的事件监听器
        }
      }
    }
  }
</script>
