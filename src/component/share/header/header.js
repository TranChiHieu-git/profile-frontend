import React, {Component} from 'react';

class Header extends Component {
    render() {
        return (
            <div className="container navbar-homepage">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <a className="navbar-toggler" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarNavDropdown"
                            aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
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
                {/*<div className="typewriter">*/}
                {/*    <div className="typewriter-text">Twinkle, twinkle, little star.</div>*/}
                {/*</div>*/}
            </div>

        );
    }
}

export default Header;