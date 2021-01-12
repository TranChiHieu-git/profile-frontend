import React, {Component} from 'react';
import "../../../css/experiencecomponent.css";
import ntu_logo from "../../../data/picture/ntu_logo.png";
import codegym_logo from "../../../data/picture/codegym_logo.png";
import unitech_logo from "../../../data/picture/unitech_logo.png";

class Experience extends Component {
    render() {
        return (
            <div className="experience-root">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 xuonghang">
                            <label className="title-css">Kinh nghiệm</label>
                        </div>
                        <div className="col-md-12">
                            <section id="timeline">
                                <div className="tl-item">
                                    <div className="tl-bg-ntu"/>
                                    <div className="tl-year">
                                        <img src={ntu_logo} height="70vh" width="auto" alt="logo"/>
                                    </div>
                                    <div className="tl-content">
                                        <h1>8/2015-10/2019</h1>
                                        <p>
                                            nội dung
                                        </p>
                                    </div>
                                </div>
                                <div className="tl-item">
                                    <div className="tl-bg-codegym"/>
                                    <div className="tl-year">
                                        <img src={codegym_logo} height="22vh" width="auto" alt="logo"/>
                                    </div>
                                    <div className="tl-content">
                                        <h1>2/2020-8/2020</h1>
                                        <p>nội dung</p>
                                    </div>
                                </div>
                                <div className="tl-item">
                                    <div className="tl-bg-unitech"/>
                                    <div className="tl-year">
                                        <img src={unitech_logo} height="22vh" width="auto" alt="logo"/>
                                    </div>
                                    <div className="tl-content">
                                        <h1>9/2020- Hiện tại</h1>
                                        <p>nội dung</p>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Experience;