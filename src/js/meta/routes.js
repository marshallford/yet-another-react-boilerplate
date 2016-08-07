import React from 'react'
import { Route, IndexRoute } from 'react-router'

import Test from 'test'

export default () => (
  <Route path='/'>
    <IndexRoute component={Test} />
    <Route path='about' component={Test} />
  </Route>
)
