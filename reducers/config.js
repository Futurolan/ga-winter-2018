import { fromJS } from 'immutable'

const initialState = fromJS({
  loading: false,
  error: false,
  data: false
})

function configReducer (state = initialState, action) {
  switch (action.type) {
    case 'GET_CONFIG_FETCH':
      return state
        .set('loading', true)
        .set('error', false)
        .set('data', false)
    case 'GET_CONFIG_SUCCESS':
      return state
        .set('loading', false)
        .set('data', action.data)
    case 'GET_CONFIG_ERROR':
      return state
        .set('error', action.error)
        .set('loading', false)
    default:
      return state
  }
}

export default configReducer
