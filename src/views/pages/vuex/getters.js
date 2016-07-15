/**
 * Created by nangua on 16/7/13.
 */
// 这个 getter 函数会返回 count 的值
// 在 ES6 里你可以写成：
// export const getCount = state => state.count


// export const getCount = state => state.count
export function getCount (state) {
  console.log('触发getCount')
  return state.count
}
