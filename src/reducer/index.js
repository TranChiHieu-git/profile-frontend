import {combineReducers} from "redux";
import {THOITIET} from './local/index'
import {reducer as formReducer} from 'redux-form'

export const rootReducer = combineReducers({
    form: formReducer,
    weather_app: THOITIET
});