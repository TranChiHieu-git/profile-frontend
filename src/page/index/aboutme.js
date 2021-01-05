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
                                        <span className="aboutme-ho">TRẦN CHÍ HIẾU</span>
                                    </div>
                                    <div className="col-md-12">
                                        <span
                                            className="aboutme-info">ĐÀ NẴNG - 038.389.6105 - HIEU57130154@GMAIL.COM</span>
                                    </div>
                                    <div className="col-md-12 mt-3 font">
                                        Là một lập trình viên website chuyên về phát triển giao diện người dùng. Có kinh
                                        nghiệm làm việc với tất cả các giai đoạn của quá trình phát triển cho các dự án
                                        website. Thông thạo nhiều ngôn ngữ lập trình như JavaScript, TypeScript, Java,..
                                        và các ngôn ngữ lập trình web như HTML, CSS, SQL,... cũng như kinh nghiệm làm
                                        việc với các framework web phổ biến hiện nay như Java Spring, Angular 2+,
                                        ReactJs,...
                                    </div>
                                    <div className="col-md-12 mt-3">
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
                                <img src={aboutMe} className="img-aboutme" alt="hinh anh vi du"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Aboutme;