import React, { Component } from "react";
import { Link } from "react-router-dom";
import Icon from "../components/Icon";
import Image from "../components/Image";

export default class Header extends Component {
    renderLinks() {
        const linkNodes = [];

        this.props.links.forEach((item, index) => {
            const { href, text, icon } = item;

            linkNodes.push(
                <Link className="mdl-navigation__link" to={href}>
                    {icon && <Icon name={icon} />}
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
                        <Image src="http://placehold.it/300x100" />
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
