import 'babel-polyfill'
import React from './lib/react'
import { render } from './lib/react-dom'
import { Provider } from './lib/react-redux'
import App from './containers/App'
import configureStore from './store/configureStore'

const store = configureStore({})

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
