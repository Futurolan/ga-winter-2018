import { fromJS } from 'immutable'

const initialState = fromJS({})

function globalReducer (state = initialState, action) {
  return state
}

export default globalReducer
