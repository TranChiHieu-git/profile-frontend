import React, {Component} from 'react';
import Header from "../share/header/header";
import backgroundpicture from '../../data/picture/bg.jpg'

class Home extends Component {
    componentDidMount() {
        let i = 0;
        let vector = "right";
        const txt = ['XIN CHÀO ^^', 'TÔI LÀ TRẦN CHÍ HIẾU!', 'TÔI LÀ MỘT WEB DEVELOPER!'];
        let index = 0;
        let speed = 150;
        setInterval(() => {
            if (i < txt[index].length &&
                document.getElementById("testeffect") !== null &&
                vector === "right") {
                document.getElementById("testeffect").innerHTML += txt[index].charAt(i);
                i++;
                let delayWhenWrite;
                if (i >= txt[index].length) {
                    delayWhenWrite = setTimeout(() => {
                        vector = "left";
                        speed = 50;
                    }, 5000);
                }
                if (vector === "left") {
                    clearTimeout(delayWhenWrite);
                }
            } else if (i > -1 &&
                document.getElementById("testeffect") !== null &&
                vector === "left") {
                document.getElementById("testeffect").innerHTML = txt[index].substr(0, i);
                i--;
                let delayWhenWrite;
                if (i < 0) {
                    delayWhenWrite = setTimeout(() => {
                        vector = "right";
                        speed = 150;
                        if (index >= txt.length - 1) {
                            index = 0;
                        } else {
                            index++;
                        }
                    }, 1000);
                }
                if (vector === "right") {
                    clearTimeout(delayWhenWrite);
                }
            }
        }, speed);
    }

    render() {
        return (
            <div>
                <img className="background-img-home" src={backgroundpicture} alt="ảnh nền"/>
                <Header/>
                <h2 className="container-fluid text-center text-type" id="testeffect"/>
                <a className="about-me-button">NHIỀU HƠN VỀ TÔI</a>
            </div>
        );
    }
}

export default Home;