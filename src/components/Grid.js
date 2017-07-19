import React, { Component } from "react";
import "./Grid.css";

export default class Grid extends Component {
    static defaultProps = {
        spacing: true
    };

    render() {
        const { spacing } = this.props;

        return (
            <div className={"mdl-grid" + (!spacing ? " mdl-grid--no-spacing" : "")}>
                {this.props.children}
            </div>
        );
    }
}

export class Col extends Component {
    get classes() {
        const { modifier, desktop, tablet, phone } = this.props;
        const classes = ["mdl-cell"];

        if (desktop) {
            classes.push(`mdl-cell--${desktop}-col-desktop`);
        }

        if (tablet) {
            classes.push(`mdl-cell--${tablet}-col-tablet`);
        }

        if (phone) {
            classes.push(`mdl-cell--${phone}-col-phone`);
        }

        if (modifier) {
            classes.push(`mdl-cell--${modifier}`);
        }

        return classes.join(" ");
    }

    render() {
        return (
            <div className={this.classes}>
                {this.props.children}
            </div>
        );
    }
}

export const ContentWrapper = ({ children, align }) =>
    <div
        className={
            "mdl-cell__content-wrapper" +
            (align ? " mdl-cell__content-wrapper--align-" + align : "")
        }
    >
        {children}
    </div>;
