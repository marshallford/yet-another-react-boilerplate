import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import { browserHistory } from 'react-router'
import { routerMiddleware } from 'react-router-redux'
import { isDev } from 'meta/utils'

const configureStore = () => createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk, routerMiddleware(browserHistory)),
    window.devToolsExtension && isDev() ? window.devToolsExtension() : f => f
  )
)

export default configureStore
