import React, { Component } from "react";
import { Link } from "react-router-dom";
import Icon from "../components/Icon";
import Chip from "../components/Chip";
import Line from "../components/Line";

import "./CardPackage.css";

export default class Card extends Component {
    static defaultProps = {
        icon: "share",
        price: 0,
        items: [],
        theme: "default",
        currency: "CHF"
    };

    render() {
        const styles = {};
        const { currency, button, theme, items, price, icon } = this.props;

        if (this.props.image) {
            styles.background = `url(${this.props.image}) center / cover`;
        }

        return (
            <div
                className={
                    "card-package mdl-card mdl-shadow--2dp" +
                    (theme ? " card-package--theme-" + theme : "")
                }
            >
                <div className="mdl-card__title" style={styles}>
                    <h2 className="mdl-card__title-text card-package-title">
                        <Icon name={icon} />
                    </h2>
                </div>
                <Line color="rgba(0,0,0,.1)" height={1} />
                <div className="mdl-card__supporting-text">
                    <ul className="card-package-contents">
                        {items.map((item, index) =>
                            <li className="card-package-contents__item" key={index}>
                                {item}
                            </li>
                        )}
                    </ul>
                </div>
                <Line color="rgba(0,0,0,.1)" height={1} />
                <div className="card-package-price">
                    <Chip text={`${price} ${currency}`} />
                </div>
                <div className="mdl-card__actions mdl-card--border">
                    <Link
                        className="mdl-button mdl-js-button mdl-js-ripple-effect"
                        to={button.link}
                    >
                        {button.text}
                    </Link>
                </div>
            </div>
        );
    }
}
