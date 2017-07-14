import React, { Component } from "react";

import "material-design-lite/dist/material.min.css";
import "material-design-lite/dist/material.min.js";
import "../index.css";

export default class Strongline extends Component {
    render() {
        return (
            <div className="strongline-app">
                {this.props.children}
            </div>
        );
    }
}
