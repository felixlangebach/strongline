import React, { Component } from "react";
import { withRouter } from "react-router";

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
class Strongline extends Component {
    componentWillReceiveProps(nextProps) {
        if (this.props.location.pathname !== nextProps.location.pathname) {
        }
    }

    render() {
        return (
            <div className="mdl-layout mdl-js-layout mdl-layout__header--scroll">
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

export default withRouter(Strongline);
