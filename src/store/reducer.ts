import { combineReducers } from 'redux'
import exampleReducer from './exampleReducer'

const reducer = combineReducers({
  example: exampleReducer
})

export default reducer
