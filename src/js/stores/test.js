import { observable, action } from 'mobx'

class Test {
  @observable count

  constructor () {
    this.count = 0
  }

  @action setCount (data) {
    this.count = data
  }
}

export default new Test()
