import React, {Component} from 'react';
import {changSelectMenu} from "../../constant/JS_effect/public_js_effect";

class Portfolio extends Component {
    componentDidMount() {
        changSelectMenu("portfolio");
    }
    render() {
        return (
            <div>
                d
            </div>
        );
    }
}

export default Portfolio;