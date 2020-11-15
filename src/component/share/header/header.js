import React, {Component} from 'react';

class Header extends Component {
    render() {
        return (
            <div className="container navbar-homepage">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <button className="navbar-toggler border-0">
                        <i className="fa fa-bars text-icon-toggle"/>
                    </button>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav container-flex">
                            <li className="nav-item">
                                <a className="nav-link navbar-home-text uslide" href="#">Thông Tin</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link navbar-home-text uslide" href="#">Kĩ Năng</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link navbar-home-text uslide" href="#">Dự Án</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link navbar-home-text uslide" href="#">Kinh Nghiệm</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link navbar-home-text uslide" href="#">Liên Hệ</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>

        );
    }
}

export default Header;