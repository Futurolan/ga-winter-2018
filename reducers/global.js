import { fromJS } from 'immutable'

const initialState = fromJS({loading: []})

function globalReducer (state = initialState, action) {
  if (action.type.includes('FETCH')) {
    return state
      .updateIn(['loading'], data => data.push(action.type).toSet().toList())
  } if (action.type.includes('ERROR')) {
    return state
      .deleteIn(['loading'], data => data.remove(action.type.replace('ERROR', 'FETCH')))
  }
  if (action.type.includes('SUCCESS')) {
    return state
      .deleteIn(['loading'], data => data.remove(action.type.replace('SUCCESS', 'FETCH')))
  } else {
    return state
  }
}

export default globalReducer
