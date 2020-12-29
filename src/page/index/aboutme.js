import React, {Component} from 'react';
import {changSelectMenu} from "../../constant/JS_effect/public_js_effect";
import aboutMe from "../../data/picture/img-aboutme.jpg"

class Aboutme extends Component {
    componentDidMount() {
        changSelectMenu("aboutme");
    }

    render() {
        return (
            <div className="about-me">
                <div className="area">
                    <ul className="circles">
                        <li/>
                        <li/>
                        <li/>
                        <li/>
                        <li/>
                        <li/>
                        <li/>
                        <li/>
                        <li/>
                        <li/>
                    </ul>
                </div>
                <div className="border-aboutme">
                    <div className="row">
                        <div className="col-md-7">
                            <div className="row">
                                <div className="col-md-12 m-4">
                                    <div className="col-md-12">
                                        <span className="aboutme-ho">TRAN CHI HIEU</span>
                                    </div>
                                    <div className="col-md-12">
                                        <span
                                            className="aboutme-info">DA NANG - 038.389.6105 - HIEU57130154@GMAIL.COM</span>
                                    </div>
                                    <div className="col-md-12 mt-5 font">
                                        I am experienced in leveraging agile frameworks to provide a robust synopsis for
                                        high level overviews. Iterative approaches to corporate strategy foster
                                        collaborative thinking to further the overall value proposition.
                                    </div>
                                    <div className="col-md-12 mt-5">
                                        <div className="flex-box">
                                            <a href="skype:de131cbe06513661?add">
                                                <div className="icon-contact">
                                                    <i className="fa fa-skype centre"/>
                                                </div>
                                            </a>
                                            <a href="https://www.facebook.com/tranchi.hieu.581/" target="_blank">
                                                <div className="icon-contact">
                                                    <i className="fa fa-facebook centre-f"/>
                                                </div>
                                            </a>
                                            <a href="https://github.com/TranChiHieu-git" target="_blank">
                                                <div className="icon-contact">
                                                    <i className="fa fa-github centre"/>
                                                </div>
                                            </a>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="col-md-12">
                                <img src={aboutMe} className="img-aboutme"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Aboutme;