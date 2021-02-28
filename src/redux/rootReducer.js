import { combineReducers } from "redux";

import userReducer from "./reducers/user/userReducer";


export default combineReducers({
    user: userReducer
})