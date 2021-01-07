import React, {Component} from 'react';
import {Switch} from 'antd';

class ToggleDarkMode extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDark: localStorage.getItem("theme") === "dark"
        }
    }

    toggleThemeChange() {
        let {isDark} = this.state;
        if (isDark) {
            localStorage.setItem("theme", "light");
            document.getElementsByTagName("HTML")[0].setAttribute("data-theme", "light");
            this.setState({isDark: false});
        } else {
            localStorage.setItem("theme", "dark");
            document.getElementsByTagName("HTML")[0].setAttribute("data-theme", "dark");
            this.setState({isDark: true});
        }
    }

    render() {
        let {isDark} = this.state;
        return (
            <Switch defaultChecked={isDark} onChange={() => this.toggleThemeChange()}/>
        );
    }
}

export default ToggleDarkMode;