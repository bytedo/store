/**
 * indexdb辅助方法
 * @author yutent<yutent.io@gmail.com>
 * @date 2020/08/31 15:20:56
 */

export function defer() {
  let obj = {}
  obj.promise = new Promise((resolve, reject) => {
    obj.resolve = resolve
    obj.reject = reject
  })
  return obj
}
