import React, {Component} from 'react';
import {type_write} from "../../../constant/JS_effect/public_js_effect";
import "../../../css/leftcomponent.css"
import avt from "../../../data/picture/avt.jpg"
import {Timeline} from "antd";

class Leftcomponent extends Component {
    componentDidMount() {
        type_write("text-type-effect", ["Front-end Developer", "ReactJs", "Angular"]);
    }

    render() {
        return (
            <div className="left-container">
                <div className="container avt-css">
                    <div className="col-md-12">
                        <div className="name-title">Trần Chí Hiếu</div>
                    </div>
                    <div className="col-md-12">
                        <span id="text-type-effect" className="type-effect-css"/>
                        <span className="hidden-visible">1</span>
                    </div>
                </div>
                <div className="container-fluid avt-css">
                    <img className="avt-left-component" src={avt}/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-0 col-md-4 col-lg-0 col-xl-0"/>
                        <div className="col-sm-12 col-md-8 col-lg-12 col-xl-12 mt-5">
                            <Timeline className="time-line-left-component">
                                <Timeline.Item className="text-left-component" color={localStorage.getItem("color")}>
                                    <label className="label">Ngày sinh:</label> <label
                                    className="text"> 28-08-1997</label>
                                </Timeline.Item>
                                <Timeline.Item className="text-left-component" color={localStorage.getItem("color")}>
                                    <label className="label">Địa chỉ:</label> <label className="text"> Thành phố Đà
                                    Nẵng</label>
                                </Timeline.Item>
                                <Timeline.Item className="text-left-component" color={localStorage.getItem("color")}>
                                    <label className="label">Email:</label> <label
                                    className="text"> hieu57130154@gmail.com</label>
                                </Timeline.Item>
                                <Timeline.Item className="text-left-component"
                                               color={localStorage.getItem("color")}>
                                    <label className="label">Skype:</label> <label
                                    className="text"> de131cbe06513661</label>
                                </Timeline.Item>
                            </Timeline>
                        </div>
                    </div>

                </div>
            </div>

        );
    }
}

export default Leftcomponent;