/**
 * Created by nangua on 16/7/29.
 */
import Vue from 'vue'
import Vuex from 'vuex'
// 告诉 vue “使用” vuex
Vue.use(Vuex)

// 初始化一些数据
const state = {
  number: []
}

// 定义一些fun
const mutations = {
  demo (state,data){
    console.log('触发demo方法', state.number,data)
    state.number = data
  }
}
//end
// 整合初始状态和变更函数，我们就得到了我们所需的 store
// 至此，这个 store 就可以连接到我们的应用中
export default new Vuex.Store({
  state,
  mutations
})
