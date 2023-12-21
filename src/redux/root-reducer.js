
import UserReducer from "./user/user-reducer";
import { combineReducers } from "redux";
import CartReducer from "./cart/cart-reducer";
import DirectoryReducer from "./directory/directory-reducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import CollectionReducer from "./collection/collection-reducer";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const rootReducer = combineReducers({
    user: UserReducer,
    cart: CartReducer,
    directory: DirectoryReducer,
    collection: CollectionReducer,
})

export default persistReducer(persistConfig, rootReducer)