import React, {Component} from 'react';
import {type_write} from "../../../constant/JS_effect/public_js_effect";
import {Link} from "react-router-dom";
import avatar from "../../../data/picture/avatar.jpg"
import background from "../../../data/picture/background.jpg"

class Leftmenu extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        type_write("text", ["Web Developer", "Java Springboot", "ReactJS", "Angular"]);
    }

    render() {
        return (
            <div>
                <div className="menu-background">
                    <img className="background" src={background}
                         alt="hình nền đại diện"/>
                </div>
                <div className="menu-avatar">
                    <img className="avatar" src={avatar}
                         alt="hình đại diện"/>
                </div>
                <div className="menu-left-bottombackgroung">
                    <div className="title-menu">
                        TRAN CHI HIEU
                    </div>
                    <div>
                        <div className="title-status">
                            <div id="text" className="text-status"/>
                        </div>
                    </div>
                    <Link to="/">
                        <div className="menu-icon" id="home">
                            <i className="fa fa-home icon-circle"/>&emsp;Home
                        </div>
                    </Link>
                    <Link to="/aboutme">
                        <div className="menu-icon" id="aboutme">
                            <i className="fa fa-drivers-license-o icon-circle"/>&emsp;About me
                        </div>
                    </Link>
                    <Link to="/resume">
                        <div className="menu-icon" id="resume">
                            <i className="fa fa-building-o icon-circle"/>&emsp;Resume
                        </div>
                    </Link>
                    <Link to="/portfolio">
                        <div className="menu-icon" id="portfolio">
                            <i className="fa fa-wifi icon-circle"/>&emsp;Portfolio
                        </div>
                    </Link>
                    <Link to="/education">
                        <div className="menu-icon" id="education">
                            <i className="fa fa-university icon-circle"/>&emsp;Education
                        </div>
                    </Link>
                    <Link to="/contact">
                        <div className="menu-icon" id="contact">
                            <i className="fa fa-wechat icon-circle"/>&emsp;Contact
                        </div>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Leftmenu;