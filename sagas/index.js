import { fork } from 'redux-saga/effects'

import getConfig from 'sagas/config'

export default function * root () {
  yield fork(getConfig)
}
