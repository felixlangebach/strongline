import React, { Component } from "react";

export default class Grid extends Component {
    render() {
        return (
            <div className="mdl-grid">
                {this.props.children}
            </div>
        );
    }
}

export class Col extends Component {
    get classes() {
        const { desktop, tablet, phone } = this.props;
        const classes = [];

        if (desktop) {
            classes.push(`mdl-cell--${desktop}-desktop`);
        }

        if (tablet) {
            classes.push(`mdl-cell--${tablet}-tablet`);
        }

        if (phone) {
            classes.push(`mdl-cell--${phone}-phone`);
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
