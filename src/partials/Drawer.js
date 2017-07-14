import React, { Component } from "react";
import { Link } from "react-router-dom";
import Icon from "../components/Icon";
import Image from "../components/Image";

export default class Header extends Component {
    renderLinks() {
        const linkNodes = [];

        this.props.links.forEach((item, index) => {
            const { href, link, text, icon } = item;

            linkNodes.push(
                <Link className="mdl-navigation__link" key={index} to={href}>
                    {icon && <Icon name={icon} />}
                    {text}
                </Link>
            );
        });

        return linkNodes;
    }

    render() {
        return (
            <div className="mdl-layout__drawer">
                <span className="mdl-layout-title">
                    <Image src="http://placehold.it/400x100" />
                </span>
                <nav className="mdl-navigation">
                    {this.renderLinks()}
                </nav>
            </div>
        );
    }
}
