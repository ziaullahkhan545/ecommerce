import CollectionActionTypes from "./collection.type";

import { collection, getDocs } from "firebase/firestore";
import {
  convertCollectionToMap,
  db,
} from "../../components/firebase/firebase-utils";

export const fetchCollectionsStart = () => ({
  type: CollectionActionTypes.FETCH_COLLECTION_START,
});

export const fetchCollectionsSuccess = (collectionMap) => ({
  type: CollectionActionTypes.FETCH_COLLECTION_SUCCESS,
  payload: collectionMap,
});

export const fetchCollectionsFailure = (errorMessage) => ({
  type: CollectionActionTypes.FETCH_COLLECTION_FAILURE,
  payload: errorMessage,
});

export const fetchCollectionsStartAsync = () => {
  return (dispatch) => {
    dispatch(fetchCollectionsStart());
    getDocs(collection(db, "collections"))
      .then((querySnapshot) => {
        const shopData = convertCollectionToMap(querySnapshot);
        dispatch(fetchCollectionsSuccess(shopData));
      })
      .catch((error) => {
        dispatch(fetchCollectionsFailure(error.message));
      });
  };
};
