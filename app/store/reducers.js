import { combineReducers } from "redux";
import {
    accountReducer as account,

} from "./main";

export const reducers = combineReducers({
    account,
})