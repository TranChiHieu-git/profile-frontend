import '../../css/resumecomponent.css';
import React, {useEffect, useState} from "react";
import {Route, Redirect} from "react-router-dom";
import {Drawer} from 'antd';
import Setting from "../../page/core/setting/setting";
import Leftcomponent from "../../page/core/leftcomponent/leftcomponent";
import RightTopcomponent from "../../page/core/right_topcomponent/right_topcomponent";
import Home from "../../page/core/rightcomponent/right-homecomponent";
import Experience from "../../page/core/experience/experience";
import Project from "../../page/core/project/project";
import Contact from "../../page/core/contact/contact";

function Resume() {
    const [visible, setVisible] = useState(false);
    const defaultColor = "green";
    useEffect(() => {
        if (localStorage.getItem("color") === null) {
            localStorage.setItem("color", defaultColor);
            document.getElementsByTagName("HTML")[0].setAttribute("data-color", defaultColor);
        } else {
            document.getElementsByTagName("HTML")[0].setAttribute("data-color", localStorage.getItem("color"));
        }
        if (localStorage.getItem("theme") === null) {
            localStorage.setItem("theme", "light");
            document.getElementsByTagName("HTML")[0].setAttribute("data-theme", "light");
        } else {
            document.getElementsByTagName("HTML")[0].setAttribute("data-theme", localStorage.getItem("theme"));
        }
    });
    return (
        <div className="app-css">
            <Drawer
                title="Cài đặt giao diện"
                placement="right"
                closable={false}
                onClose={() => {
                    setVisible(false);
                }}
                visible={visible}
            >
                <Setting/>
            </Drawer>
            <div className="button-config" onClick={() => setVisible(true)}>
                <i className="animation-config fa fa-cog"/>
            </div>
            <div className="container-fluid css-amimation-fade">
                <div className="row">
                    <div className="col-sm-0 col-md-0 col-lg-nho-1 col-lg-nho-1"/>
                    <div className="col-sm-12 col-md-12 col-lg-4 col-xl-3">
                        <Leftcomponent/>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-7 col-xl-8">
                        <RightTopcomponent/>
                        <div className="right-content">
                            <Route exact path='/resume/home' component={Home}/>
                            <Route exact path='/resume/experience' component={Experience}/>
                            <Route exact path='/resume/project' component={Project}/>
                            <Route exact path='/resume/contact' component={Contact}/>
                            <Redirect from="*" to="/resume/home"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Resume;
