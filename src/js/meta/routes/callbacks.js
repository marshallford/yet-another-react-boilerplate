import store from 'meta/store'
import { test } from 'test/testActions'

const testOnEnter = () => store.dispatch(test())

export { testOnEnter }
