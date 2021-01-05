import React, {Component} from 'react';
import {changSelectMenu} from "../../constant/JS_effect/public_js_effect";
import logo_unitech from "../../data/picture/logo_unitech.png";
import logo_codegym from "../../data/picture/logo_codegym.jpg";

class Experience extends Component {
    componentDidMount() {
        changSelectMenu("experience");
    }

    render() {
        return (
            <div className="fade-effect-css">
                <section id="timeline">
                    <div className="tl-item">
                        <div className="tl-bg-codegym"/>
                        <div className="tl-year">
                            <img src={logo_codegym} width="200px" height="auto"/>
                        </div>
                        <div className="tl-content">
                            <h1>2/2020 - 9/2020</h1>
                            <table className="table color-white">
                                <thead>
                                <tr>
                                    <td width="20%" align={"left"}>
                                        Tên dự án
                                    </td>
                                    <td width="50%" align={"left"}>
                                        Mô tả
                                    </td>
                                    <td width="30%" align={"left"}>
                                        Công nghệ sử dụng
                                    </td>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td align={"left"}>
                                        Quản lý cửa hàng kẹo
                                    </td>
                                    <td align={"left"}>
                                        Quản lý các nghiệp vụ về thương mại và quản lý như bán hàng onl, quản lý xuất
                                        nhập kho, báo cáo tổng hợp...
                                    </td>
                                    <td align={"left"}>
                                        Java spring boot, Angular 10, MySQL 8.0.
                                    </td>
                                </tr>
                                <tr>
                                    <td align={"left"}>
                                        Quản lý Furama Resort
                                    </td>
                                    <td align={"left"}>
                                        Quản lý về nghiệp vụ resort: đặt phòng khách sạn, quản lý các dịch vụ của
                                        resort, quản lý về người dùng, quản lý xử lý ý kiến khách hàng,..
                                    </td>
                                    <td align={"left"}>
                                        Java spring boot, Angular 10, MySQL 8.0.
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="tl-item">
                        <div className="tl-bg-unitech"/>
                        <div className="tl-year">
                            <img src={logo_unitech} width="200px" height="auto"/>
                        </div>
                        <div className="tl-content">
                            <h1>9/2020 - Hiện tại</h1>
                            <table className="table color-white">
                                <thead>
                                <tr>
                                    <td width="20%" align={"left"}>
                                        Tên dự án
                                    </td>
                                    <td width="50%" align={"left"}>
                                        Mô tả
                                    </td>
                                    <td width="30%" align={"left"}>
                                        Công nghệ sử dụng
                                    </td>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td align={"left"}>
                                        Cơ sở dữ liệu quận huyện
                                    </td>
                                    <td align={"left"}>
                                        Hỗ trợ xử lý các nghiệp vụ nhà nước và quản lý cơ sở dữ liệu
                                    </td>
                                    <td align={"left"}>
                                        Java spring boot, ReactJs, PostgreSql
                                    </td>
                                </tr>
                                <tr>
                                    <td align={"left"}>
                                        Cơ sở dữ liệu an ninh trật tự
                                    </td>
                                    <td align={"left"}>
                                        Hỗ trợ xử lý các nghiệp vụ nhà nước và quản lý cơ sở dữ liệu
                                    </td>
                                    <td align={"left"}>
                                        Java spring boot, ReactJs, PostgreSql
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </div>

        );
    }
}

export default Experience;