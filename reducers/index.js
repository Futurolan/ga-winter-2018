import { combineReducers } from 'redux-immutable'
import { loadingBarReducer } from 'react-redux-loading-bar'

import globalReducer from 'reducers/global'
import homeReducer from 'reducers/home'

export default function createReducer () {
  return combineReducers({
    global: globalReducer,
    home: homeReducer,
    loadingBar: loadingBarReducer
  })
}
