// action 会收到 store 作为它的第一个参数
// 既然我们只对事件的分发（dispatch 对象）感兴趣。（state 也可以作为可选项放入）
// 我们可以利用 ES6 的解构（destructuring）功能来简化对参数的导入
const addition = function ({ dispatch, state }) {
  dispatch('addition', 1)
}
const demo = function ({ dispatch, state }) {
  dispatch('demo', 2)
}

export {addition, demo}
