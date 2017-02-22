import { observable, action } from 'mobx'

class Test {
  @observable count

  constructor () {
    this.count = 0
  }

  @action.bound setCount (data) {
    this.count = data
  }
}

export default new Test()
