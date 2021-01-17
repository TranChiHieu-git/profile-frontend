import React, {Component} from 'react';
import "../../css/weathercomponent.css";
import {AutoComplete} from 'antd';

class Weatherapp extends Component {
    onSearch = () => {
        alert("abc");
    }

    render() {
        return (
            <div className="weather-root">
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
                                className="input-search"
                                // options={options}
                                // onSelect={onSelect}
                                placeholder="Nhập tên thành phố"
                            />
                        </div>
                        <div className="col-md-3 col-lg-3 col-xl-3"/>
                    </div>

                </div>

            </div>
        );
    }
}

export default Weatherapp;