import { combineReducers } from 'redux-immutable'

import globalReducer from 'reducers/global'

export default function createReducer () {
  return combineReducers({
    global: globalReducer
  })
}
