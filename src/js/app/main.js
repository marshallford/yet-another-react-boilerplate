import 'react-hot-loader/patch'
import 'styles/main.scss'
import 'static/favicon.ico'
import React from 'react'
import { render } from 'react-dom'
import { AppContainer as HotLoader } from 'react-hot-loader'
import App from 'app'

const el = document.getElementById('app')

render(
  <HotLoader>
    <App />
  </HotLoader>,
  el
)

if (module.hot) {
  module.hot.accept('app', () => {
    render(
      <HotLoader>
        <App />
      </HotLoader>,
      el
    )
  })
}
