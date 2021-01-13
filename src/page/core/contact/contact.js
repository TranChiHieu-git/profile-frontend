import React, {Component} from 'react';
import "../../../css/contactcomponent.css";
import Contactform from "../contact-form/contactform";

class Contact extends Component {
    render() {
        return (
            <div className="contact-root">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 xuonghang">
                            <label className="title-css">Liên hệ</label>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 xuonghang">
                            <Contactform/>
                        </div>
                        <div className="col-md-12 xuonghang">
                            <label className="title-css">Vị trí</label>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 xuonghang">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3224.2408137826865!2d108.2116956590308!3d16.050428085438828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1610551479467!5m2!1svi!2s"
                                width="100%" height="300px" frameBorder="0" allowFullScreen=""
                                aria-hidden="false" tabIndex="0"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;