/**
 * indexdb API
 * @author yutent<yutent.io@gmail.com>
 * @date 2020/08/31 15:46:20
 */

import Method from './method.js'

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
