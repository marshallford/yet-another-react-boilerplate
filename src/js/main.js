import 'react-hot-loader/patch'
import 'styles/main.scss'
import React from 'react'
import { render } from 'react-dom'
import { AppContainer as HotLoader } from 'react-hot-loader'
import App from 'app'
import store from 'meta/store'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

const history = syncHistoryWithStore(browserHistory, store)
const el = document.getElementById('app')

// temporary fix: https://github.com/gaearon/react-hot-loader/pull/314
const errorReporter = ({ error }) => { throw error }

render(
  <HotLoader errorReporter={errorReporter}>
    <App
      store={store}
      history={history}
    />
  </HotLoader>,
  el
)

if (module.hot) {
  module.hot.accept('app', () => {
    render(
      <HotLoader errorReporter={errorReporter}>
        <App
          store={store}
          history={history}
        />
      </HotLoader>,
      el
    )
  })
}
