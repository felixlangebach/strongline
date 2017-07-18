import React, { Component } from "react";

import "./ContentSection.css";

export default class ContentSection extends Component {
    render() {
        return (
            <section className="content-section">
                {this.props.children}
            </section>
        );
    }
}
