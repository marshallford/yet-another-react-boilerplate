import 'react-hot-loader/patch'
import React from 'react'
import { render } from 'react-dom'
import { AppContainer as HotLoader } from 'react-hot-loader'
import App from 'app'
import makeRoutes from 'meta/routes'
import configureStore from 'meta/store/configureStore'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

const store = configureStore(browserHistory)
window.store = store
const history = syncHistoryWithStore(browserHistory, store)
const routes = makeRoutes(store)

render(
  <HotLoader>
    <App
      store={store}
      history={history}
      routes={routes}
    />
  </HotLoader>,
  document.getElementById('app')
)

if (module.hot) {
  module.hot.accept('app', () => {
    const AppNext = require('app').default
    render(
      <HotLoader>
        <AppNext
          store={store}
          history={history}
          routes={routes}
        />
      </HotLoader>,
      document.getElementById('app')
    )
  })
}
