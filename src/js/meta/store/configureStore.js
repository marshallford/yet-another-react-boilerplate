import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import { routerMiddleware } from 'react-router-redux'
import { isDev } from 'meta/utils'

const configureStore = (history) => createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk, routerMiddleware(history)),
    window.devToolsExtension && isDev() ? window.devToolsExtension() : f => f
  )
)

export default configureStore
