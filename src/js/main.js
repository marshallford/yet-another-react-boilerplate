import 'react-hot-loader/patch'
import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader';
import App from 'components/App'

render(
  <AppContainer>
    <App />
  </AppContainer>,
  document.getElementById('app')
)

if (module.hot) {
  module.hot.accept('./components/App', () => {
    const AppComponent = require('./components/App').default;
    render(
      <AppComponent>
        <App />
      </AppComponent>,
      document.getElementById('app')
    );
  });
}
