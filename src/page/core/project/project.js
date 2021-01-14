import React, {Component} from 'react';
import "../../../css/projectcomponent.css";
import weather_app from "../../../data/picture/weather-app.png";
import {Card} from "antd";
import {Link} from "react-router-dom";

let {Meta} = Card;

class Project extends Component {
    render() {
        return (
            <div className="project-root">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 xuonghang">
                            <label className="title-css">Dự án</label>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3 xuonghang">
                            <Link to="/weather-app">
                                <Card
                                    hoverable
                                    style={{width: "100%"}}
                                    cover={<img alt="example"
                                                src={weather_app}/>}
                                >
                                    <Meta title="Weather App"
                                          description="Ứng dụng dự báo thời tiết"/>
                                </Card>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Project;