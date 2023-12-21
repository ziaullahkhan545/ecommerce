
import {takeLatest, put, call, all} from 'redux-saga/effects'
import userActionTypes from "../user/user-action-types"
import { clearCart } from './cart-actions'

export function* clearCartOnSignOut() {
    yield put(clearCart())
}

export function* onSignOutSuccess() {
    yield takeLatest(userActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut)
}

export function* cartSaga(){
    yield all([
        call(onSignOutSuccess)
    ])
}
