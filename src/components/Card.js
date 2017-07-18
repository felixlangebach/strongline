import React, { Component } from "react";
import { Link } from "react-router-dom";
import Icon from "../components/Icon";

export default class Card extends Component {
    static defaultProps = {
        icon: "share"
    };

    render() {
        const styles = {};

        if (this.props.image) {
            styles.background = `url(${this.props.image}) center / cover`;
        }

        return (
            <div className="demo-card-wide mdl-card mdl-shadow--2dp">
                <div className="mdl-card__title" style={styles}>
                    <h2 className="mdl-card__title-text">
                        {this.props.title}
                    </h2>
                </div>
                <div className="mdl-card__supporting-text">
                    {this.props.text}
                </div>
                <div className="mdl-card__actions mdl-card--border">
                    <Link
                        className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect"
                        to={this.props.button.link}
                    >
                        {this.props.button.text}
                    </Link>
                </div>
                <div className="mdl-card__menu">
                    <button className="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
                        <Icon name={this.props.icon} />
                    </button>
                </div>
            </div>
        );
    }
}
