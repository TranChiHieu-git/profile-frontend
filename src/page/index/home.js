import React, {Component} from 'react';
import {changSelectMenu} from "../../constant/JS_effect/public_js_effect";
import {Carousel} from "antd";
import {Link} from "react-router-dom";

class Home extends Component {
    componentDidMount() {
        changSelectMenu("home");
    }

    render() {
        return (
            <React.Fragment>
                <div className="page-home">
                    {/*<h2 className="page-home-title">Hello I'm TRAN CHI HIEU</h2>*/}
                    <div className="page-home-button">
                        <Link to="/aboutme" className="button-page-home">About Me</Link>
                        <Link to="/contact" className="button-page-home">Contact</Link>
                    </div>
                    <Carousel autoplay={true} dots={false}>
                        <div className="hinhnen-1"/>
                        <div className="hinhnen-2"/>
                        <div className="hinhnen-3"/>
                    </Carousel>
                </div>
            </React.Fragment>
        );
    }
}

export default Home;