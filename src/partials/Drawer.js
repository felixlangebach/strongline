import React, { Component } from "react";
import { Link } from "react-router-dom";
import Icon from "../components/Icon";
import Image from "../components/Image";

export default class Header extends Component {
    renderLinks() {
        const linkNodes = [];
        const delegate = () => {
            try {
                // Execute passed delegation handler for clicks
                this.props.delegate.call();
            } catch (e) {}
        };

        /**
         * Render each link as link node and listen to clicks
         * @see {StronglineTemplate}
         */
        this.props.links.forEach((item, index) => {
            const { href, text, icon } = item;

            linkNodes.push(
                <Link className="mdl-navigation__link" key={index} to={href} onClick={delegate}>
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
                    <h6>Navigation</h6>
                </span>
                <nav className="mdl-navigation">
                    {this.renderLinks()}
                </nav>
            </div>
        );
    }
}
