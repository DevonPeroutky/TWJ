import * as React from "react";
import "./contactform.css";
import {IProps} from "@blueprintjs/core";
import * as classNames from "classnames";

export class ContactForm extends React.Component<IProps, {data: {[type: string]: string}, isSubmitting: boolean}> {
    public state = {
        data: {
            company: "",
            email: "",
            message: "",
            name: "",
            phone: "",
            position: ""
        },
        isSubmitting: false
    };

    public render() {
        const {className} = this.props;
        return (
            <div className={classNames("contact-form", className)}>
                <hr/>
                <div className="title">Phone Number</div>
                <div>(703) 973-1334</div>
                <br/>
                <div className="title">Email </div>
                <div>trippinwithjamie@gmail.com</div>
            </div>
        );
    }
}
