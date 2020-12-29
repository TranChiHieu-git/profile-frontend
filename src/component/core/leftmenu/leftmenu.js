import React, {Component} from 'react';
import {type_write} from "../../../constant/JS_effect/public_js_effect";
import {Link} from "react-router-dom";
import avatar from "../../../data/picture/avatar.jpg"

class Leftmenu extends Component {

    componentDidMount() {
        type_write("text", ["Web Developer", "Java Spring", "ReactJS", "Angular"]);
    }

    render() {
        return (
            <div>
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
                        <div className="menu-icon" id="aboutme">
                            <i className="fa fa-drivers-license-o icon-circle"/>&emsp;About me
                        </div>
                    </Link>
                    {/*<Link to="/experience">*/}
                    {/*    <div className="menu-icon" id="experience">*/}
                    {/*        <i className="fa fa-building-o icon-circle"/>&emsp;Experience*/}
                    {/*    </div>*/}
                    {/*</Link>*/}
                </div>
            </div>
        );
    }
}

export default Leftmenu;