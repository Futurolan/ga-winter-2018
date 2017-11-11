import { combineReducers } from 'redux-immutable'
import { loadingBarReducer } from 'react-redux-loading-bar'

import globalReducer from 'reducers/global'
import configReducer from 'reducers/config'

export default function createReducer () {
  return combineReducers({
    global: globalReducer,
    config: configReducer,
    loadingBar: loadingBarReducer
  })
}
