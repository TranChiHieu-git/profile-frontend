import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {renderField} from "../../../component/renderComponentForm/material";
import {notification, message} from "antd";

class Contactform extends Component {
    send = (values) => {
        if (values.hasOwnProperty("email") && values.hasOwnProperty("ten")) {
            notification.open({
                message: 'Thông báo',
                description:
                    'Thông tin liên hệ của bạn đã được lưu trữ. Tôi sẽ liên hệ với bạn sớm nhất. Xin cám ơn!',
            });
        } else {
            message.error('Vui lòng điền đầy đủ thông tin!');
        }
    }

    render() {
        let {handleSubmit} = this.props;
        return (
            <form onSubmit={handleSubmit(this.send)}>
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                        <Field
                            name="ten"
                            label="Họ và tên"
                            component={renderField}
                            required={true}
                        />
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                        <Field
                            name="email"
                            label="Email"
                            component={renderField}
                            required={true}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        <Field
                            name="contact"
                            label="Lời nhắn"
                            component={renderField}
                            multiline={true}
                            rows={4}
                        />
                    </div>
                </div>
                <div className="pull-right">
                    <button type="submit" className="btn btn-outline-dark">
                        <i className="fa fa-send-o"/> Hoàn tất
                    </button>
                </div>
            </form>
        );
    }
}

Contactform = reduxForm({
    form: 'contact',
})(Contactform)
export default Contactform;
