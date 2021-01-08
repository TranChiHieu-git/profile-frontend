import React, {Component} from 'react';
import "../../../css/righttopcomponent.css"

class RightTopcomponent extends Component {
    render() {
        return (
            <div className="display-righttop">
                <div className="righttopelement">
                    <i className="fa fa-home item-right-top"/>
                </div>
                <div className="righttopelementtypetext">
                    RESUME
                </div>
                <div className="righttopelementtypetext">
                    PROJECT
                </div>
                <div className="righttopelementtypetext">
                    CONTACT
                </div>
            </div>
        );
    }
}

export default RightTopcomponent;