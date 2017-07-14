import React, { Component } from "react";

import "material-design-lite/dist/material.min.css";
import "material-design-lite/dist/material.min.js";
import "../index.css";

import Header from "../partials/Header";
import Drawer from "../partials/Drawer";

export default class Strongline extends Component {
    render() {
        return (
            <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
                <Header />
                <Drawer />
                <main className="mdl-layout__content">
                    <div className="page-content">
                        {this.props.children}
                    </div>
                </main>
            </div>
        );
    }
}
