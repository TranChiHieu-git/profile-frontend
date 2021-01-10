import React, {Component} from 'react';
import "../../../css/homecompoent.css"
import js_logo from "../../../data/picture/js-logo.png";
import html_logo from "../../../data/picture/html-logo.png";
import css_logo from "../../../data/picture/css-logo.png";
import java_logo from "../../../data/picture/java-logo.png";
import spring_logo from "../../../data/picture/spring-logo.png";
import react_logo from "../../../data/picture/react-logo.png";
import angular_logo from "../../../data/picture/angular-logo.png";
import mysql_logo from "../../../data/picture/mysql-logo.png";
import postgresql_logo from "../../../data/picture/postgresql-logo.png";
import {Divider} from "antd";

class RightHomecomponent extends Component {
    render() {
        return (
            <div className="home-root">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 xuonghang">
                            <label className="title-css">Giới thiệu</label>
                        </div>
                        <div className="col-md-12 xuonghang">
                            &emsp;&emsp;Started earnest brother believe an exposed so. Me he believing daughters if
                            forfeited at furniture. Age again and stuff downs spoke. Late hour new nay able fat each
                            sell.
                            Nor themselves
                            age introduced frequently use unsatiable devonshire get. They why quit gay cold rose deal
                            park.
                            One same they four did ask busy. Reserved opinions fat him nay position. Breakfast as
                            zealously
                            incommode do agreeable furniture. One too nay led fanny allow plate.
                        </div>
                        <div className="col-md-12 xuonghang">
                            &emsp;&emsp;Quick six blind smart out burst. Perfectly on furniture dejection determine my
                            depending an to. Add short water court fat. Her bachelor honoured perceive securing but
                            desirous
                            ham required. Questions deficient acuteness to engrossed as. Entirely led ten humoured
                            greatest
                            and yourself. Besides ye country on observe. She continue appetite endeavor she judgment
                            interest the met. For she surrounded motionless fat resolution may.
                        </div>
                    </div>
                    <div className="row xuonghang">
                        <div className="col-md-12 xuonghang">
                            <label className="title-css">Kỹ Năng</label>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 xuonghang">
                            <Divider className="divider-text">Ngôn ngữ lập trình/web</Divider>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3">
                            <div className="skill-item-css">
                                <img className="skill-item-img" src={java_logo}/>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3">
                            <div className="skill-item-css">
                                <img className="skill-item-img" src={js_logo}/>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3">
                            <div className="skill-item-css">
                                <img className="skill-item-img" src={html_logo}/>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3">
                            <div className="skill-item-css">
                                <img className="skill-item-img" src={css_logo}/>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 xuonghang">
                            <Divider className="divider-text">FrameWork</Divider>
                        </div>
                        <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                            <div className="skill-item-css">
                                <img className="skill-item-img" src={spring_logo}/>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                            <div className="skill-item-css">
                                <img className="skill-item-img" src={react_logo}/>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                            <div className="skill-item-css">
                                <img className="skill-item-img" src={angular_logo}/>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 xuonghang">
                            <Divider className="divider-text">Database</Divider>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            <div className="skill-item-css">
                                <img className="skill-item-img" src={mysql_logo}/>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            <div className="skill-item-css">
                                <img className="skill-item-img" src={postgresql_logo}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default RightHomecomponent;