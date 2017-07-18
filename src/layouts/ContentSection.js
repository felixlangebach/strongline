import React, { Component } from "react";

import "./ContentSection.css";

export default class ContentSection extends Component {
    render() {
        const { modifier, width } = this.props;

        return (
            <section
                className={
                    "content-section" +
                    (modifier ? " content-section--" + modifier : "") +
                    (width ? " content-section--width-" + width : "")
                }
            >
                {this.props.children}
            </section>
        );
    }
}
