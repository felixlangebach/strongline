import React, { Component } from "react";

// CSS Stylesheets
import "material-design-lite/dist/material.min.css";
import "../ui/main.css";

// Partial Components
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import Drawer from "../partials/Drawer";

// Datasets
import links from "../partials/ressources/links";

// Wrapper Template
export default class Strongline extends Component {
    render() {
        return (
            <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
                <Header links={links} />
                <Drawer links={links} />
                <main className="mdl-layout__content">
                    <div className="page-content">
                        {this.props.children}
                    </div>
                </main>
                <Footer />
            </div>
        );
    }
}
