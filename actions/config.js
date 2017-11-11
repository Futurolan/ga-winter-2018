
export function getConfig () {
  return {
    type: 'GET_CONFIG_FETCH'
  }
}

export function getConfigSuccess (data) {
  return {
    type: 'GET_CONFIG_SUCCESS',
    data
  }
}

export function getConfigError (error) {
  return {
    type: 'GET_CONFIG_ERROR',
    error
  }
}
