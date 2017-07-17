import React, { Component } from "react";

export default class Form extends Component {
    static defaultProps = {
        action: "#noaction"
    };

    render() {
        return (
            <form action={this.props.action}>
                {this.props.children}
                <button
                    className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect"
                    type="submit"
                >
                    {this.props.submitText}
                </button>
            </form>
        );
    }
}

export const Input = ({ type = "text", id, placeholder = "..." }) =>
    <div
        className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label"
        style={{ display: "block" }}
    >
        <input className="mdl-textfield__input" type={type} id={id} />
        <label className="mdl-textfield__label" for={id}>
            {placeholder}
        </label>
    </div>;

export const Textarea = ({ rows = 5, id, placeholder = "..." }) =>
    <div
        className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label"
        style={{ display: "block" }}
    >
        <textarea className="mdl-textfield__input" type="text" rows={rows} id={id} />
        <label className="mdl-textfield__label" for={id}>
            {placeholder}
        </label>
    </div>;
