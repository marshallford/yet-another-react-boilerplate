import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Test from 'test'
import { testOnEnter } from './callbacks'

export default () => (
  <Route path='/'>
    <IndexRoute component={Test} onEnter={testOnEnter} />
    <Route path='about' component={Test} />
  </Route>
)
