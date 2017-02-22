import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'mobx-react'
import stores from 'stores'

import Test from 'components/test'

const App = () => (
  <Provider {...stores}>
    <Router>
      <Route exact pattern='/' component={Test} />
    </Router>
  </Provider>
)

export default App
