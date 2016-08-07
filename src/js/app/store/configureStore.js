import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { routerReducer } from 'react-router-redux'
import rootReducer from './reducers'

const configureStore = (initialState) => createStore(
  { ...rootReducer, routing: routerReducer },
  applyMiddleware(thunk)
)

export default configureStore
