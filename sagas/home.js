import { call, put, takeLatest } from 'redux-saga/effects'
import { fromJS } from 'immutable'
import { showLoading, hideLoading } from 'react-redux-loading-bar'

import request from 'utils/request'

import {getHomeSuccess, getHomeError} from 'actions/home'

export function * _getHome (action) {
  const backendApiUrl = process.env.BACKEND_API_URL
  const editionId = process.env.EDITION_ID || action.id
  const schema = `{
    nodeById(id: ${editionId}, language:fr) {
      fieldHomePage{
        entity{
          fieldHeroDisplay,
          fieldHeroTitle,
          fieldHeroSubtitle,
          fieldHeroImage{
            url
          }
        }
      }
    }
  }`
  try {
    const home = yield call(request, `${backendApiUrl}/graphql`, {
      credentials: 'include',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({query: schema})
    })
    yield put(showLoading())

    if (home.data.nodeById && home.data.nodeById.fieldHomePage && home.data.nodeById.fieldHomePage.entity) {
      yield put(getHomeSuccess(fromJS(home.data.nodeById.fieldHomePage.entity)))
    } else {
      if (home.errors) {
        throw new Error(home.errors[0].message)
      } else {
        throw new Error('HomePage not found')
      }
    }
  } catch (error) {
    console.log(error)
    yield put(getHomeError(error))
  } finally {
    yield put(hideLoading())
  }
}

export default function * getHome () {
  yield takeLatest('GET_HOME_FETCH', _getHome)
}
