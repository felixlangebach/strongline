import React, { Component } from "react";
import Button from "./Button";
import MaterialIcon from "./MaterialIcon";
import "./Form.css";

export default class Form extends Component {
    static defaultProps = {
        action: "#noaction",
        showSubmitButton: true
    };

    render() {
        return (
            <form className="form" action={this.props.action}>
                {this.props.children}
                {this.props.showSubmitButton
                    ? <Button type="submit">
                          {this.props.submitText}
                      </Button>
                    : null}
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

export const Switch = ({ id = "default", delegate = () => {} }) =>
    <label className="mdl-switch mdl-js-switch mdl-js-ripple-effect" htmlFor={id}>
        <input type="checkbox" id={id} className="mdl-switch__input" onChange={delegate} />
        <span className="mdl-switch__label" />
    </label>;

export const ExpandableInput = ({
    id,
    type = "text",
    placeholder,
    inputPlaceholder,
    icon = "search"
}) =>
    <div className="mdl-textfield mdl-js-textfield mdl-textfield--expandable">
        <label className="mdl-button mdl-js-button mdl-button--icon" htmlFor={icon}>
            <MaterialIcon name={icon} />
        </label>
        <div className="mdl-textfield__expandable-holder">
            <input
                className="mdl-textfield__input"
                type={type}
                id={icon}
                placeholder={inputPlaceholder}
            />
            <label className="mdl-textfield__label" htmlFor={icon}>
                {placeholder}
            </label>
        </div>
    </div>;
