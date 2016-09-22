import React from 'react'
import { Provider } from 'react-redux'
import store from 'meta/store'
import { BrowserRouter, Match } from 'react-router'

import Test from 'test'

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Match exactly pattern='/' component={Test} />
    </BrowserRouter>
  </Provider>
)

export default App
