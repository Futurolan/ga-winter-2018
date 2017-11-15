import { fork } from 'redux-saga/effects'

import getHome from './home'

export default function * root () {
  yield fork(getHome)
}
