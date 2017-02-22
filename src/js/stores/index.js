import test from 'stores/test'
import mobx from 'mobx'

mobx.useStrict(true)

const stores = {
  test,
}
window.stores = stores

export default stores
