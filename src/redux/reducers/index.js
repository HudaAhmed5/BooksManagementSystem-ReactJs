import { combineReducers } from "redux";
import {bookReducer} from "./bookReducer";
import { loginReducer } from "./loginReducer";
const reducers = combineReducers({
    allData:bookReducer,
    userData: loginReducer
});

export default reducers;