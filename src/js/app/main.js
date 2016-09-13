import 'react-hot-loader/patch'
import 'styles/main.scss'
import React from 'react'
import { render } from 'react-dom'
import { AppContainer as HotLoader } from 'react-hot-loader'
import App from 'app'
import store from 'meta/store'
import { browserHistory } from 'react-router'

const el = document.getElementById('app')

render(
  <HotLoader>
    <App
      store={store}
      history={browserHistory}
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
          history={browserHistory}
        />
      </HotLoader>,
      el
    )
  })
}
