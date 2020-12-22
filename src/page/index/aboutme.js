import React, {Component} from 'react';
import {changSelectMenu} from "../../constant/JS_effect/public_js_effect";

class Aboutme extends Component {
    componentDidMount() {
        changSelectMenu("aboutme");
    }

    render() {
        return (
            <div>
                b
            </div>
        );
    }
}

export default Aboutme;