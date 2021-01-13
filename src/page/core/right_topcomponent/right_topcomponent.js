import React, {Component} from 'react';
import "../../../css/righttopcomponent.css"
import {Link} from "react-router-dom";

class RightTopcomponent extends Component {
    render() {
        return (
            <div className="right-container">
                <div className="topnav" id="myTopnav">
                    <Link to="/" id="nav-id-0" className="topnav-home">
                        <i className="fa fa-home"/>
                    </Link>
                    <a id="icon-navbar" className="icon btn" onClick={() => {
                        if (document.getElementById("nav-id-1").classList.value.indexOf("responsive-custom") !== -1 &&
                            document.getElementById("nav-id-2").classList.value.indexOf("responsive-custom") !== -1 &&
                            document.getElementById("nav-id-3").classList.value.indexOf("responsive-custom") !== -1) {
                            document.getElementById("nav-id-0").classList.remove("responsive-custom");
                            document.getElementById("nav-id-1").classList.remove("responsive-custom");
                            document.getElementById("nav-id-2").classList.remove("responsive-custom");
                            document.getElementById("nav-id-3").classList.remove("responsive-custom");
                            document.getElementById("icon-navbar").classList.remove("responsive-custom");
                            document.getElementById("myTopnav").classList.remove("responsive-custom");
                        } else {
                            document.getElementById("nav-id-0").classList.add("responsive-custom");
                            document.getElementById("nav-id-1").classList.add("responsive-custom");
                            document.getElementById("nav-id-2").classList.add("responsive-custom");
                            document.getElementById("nav-id-3").classList.add("responsive-custom");
                            document.getElementById("icon-navbar").classList.add("responsive-custom");
                            document.getElementById("myTopnav").classList.add("responsive-custom");
                        }
                    }}>
                        <i className="fa fa-bars"/>
                    </a>
                    <Link to="/experience" id="nav-id-1" className="topnav-item">KINH NGHIỆM</Link>
                    <Link to="/project" id="nav-id-2" className="topnav-item">DỰ ÁN</Link>
                    <Link to="/contact" id="nav-id-3" className="topnav-item">LIÊN HỆ</Link>
                </div>
            </div>
        );
    }
}

export default RightTopcomponent;