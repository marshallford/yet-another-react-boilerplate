import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route } from 'react-router'
import Test from 'test'

const App = ({ store, history }) => (
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={Test}>
        <Route path='about' component={Test} />
      </Route>
    </Router>
  </Provider>
)

export default App
