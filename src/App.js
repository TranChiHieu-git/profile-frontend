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
import Home from "./component/homepage/home";
function App() {
    return (
        <div>
            <div className="header">
                <Home/>
            </div>

        </div>
    );
}

export default App;
