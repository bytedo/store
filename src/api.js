/**
 * indexdb API
 * @author yutent<yutent.io@gmail.com>
 * @date 2020/08/31 15:46:20
 */

class Method {
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

export default class Api {
  constructor(db) {
    this.db = db
  }

  table(name) {
    var ta = this.db.transaction(name, 'readwrite')
    var table = ta.objectStore(name)
    return new Method(table)
  }
}
