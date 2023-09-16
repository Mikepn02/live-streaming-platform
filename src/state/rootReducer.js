import { combineReducers } from "redux";
import authSlice from "./index";

const rootReducer = combineReducers({
    auth: authSlice
});

export default rootReducer