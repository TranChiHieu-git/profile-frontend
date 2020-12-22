import React, {Component} from 'react';
import {changSelectMenu} from "../../constant/JS_effect/public_js_effect";

class Contact extends Component {
    componentDidMount() {
        changSelectMenu("contact");
    }
    render() {
        return (
            <div>
                g
            </div>
        );
    }
}

export default Contact;