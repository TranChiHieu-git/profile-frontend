import './App.css';
import React, {useEffect, useState} from "react";
import 'jquery/dist/jquery.min';
import 'jquery/dist/jquery.slim.min';
import 'popper.js/dist/popper.min'
import 'popper.js/dist/popper-utils.min'
import 'bootstrap/dist/js/bootstrap.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import 'bootstrap/dist/css/bootstrap-reboot.css';
import 'font-awesome/css/font-awesome.min.css';
import {Switch, Route, Redirect} from "react-router-dom";
import {Drawer} from 'antd';
import Setting from "./page/core/setting/setting";
import Leftcomponent from "./page/core/leftcomponent/leftcomponent";

function App() {
    const [visible, setVisible] = useState(false);
    const defaultColor = "green";
    useEffect(() => {
        document.getElementById("app-root").style.height = (document.getElementById("left-component-id").clientHeight + 300) + "px";
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
        <div id="app-root" className="app-css">
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
            <div id="left-component-id" className="left-component">
                <Leftcomponent/>
            </div>
            <div className="cube"/>
            <div className="cube"/>
            <div className="cube"/>
            <div className="cube"/>
            <div className="cube"/>
            <div className="cube"/>
            {/*<div className="right-content">*/}
            {/*    <Switch>*/}
            {/*        <Route exact path='/aboutme' component={AboutMe}/>*/}
            {/*        <Route exact path='/experience' component={Experience}/>*/}
            {/*        <Route path='/pagenotfound' component={PageNotFound}/>*/}
            {/*        <Redirect exact from='/' to='/aboutme'/>*/}
            {/*        <Redirect from='*' to='/pagenotfound'/>*/}
            {/*    </Switch>*/}
            {/*</div>*/}
        </div>
    );
}

export default App;
