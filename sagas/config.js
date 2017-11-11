import { call, put, takeLatest } from 'redux-saga/effects'
import { fromJS } from 'immutable'
import { showLoading, hideLoading } from 'react-redux-loading-bar'

import request from 'utils/request'

import {getConfigSuccess, getConfigError} from 'actions/config'

export function * _getConfig () {
  const backendApiUrl = process.env.BACKEND_API_URL
  const editionId = process.env.EDITION_ID

  try {
    const requestURL = `${backendApiUrl}/api/v1/config/${editionId}`

    const config = yield call(request, requestURL, {credentials: 'include'})
    yield put(showLoading())
    yield put(getConfigSuccess(fromJS(config[0])))
  } catch (err) {
    yield put(getConfigError(err))
  } finally {
    yield put(hideLoading())
  }
}

export default function * getConfig () {
  yield takeLatest('GET_CONFIG_FETCH', _getConfig)
}
