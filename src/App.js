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
import Resume from "./page/core/index";
import Weatherapp from "./page/weather/weatherapp";

function App() {
    return (
        <Switch>
            <Route path='/resume' component={Resume}/>
            <Route exact path='/weather-app' component={Weatherapp}/>
            <Redirect from="*" to="/resume/home"/>
        </Switch>

    );
}

export default App;
