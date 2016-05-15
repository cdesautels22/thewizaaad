import { createStore, applyMiddleware } from '../lib/redux'
import thunkMiddleware from '../lib/redux-thunk'
import rootReducer from '../reducers'

export default function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunkMiddleware)
  )

  return store
}
