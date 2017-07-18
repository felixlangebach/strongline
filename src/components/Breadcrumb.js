import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Breadcrumb.css";

export default class Breadcrumb extends Component {
    render() {
        const { links } = this.props;

        return (
            <ul className="breadcrumb">
                {links.map((link, index) => {
                    return (
                        <li
                            className={"breadcrumb-item" + (link.href ? " is-link" : " is-text")}
                            key={index}
                        >
                            {link.href
                                ? <Link to={link.href}>
                                      {link.text}
                                  </Link>
                                : link.text}
                        </li>
                    );
                })}
            </ul>
        );
    }
}
