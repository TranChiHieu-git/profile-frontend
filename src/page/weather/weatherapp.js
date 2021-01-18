import React, {Component} from 'react';
import "../../css/weathercomponent.css";
import {AutoComplete} from 'antd';
import {connect} from "react-redux";
import * as actWeather from "../../constant/api/weather";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";

class Weatherapp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openNoti: false
        }
        this.valueSearchCityRef = React.createRef();
    }

    componentDidMount() {
        const {getAllCity} = this.props;
        getAllCity();
    }

    onSelect = (e, value) => {
        const {getWeatherCity} = this.props;
        getWeatherCity(value.code);
    };
    handleKeyDown = (event) => {
        const {ds_thanhpho, getWeatherCity} = this.props;
        if (event.key === 'Enter') {
            let getValue = document.getElementById("search-city-id");
            if (getValue !== null && getValue !== undefined &&
                getValue.value !== null && getValue.value !== undefined) {
                let status = false;
                ds_thanhpho.map(item => {
                    if (item.name.toLowerCase().trim().search(getValue.value.toLowerCase().trim()) !== -1) {
                        getWeatherCity(item.code);
                        status = true;
                    }
                });
                if (!status) {
                    this.setState({openNoti: true});
                }
            }
        }
    }


    handleClose = () => {
        this.setState({openNoti: false});
    };

    render() {
        const {ds_thanhpho} = this.props;
        const {openNoti} = this.state;
        return (
            <div className="weather-root">
                <Dialog
                    open={openNoti}
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{"Tìm kiếm thất bại"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Không thể tìm kiếm được tên thành phố. Vui lòng thử lại với tên đầy đủ!
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Đóng
                        </Button>
                    </DialogActions>
                </Dialog>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3 col-lg-3 col-xl-3"/>
                        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            <h1 className="app-name">THỜI TIẾT</h1>
                        </div>
                        <div className="col-md-3 col-lg-3 col-xl-3"/>
                    </div>
                    <div className="row">
                        <div className="col-md-3 col-lg-3 col-xl-3"/>
                        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            <i className="fa fa-search input-search-icon"/>
                            <AutoComplete
                                id="search-city-id"
                                className="input-search"
                                options={ds_thanhpho}
                                placeholder="Nhập tên thành phố"
                                filterOption={(inputValue, option) =>
                                    option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                                }
                                ref={this.valueSearchCityRef}
                                onSelect={(e, value) => this.onSelect(e, value)}
                                onKeyDown={this.handleKeyDown}
                            />
                        </div>
                        <div className="col-md-3 col-lg-3 col-xl-3"/>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ds_thanhpho: state.weather_app.city.list_city
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getAllCity: () => {
            dispatch(actWeather.getAllCity());
        },
        getWeatherCity: (code) => {
            dispatch(actWeather.getWeatherCity(code));
        }
    }
}
export default Weatherapp = connect(mapStateToProps, mapDispatchToProps)(Weatherapp);