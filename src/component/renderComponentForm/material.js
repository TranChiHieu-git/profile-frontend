import React from "react";
import TextField from "@material-ui/core/TextField";

export const renderField = ({ input, label, multiline,rows=1, meta: { touched, error } }) => (
    <div className="form-group">
        <div>
            <TextField {...input} label={label} multiline={multiline} rows={rows} fullWidth/>
        </div>
        {touched && error && <span className="text-danger">{error}</span>}
    </div>
);