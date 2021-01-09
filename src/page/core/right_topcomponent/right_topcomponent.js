import React, {Component} from 'react';
import "../../../css/righttopcomponent.css"
import {Link} from "react-router-dom";

class RightTopcomponent extends Component {
    render() {
        return (
            <div className="right-container">
                <div className="topnav" id="myTopnav">
                    <Link to="/" className="topnav-home">
                        <i className="fa fa-home"/>
                    </Link>
                    <Link to="/" id="nav-id-1" className="topnav-item">News</Link>
                    <Link to="/" id="nav-id-2" className="topnav-item">Contact</Link>
                    <Link to="/" id="nav-id-3" className="topnav-item">About</Link>
                    <button className="icon btn btn-outline-info" onClick={() => {
                        document.getElementById("nav-id-1").classList.add("responsive-custom");
                        document.getElementById("nav-id-2").classList.add("responsive-custom");
                        document.getElementById("nav-id-3").classList.add("responsive-custom");

                    }}>
                        <i className="fa fa-bars"/>
                    </button>
                </div>
            </div>
        );
    }
}

export default RightTopcomponent;