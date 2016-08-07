import 'react-hot-loader/patch'
import React from 'react'
import { render } from 'react-dom'
import { AppContainer as HotLoader } from 'react-hot-loader'
import App from 'app'
import configureStore from 'meta/store/configureStore'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

const store = configureStore(browserHistory)
window.store = store
const history = syncHistoryWithStore(browserHistory, store)

const el = document.getElementById('app')

render(
  <HotLoader>
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
      <HotLoader>
        <App
          store={store}
          history={history}
        />
      </HotLoader>,
      el
    )
  })
}
