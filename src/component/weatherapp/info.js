import React, {Component} from 'react';
import {connect} from "react-redux";
import cloud from "../../data/picture/weather/cloud.png";
import clouds from "../../data/picture/weather/clouds.png";
import rain from "../../data/picture/weather/rain.png";
import sunshine from "../../data/picture/weather/sunshine.png";

const arrayIcon = {cloud: cloud, clouds: clouds, rain: rain, sunshine: sunshine};

class DefaultInfo extends Component {
    render() {
        let {ds_thongtinthoitiet} = this.props;
        let weather_now = ds_thongtinthoitiet.filter(x =>
            parseInt(x.timeWeather.split(" ")[0].split("-")[0]) === new Date().getUTCFullYear() &&
            parseInt(x.timeWeather.split(" ")[0].split("-")[1]) === new Date().getUTCMonth() + 1 &&
            parseInt(x.timeWeather.split(" ")[0].split("-")[2]) === new Date().getUTCDate()
        );
        let temp = 0.0;
        if (weather_now && weather_now.length > 0) {
            weather_now.map(x => {
                temp += x.temp;
            });
            temp = temp / weather_now.length;
        }
        return (
            <div className="info-bg">
                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 pull-right">
                    <label className="name_city_title">{ds_thongtinthoitiet[0]?.local?.name}</label>
                    <br/>
                    <label className="date_title">{new Date().toDateString()}</label>
                </div>
                <div>&nbsp;</div>
                <div className="container-fluid px-0 py-0">
                    <div className="row">
                        <div className="col-sm-6 col-md-2 col-lg-2 col-xl-2">
                            <div className="pull-right">
                                <img src={arrayIcon[weather_now[0]?.weather?.toString()?.toLowerCase()]}
                                     width="106px" height="auto"/>
                            </div>
                        </div>
                        <div className=" col-sm-6 col-md-2 col-lg-2 col-xl-2 info-title pull-left">
                            <div className="info-temp">{Math.round(temp * 100) / 100} &deg;C</div>
                            <div className="info-title">{weather_now[0]?.weatherDescription}</div>
                        </div>
                        <div className="col-sm-12 col-md-2 col-lg-2 col-xl-2"/>
                        <div className="col-sm-6 col-md-2 col-lg-2 col-xl-2">
                            <div className="info-title">Nhiệt độ lớn nhất</div>
                            <div className="info-title">{Math.round(weather_now[0]?.maxTemp * 100) / 100} &deg;C</div>
                            <br/>
                            <div className="info-title">Nhiệt độ nhỏ nhất</div>
                            <div className="info-title">{Math.round(weather_now[0]?.minTemp * 100) / 100} &deg;C</div>
                        </div>
                        <div className="col-sm-6 col-md-2 col-lg-2 col-xl-2">
                            <div className="info-title">Tốc độ gió</div>
                            <div className="info-title">{weather_now[0]?.windSpeed} mph</div>
                            <br/>
                            <div className="info-title">Tầm nhìn xa</div>
                            <div className="info-title">{weather_now[0]?.visibility} m</div>
                        </div>
                        <div className="col-sm-6 col-md-2 col-lg-2 col-xl-2">
                            <div className="info-title">Độ ẩm không khí</div>
                            <div className="info-title">{weather_now[0]?.humidity} %</div>
                            <br/>
                            <div className="info-title">Mây</div>
                            <div className="info-title">{weather_now[0]?.cloud} %</div>
                        </div>
                    </div>
                </div>
                <div>&nbsp;</div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ds_thongtinthoitiet: state.weather_app.weather.thoitiet_info
    }
}
const mapDispatchToProps = (dispatch) => {
    return {}
}
export default DefaultInfo = connect(mapStateToProps, mapDispatchToProps)(DefaultInfo);
