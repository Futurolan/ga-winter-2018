
export function getHome (id) {
  return {
    type: 'GET_HOME_FETCH',
    id
  }
}

export function getHomeSuccess (data) {
  return {
    type: 'GET_HOME_SUCCESS',
    data
  }
}

export function getHomeError (error) {
  return {
    type: 'GET_HOME_ERROR',
    error
  }
}
