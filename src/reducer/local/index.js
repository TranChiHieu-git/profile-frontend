import {combineReducers} from "redux";
import {thanhpho} from './thanhpho/index';
import {thoitiet} from './thoitiet/index';

export const THOITIET = combineReducers({
    city: thanhpho,
    weather: thoitiet,
});