import { combineReducers } from "redux";

import userReducer from "./reducers/user/userReducer";
import CartReducer from './reducers/cart/cart'


export default combineReducers({
    user: userReducer,
    cart: CartReducer
})