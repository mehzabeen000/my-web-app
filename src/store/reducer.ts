import { combineReducers } from 'redux'
// import exampleReducer from './exampleReducer'
import productReducer from './productReducer'

const reducer = combineReducers({
  // example: exampleReducer,
  product: productReducer
})

export default reducer
