import { call, put, takeLatest } from 'redux-saga/effects'
import { fromJS } from 'immutable'
import { showLoading, hideLoading } from 'react-redux-loading-bar'

import request from 'utils/request'

import {getHomeSuccess, getHomeError} from 'actions/home'

export function * _getHome (action) {
  const backendApiUrl = process.env.BACKEND_API_URL
  const editionId = process.env.EDITION_ID || action.id
  const schema =
    `{
      nodeById(id: "${editionId}", language: fr) {
        ... on NodeEdition {
          fieldHomePage {
            entity {
              ... on NodeHomePage {
                fieldHeroDisplay
                fieldHeroTitle
                fieldHeroSubtitle
                fieldHeroImage {
                  url
                }
                fieldCountdownDisplay
                fieldCountdownDate
                fieldCountdownText
              }
            }
          }
        }
      }
      nodeQuery(filter: {type: "news"}, limit: 3) {
        entities {
          ... on NodeNews {
            nid
            title
            entityCreated,
            fieldNewsImage{
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
    if (home.errors) {
      throw new Error(home.errors[0].message)
    } else {
      yield put(getHomeSuccess(fromJS(home.data)))
    }
  } catch (error) {
    yield put(getHomeError(error))
  } finally {
    yield put(hideLoading())
  }
}

export default function * getHome () {
  yield takeLatest('GET_HOME_FETCH', _getHome)
}
