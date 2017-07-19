import React, { Component } from "react";
import { Link } from "react-router-dom";
import MaterialIcon from "../components/MaterialIcon";
import Image from "../components/Image";

import "./Header.css";

export default class Header extends Component {
    renderLinks() {
        const linkNodes = [];

        this.props.links.forEach((item, index) => {
            const { href, text, icon } = item;

            linkNodes.push(
                <Link className="mdl-navigation__link" to={href} key={index}>
                    {icon && <MaterialIcon name={icon} />}
                    {text}
                </Link>
            );
        });

        return linkNodes;
    }

    render() {
        return (
            <header className="mdl-layout__header">
                <div className="mdl-layout__header-row">
                    <span className="mdl-layout-title">
                        <Link to="/">
                            <Image className="mdl-layout-logo" src="logo_finish_white.png" />
                        </Link>
                    </span>
                    <div className="mdl-layout-spacer" />
                    <nav className="mdl-navigation mdl-layout--large-screen-only">
                        {this.renderLinks()}
                    </nav>
                </div>
            </header>
        );
    }
}
