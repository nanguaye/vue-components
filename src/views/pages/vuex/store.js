/**
 * Created by nangua on 16/7/13.
 */
import Vue from 'vue'
import Vuex from 'vuex'
// 告诉 vue “使用” vuex
Vue.use(Vuex)

// 创建一个对象来保存应用启动时的初始状态
const state = {
  // TODO: 放置初始状态
  count: 1
}

// 创建一个对象存储一系列我们接下来要写的 mutation 函数
const mutations = {
  // TODO: 放置我们的状态变更函数
  // mutation 的第一个参数是当前的 state
  // 你可以在函数里修改 state
  addition (state) {
    console.log(state.count)
    state.count ++
    console.log('触发addition 方法')
  },
  demo (state){
    console.log('触发demo方法', state)
  }
}


// 整合初始状态和变更函数，我们就得到了我们所需的 store
// 至此，这个 store 就可以连接到我们的应用中
export default new Vuex.Store({
  state,
  mutations
})
