import React, { Component } from "react";
import "./Button.css";

export default class Button extends Component {
    static defaultProps = {
        ripple: true,
        raised: true,
        disabled: false,
        type: "button",
        role: "button"
    };

    get classes() {
        const classes = [];
        const { raised, ripple, disabled } = this.props;

        if (raised) {
            classes.push("mdl-button--raised");
        }

        if (ripple) {
            classes.push("mdl-js-ripple-effect");
        }

        return classes.join(" ");
    }

    render() {
        const { type, role, disabled } = this.props;

        return (
            <button
                type={type}
                role={role}
                className={"mdl-button mdl-js-button " + this.classes}
                disabled={disabled}
            >
                {this.props.children}
            </button>
        );
    }
}
