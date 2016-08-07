import { Record } from 'immutable'
import { TEST } from './testActions'

const InitalState = Record({ num: 0 })
const testReducer = (state = new InitalState(), action) => {
  switch (action.type) {
    case TEST:
      return state.update('num', (x) => x + 1)
    default:
      return state
  }
}

export default testReducer
