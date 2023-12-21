
import { all, call } from "redux-saga/effects";

import { collectionSaga } from "./collection/collection.saga";
import { userSaga } from "./user/user.sagas";
import { cartSaga } from "./cart/cart.sagas";

function* rootSaga() {
  yield all([
    call(collectionSaga), 
    call(userSaga),
    call(cartSaga)
  ]);
}

export default rootSaga;