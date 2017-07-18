import React, { Component } from "react";

import "./ContentSection.css";

export default class ContentSection extends Component {
    render() {
        const { modifier, width, align } = this.props;

        return (
            <section
                className={
                    "content-section" +
                    (modifier ? " content-section--" + modifier : "") +
                    (width ? " content-section--width-" + width : "") +
                    (align ? " content-section--align-" + align : "")
                }
            >
                {this.props.children}
            </section>
        );
    }
}
