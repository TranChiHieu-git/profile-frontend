import React, {Component} from 'react';
import ToggleDarkMode from "../light-dark/ToggleDarkMode";

class Setting extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-9">
                        Chế độ nền tối
                    </div>
                    <div className="col-md-3">
                        <ToggleDarkMode/>
                    </div>
                </div>
                <div>
                    <br/>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        Chọn màu chủ đạo
                    </div>
                    <div className="col-md-12 flex-box">
                        <div className="red" onClick={() => {
                            localStorage.setItem("color", "red");
                            document.getElementsByTagName("HTML")[0].setAttribute("data-color", "red");
                        }}
                        />
                        <div className="yellow" onClick={() => {
                            localStorage.setItem("color", "yellow");
                            document.getElementsByTagName("HTML")[0].setAttribute("data-color", "yellow");
                        }}
                        />
                        <div className="green" onClick={() => {
                            localStorage.setItem("color", "green");
                            document.getElementsByTagName("HTML")[0].setAttribute("data-color", "green");
                        }}
                        />
                        <div className="blue" onClick={() => {
                            localStorage.setItem("color", "blue");
                            document.getElementsByTagName("HTML")[0].setAttribute("data-color", "blue");
                        }}
                        />
                        <div className="purple" onClick={() => {
                            localStorage.setItem("color", "purple");
                            document.getElementsByTagName("HTML")[0].setAttribute("data-color", "purple");
                        }}
                        />
                    </div>
                    <div className="col-md-12 flex-box">
                        <div className="gray" onClick={() => {
                            localStorage.setItem("color", "gray");
                            document.getElementsByTagName("HTML")[0].setAttribute("data-color", "gray");
                        }}
                        />
                        <div className="pink" onClick={() => {
                            localStorage.setItem("color", "pink");
                            document.getElementsByTagName("HTML")[0].setAttribute("data-color", "pink");
                        }}
                        />
                        <div className="orange" onClick={() => {
                            localStorage.setItem("color", "orange");
                            document.getElementsByTagName("HTML")[0].setAttribute("data-color", "orange");
                        }}
                        />
                        <div className="aqua" onClick={() => {
                            localStorage.setItem("color", "aqua");
                            document.getElementsByTagName("HTML")[0].setAttribute("data-color", "aqua");
                        }}
                        />
                        <div className="lightsalmon" onClick={() => {
                            localStorage.setItem("color", "lightsalmon");
                            document.getElementsByTagName("HTML")[0].setAttribute("data-color", "lightsalmon");
                        }}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Setting;