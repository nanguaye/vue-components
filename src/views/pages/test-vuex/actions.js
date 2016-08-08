/**
 * Created by nangua on 16/7/29.
 */
export const actionDemo = function ({dispatch, state}) {
  console.log('执行了actionDemo',state)
  state.number = [1,2,3]
  dispatch('demo',[4,5,6])
}
