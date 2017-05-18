import React from 'react'
import { render } from 'react-dom'
import { compose, createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import reducer from './reducers'
import persistState from 'redux-localstorage'

const enhancer = compose(
  /* [middlewares] */
  persistState(/*paths, config*/),
)

const store = createStore(reducer,enhancer)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
