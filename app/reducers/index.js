import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import {reducer as formReducer} from 'redux-form'
import counter from './counter'
import config from './config'

const rootReducer = combineReducers({
  counter,
  config,
  routing,
  form: formReducer
})

export default rootReducer
