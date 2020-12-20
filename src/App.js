import './App.css';
import React from "react";
import 'jquery/dist/jquery.min';
import 'jquery/dist/jquery.slim.min';
import 'popper.js/dist/popper.min'
import 'popper.js/dist/popper-utils.min'
import 'bootstrap/dist/js/bootstrap.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import 'bootstrap/dist/css/bootstrap-reboot.css';
import 'font-awesome/css/font-awesome.min.css';
import {Switch, Route} from "react-router-dom";
import Home from "./page/index/home"
import AboutMe from "./page/index/aboutme"
import Resume from "./page/index/resume"
import Portfolio from "./page/index/portfolio"
import Education from "./page/index/education"
import Contact from "./page/index/contact"
import Leftmenu from "./component/core/leftmenu/leftmenu";

function App() {
    return (
        <React.Fragment>
            <div className="scrollbar">
                <div className="left-menu">
                    <Leftmenu/>
                </div>
            </div>
            <div className="right-content">
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/aboutme' component={AboutMe}/>
                    <Route exact path='/resume' component={Resume}/>
                    <Route exact path='/portfolio' component={Portfolio}/>
                    <Route exact path='/education' component={Education}/>
                    <Route exact path='/contact' component={Contact}/>
                </Switch>
            </div>

        </React.Fragment>
    );
}

export default App;
