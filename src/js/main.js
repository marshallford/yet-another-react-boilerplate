import 'react-hot-loader/patch'
import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import configureStore from 'app/store'
import App from 'app'
import store from 'app/store'

render(
  <AppContainer>
    <App
      store={store}
    />
  </AppContainer>,
  document.getElementById('app')
)

if (module.hot) {
  module.hot.accept('app', () => {
    const AppNext = require('app').default
    render(
      <AppComponent>
        <AppNext
          store={store}
        />
      </AppComponent>,
      document.getElementById('app')
    )
  })
}
