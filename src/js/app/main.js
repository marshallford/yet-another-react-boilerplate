import 'react-hot-loader/patch'
import 'styles/main.scss'
import React from 'react'
import { render } from 'react-dom'
import { AppContainer as HotLoader } from 'react-hot-loader'
import App from 'app'
import ErrorReporter from 'app/errorReporter'
import store from 'meta/store'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

const history = syncHistoryWithStore(browserHistory, store)
const el = document.getElementById('app')

render(
  <HotLoader errorReporter={ErrorReporter}>
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
      <HotLoader errorReporter={ErrorReporter}>
        <App
          store={store}
          history={history}
        />
      </HotLoader>,
      el
    )
  })
}
