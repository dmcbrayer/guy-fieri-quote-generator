import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducers'

const configureStore = (initialState) => {
  return createStore(
    rootReducer,
    initialState, 
    applyMiddleware(thunkMiddleware)
  )
}

export default configureStore