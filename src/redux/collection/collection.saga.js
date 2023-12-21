import { all, call, put, takeLatest } from "redux-saga/effects";
import CollectionActionTypes from "./collection.type";

import { collection, getDocs } from "firebase/firestore";
import {
  convertCollectionToMap,
  db,
} from "../../components/firebase/firebase-utils";
import {
  fetchCollectionsFailure,
  fetchCollectionsSuccess,
} from "./collection.action";

export function* fetchCollectionsAsync() {
  yield console.log("i am fired");
  try {
    const querySnapshot = yield getDocs(collection(db, "collections"));
    const shopData = yield call(convertCollectionToMap, querySnapshot);
    yield put(fetchCollectionsSuccess(shopData));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(
    CollectionActionTypes.FETCH_COLLECTION_START,
    fetchCollectionsAsync
  );
}

export function* collectionSaga(){
  yield all([call(fetchCollectionsStart)])
}