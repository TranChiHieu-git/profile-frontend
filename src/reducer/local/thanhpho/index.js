import {combineReducers} from "redux";
import {danhsach_thanhpho} from './danhsachthanhpho'

export const thanhpho = combineReducers({
    list_city: danhsach_thanhpho,
});