import { combineReducers } from 'redux'
import { quote } from './quote'
import { loading } from './loading'

const rootReducer = combineReducers({
  quote,
  isLoading: loading
})

export default rootReducer