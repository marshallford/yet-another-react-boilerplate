import React from 'react'
import { Provider } from 'react-redux'
import Test from 'test'

const App = ({ store }) => (
  <Provider store={store}>
    <Test />
  </Provider>
)

export default App
