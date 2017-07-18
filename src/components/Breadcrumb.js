import React, { Component } from "react";
import { Link } from "react-router-dom";
import ContentSection from "../layouts/ContentSection";
import "./Breadcrumb.css";

export default class Breadcrumb extends Component {
    render() {
        const { links } = this.props;

        return (
            <div className="breadcrumb">
                <ContentSection>
                    <ul className="breadcrumb-list">
                        {links.map((link, index) => {
                            return (
                                <li
                                    className={
                                        "breadcrumb-item" + (link.href ? " is-link" : " is-text")
                                    }
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
                </ContentSection>
            </div>
        );
    }
}
