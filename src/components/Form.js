import React, { Component } from "react";
import Button from "./Button";
import "./Form.css";

export default class Form extends Component {
    static defaultProps = {
        action: "#noaction"
    };

    render() {
        return (
            <form className="form" action={this.props.action}>
                {this.props.children}
                <Button type="submit">
                    {this.props.submitText}
                </Button>
            </form>
        );
    }
}

export const Input = ({ type = "text", id, placeholder = "..." }) =>
    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
        <input className="mdl-textfield__input" type={type} id={id} />
        <label className="mdl-textfield__label" htmlFor={id}>
            {placeholder}
        </label>
    </div>;

export const Textarea = ({ rows = 5, id, placeholder = "..." }) =>
    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
        <textarea className="mdl-textfield__input" type="text" rows={rows} id={id} />
        <label className="mdl-textfield__label" htmlFor={id}>
            {placeholder}
        </label>
    </div>;
