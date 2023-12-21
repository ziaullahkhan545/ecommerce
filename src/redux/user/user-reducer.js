
import userActionTypes from "./user-action-types";

const INTIAL_STATE = {
  currentUser: null,
  error: null,
};

const UserReducer = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case userActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null,
      };
    case userActionTypes.SIGN_IN_FAILURE:
    case userActionTypes.SIGN_OUT_FAILURE:
    case userActionTypes.SIGN_UP_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case userActionTypes.SIGN_OUT_SUCCESS: 
      return {
        ...state,
        currentUser: null,
        error: null
      }
    default:
      return state;
  }
};

export default UserReducer;
