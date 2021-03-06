import { takeLatest, call, put, all } from 'redux-saga/effects'
import { toast } from 'react-toastify'

import { signInSuccess, signFailure } from './actions'

import history from '../../../services/history'
import api from '../../../services/api'

export function* signIn({ payload }) {
  try {
    const { email, password } = payload

    const response = yield call(api.post, 'sessions', {
      email,
      password,
    })

    const { token } = response.data

    yield put(signInSuccess(token))

    history.push('/home')
  } catch (err) {
    toast.error('Ops, seu email ou senha estão incorretos, tente novamente.')
    yield put(signFailure())
  }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)])
