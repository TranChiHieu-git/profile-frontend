import React, {Component} from 'react';
import {type_write} from "../../../constant/JS_effect/public_js_effect";
import {Link} from "react-router-dom";
import avatar from "../../../data/picture/avatar.jpg"
import background from "../../../data/picture/background.jpg"

const arrayMenu = ["/", "home", "aboutme", "resume", "portfolio", "education", "contact"];

class Leftmenu extends Component {
    componentDidMount() {
        type_write("text", ["Web Developer", "Java Springboot", "ReactJS", "Angular"]);
        console.log(window.location);
        if (arrayMenu.find(x => x === window.location.pathname.split("/")[1].toString())) {
            document.getElementById(window.location.pathname.split("/")[1].toString()).classList.add("active");
        }
        if (window.location.pathname === "/") {
            document.getElementById("home").classList.add("active");
        }
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
                    <Link to="/" onClick={() => {
                        document.getElementById("home").classList.add("active");
                        document.getElementById("aboutme").classList.remove("active");
                        document.getElementById("resume").classList.remove("active");
                        document.getElementById("portfolio").classList.remove("active");
                        document.getElementById("education").classList.remove("active");
                        document.getElementById("contact").classList.remove("active");
                    }}>
                        <div className="menu-icon" id="home">
                            <i className="fa fa-home icon-circle"/>&emsp;Home
                        </div>
                    </Link>
                    <Link to="/aboutme" onClick={() => {
                        document.getElementById("aboutme").classList.add("active");
                        document.getElementById("home").classList.remove("active");
                        document.getElementById("resume").classList.remove("active");
                        document.getElementById("portfolio").classList.remove("active");
                        document.getElementById("education").classList.remove("active");
                        document.getElementById("contact").classList.remove("active");
                    }}>
                        <div className="menu-icon" id="aboutme">
                            <i className="fa fa-drivers-license-o icon-circle"/>&emsp;About me
                        </div>
                    </Link>
                    <Link to="/resume" onClick={() => {
                        document.getElementById("resume").classList.add("active");
                        document.getElementById("home").classList.remove("active");
                        document.getElementById("aboutme").classList.remove("active");
                        document.getElementById("portfolio").classList.remove("active");
                        document.getElementById("education").classList.remove("active");
                        document.getElementById("contact").classList.remove("active");
                    }}>
                        <div className="menu-icon" id="resume">
                            <i className="fa fa-building-o icon-circle"/>&emsp;Resume
                        </div>
                    </Link>
                    <Link to="/portfolio" onClick={() => {
                        document.getElementById("portfolio").classList.add("active");
                        document.getElementById("home").classList.remove("active");
                        document.getElementById("aboutme").classList.remove("active");
                        document.getElementById("resume").classList.remove("active");
                        document.getElementById("education").classList.remove("active");
                        document.getElementById("contact").classList.remove("active");
                    }}>
                        <div className="menu-icon" id="portfolio">
                            <i className="fa fa-wifi icon-circle"/>&emsp;Portfolio
                        </div>
                    </Link>
                    <Link to="/education" onClick={() => {
                        document.getElementById("education").classList.add("active");
                        document.getElementById("home").classList.remove("active");
                        document.getElementById("aboutme").classList.remove("active");
                        document.getElementById("resume").classList.remove("active");
                        document.getElementById("portfolio").classList.remove("active");
                        document.getElementById("contact").classList.remove("active");
                    }}>
                        <div className="menu-icon" id="education">
                            <i className="fa fa-university icon-circle"/>&emsp;Education
                        </div>
                    </Link>
                    <Link to="/contact" onClick={() => {
                        document.getElementById("contact").classList.add("active");
                        document.getElementById("home").classList.remove("active");
                        document.getElementById("aboutme").classList.remove("active");
                        document.getElementById("resume").classList.remove("active");
                        document.getElementById("portfolio").classList.remove("active");
                        document.getElementById("education").classList.remove("active");
                    }}>
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