import React, { Component } from "react";
import MaterialIcon from "./MaterialIcon";

import "./NewsCard.css";

export default class NewsCard extends Component {
    render() {
        const { title, text, modifier } = this.props;

        return (
            <div
                className={
                    "news-card mdl-card mdl-shadow--2dp" +
                    (modifier ? " news-card--" + modifier : "")
                }
            >
                <div className="mdl-card__title">
                    <h4>
                        {title}
                    </h4>
                </div>
                <div className="mdl-card__supporting-text">
                    {text}
                </div>
                <div className="mdl-card__actions mdl-card--border">
                    <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                        Mehr Erfahren
                    </a>
                    <div className="mdl-layout-spacer" />
                    <MaterialIcon name="navigate next" />
                </div>
            </div>
        );
    }
}
