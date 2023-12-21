import { takeLatest, put, call, all } from "redux-saga/effects";

import userActionTypes from "./user-action-types";
import { signInFailure, signInSuccess, signOutFailure, signOutSuccess, signUpFailure, signUpSuccess } from "./user-actions";

import {
  auth,
  googleProvider,
  createUserProfileDoc,
  checkCurrentUser,
} from "../../components/firebase/firebase-utils";

import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

import { getDoc } from "firebase/firestore";

export function* getSnapShotFromUserAuth(user, additionalData) {
  try {
    const userRef = yield call(createUserProfileDoc, user, additionalData);
    const userSnapShot = yield getDoc(userRef);
    yield put(signInSuccess({ id: userSnapShot.id, ...userSnapShot.data() }));
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* signInWithGoogle() {
  try {
    const { user } = yield signInWithPopup(auth, googleProvider);
    yield call(getSnapShotFromUserAuth, user)
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield signInWithEmailAndPassword(auth, email, password);
    yield call(getSnapShotFromUserAuth, user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield checkCurrentUser();
    if (!userAuth) return;
    yield getSnapShotFromUserAuth(userAuth);
  } catch (error) {
    yield put(signInFailure(error))
  }
}

export function* signOutUser(){
  try {
    yield signOut(auth);
    yield put(signOutSuccess())
  } catch (error) {
    put(signOutFailure(error))
  }
}

export function* signUpUser({payload: {email, password, displayName}}){
  try {
    const {user} = yield createUserWithEmailAndPassword(auth, email, password); 
    yield put(signUpSuccess({user, additionalData: {displayName}}))
  } catch (error) {
    yield put(signUpFailure(error))
  }
}

export function* signInAfterSignUp({payload: { user, additionalData}}){
  yield getSnapShotFromUserAuth(user, additionalData);
}

export function* onSignupSuccess(){
  yield takeLatest(userActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp)
}

export function* onSignupStart() {
  yield takeLatest(userActionTypes.SIGN_UP_START, signUpUser)
}

export function* onUserSignOut(){
  yield takeLatest(userActionTypes.SIGN_OUT_START, signOutUser)
}

export function* onCheckUserSession() {
  yield takeLatest(userActionTypes.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* onGoogleSignInStart() {
  yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onEmailSignInStart() {
  yield takeLatest(userActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* userSaga() {
  yield all([
    call(onGoogleSignInStart), 
    call(onEmailSignInStart),
    call(onCheckUserSession),
    call(onUserSignOut),
    call(onSignupStart),
    call(onSignupSuccess)
  ]);
}
