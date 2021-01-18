import * as url from "../url/url";
import * as typeAct from "../../constant/type/type";

export const getAllCity = () => {
    return (dispatch) => {
        return fetch(url.get_city, {method: "GET"}).then(response => response.json()).then((res) => {
            if (res) {
                res.map(item => {
                    item.value = item.name;
                    item.label = item.name;
                });
                dispatch(AllCity(res));
            }
        });
    }
}
export const AllCity = (values) => {
    return {
        type: typeAct.THANHPHO_DANHSACH,
        values
    }
}
export const getWeatherCity = (code) => {
    return (dispatch) => {
        return fetch(url.get_weather_info + "?citycode=" + code, {method: "GET"}).then(response => response.json()).then((res) => {
            if (res) {
                dispatch(WeatherCity(res));
            }
        });
    }
}
export const WeatherCity = (values) => {
    return {
        type: typeAct.THOITIET_DANHSACH,
        values
    }
}