/**
 * {}
 * @author yutent<yutent.io@gmail.com>
 * @date 2023/04/11 15:11:31
 */

export default class Method {
  constructor(table) {
    this.table = table
  }

  put(obj) {
    this.table.put(obj)
  }

  get(id) {
    var res = this.table.get(id)
    return new Promise(resolve => {
      res.onsuccess = function (ev) {
        resolve(this.result)
      }
    })
  }

  getAll() {
    var res = this.table.getAll()
    return new Promise(resolve => {
      res.onsuccess = function (ev) {
        resolve(this.result)
      }
    })
  }

  delete(id) {
    this.table.delete(id)
  }
}
