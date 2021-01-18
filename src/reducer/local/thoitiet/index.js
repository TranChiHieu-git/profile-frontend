import {combineReducers} from "redux";
import {thoitiet_info} from './thoitiet'

export const thoitiet = combineReducers({
    thoitiet_info: thoitiet_info,
});