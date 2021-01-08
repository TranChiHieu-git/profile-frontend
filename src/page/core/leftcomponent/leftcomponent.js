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
            <div className="container">
                <div className="col-md-12">
                    <div className="name-title">Trần Chí Hiếu</div>
                </div>
                <div className="col-md-12">
                    <div id="text-type-effect" className="type-effect-css"/>
                </div>
                <div className="avt-top"/>
                <div className="avt-bottom"/>
                <div className="row">
                    <img className="avt-left-component" src={avt}/>
                </div>
                <div className="col-md-12 mt-4">
                    <Timeline className="time-line-left-component">
                        <Timeline.Item className="text-left-component" color={localStorage.getItem("color")}>
                            <label className="label">Birth day:</label> <label className="text"> 28-08-1997</label>
                        </Timeline.Item>
                        <Timeline.Item className="text-left-component" color={localStorage.getItem("color")}>
                            <label className="label">Address:</label> <label className="text"> Da Nang City</label>
                        </Timeline.Item>
                        <Timeline.Item className="text-left-component" color={localStorage.getItem("color")}>
                            <label className="label">Email:</label> <label
                            className="text"> hieu57130154@gmail.com</label>
                        </Timeline.Item>
                        <Timeline.Item className="text-left-component"
                                       color={localStorage.getItem("color")}>
                            <label className="label">Skype:</label> <label className="text"> de131cbe06513661</label>
                        </Timeline.Item>
                    </Timeline>
                </div>
            </div>
        );
    }
}

export default Leftcomponent;