import React from 'react'
import { Provider } from 'react-redux'
import { Router } from 'react-router'
import makeRoutes from 'meta/routes'

const routes = makeRoutes()

const App = ({ store, history }) => (
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>
)

export default App
