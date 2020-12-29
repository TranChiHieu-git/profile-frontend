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
import {Switch, Route, Redirect} from "react-router-dom";
import AboutMe from "./page/index/aboutme"
import Experience from "./page/index/experience"
import PageNotFound from "./page/index/pagenotfind"
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
                    <Route exact path='/aboutme' component={AboutMe}/>
                    {/*<Route exact path='/experience' component={Experience}/>*/}
                    <Route path='/pagenotfound' component={PageNotFound}/>
                    <Redirect exact from='/' to='/aboutme'/>
                    <Redirect from='*' to='/pagenotfound'/>
                </Switch>
            </div>
        </React.Fragment>
    );
}

export default App;
