import {combineReducers} from "redux";
import {thanhpho} from './thanhpho/index'

export const thoitiet = combineReducers({
    city: thanhpho,
});