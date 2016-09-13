import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import { isDev } from 'meta/utils'

const configureStore = () => createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension && isDev() ? window.devToolsExtension() : f => f
  )
)

export default configureStore
