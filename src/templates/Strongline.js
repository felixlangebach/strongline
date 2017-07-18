import React, { Component } from "react";
import { withRouter } from "react-router";
import ReactDOM from "react-dom";

// CSS Stylesheets
import "../ui/main.css";

// Partial Components
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import Drawer from "../partials/Drawer";
import AppBar from "../partials/AppBar";

// Datasets
import links from "../partials/ressources/links";

// Wrapper Template
class Strongline extends Component {
    mounted = false;

    clickListener() {
        // On Link click close the drawer element via MaterialUI API
        ReactDOM.findDOMNode(this).MaterialLayout.toggleDrawer();
    }

    render() {
        return (
            <div
                className={
                    "mdl-layout mdl-js-layout mdl-layout__header--scroll" +
                    (this.props.location.pathname === "/" ? " mdl-layout--home" : "")
                }
            >
                <AppBar />
                <Header links={links} />
                <Drawer links={links} delegate={this.clickListener.bind(this)} />
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
