import { fromJS } from 'immutable'

const initialState = fromJS({
  loading: false,
  error: false,
  data: false
})

function homeReducer (state = initialState, action) {
  switch (action.type) {
    case 'GET_HOME_FETCH':
      return state
        .set('loading', true)
        .set('error', false)
        .set('data', false)
    case 'GET_HOME_SUCCESS':
      return state
        .set('loading', false)
        .set('data', action.data)
    case 'GET_HOME_ERROR':
      return state
        .set('error', action.error)
        .set('loading', false)
    default:
      return state
  }
}

export default homeReducer
