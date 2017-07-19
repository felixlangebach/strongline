import React, { Component } from "react";
import MaterialIcon from "./MaterialIcon";

import "./EventCard.css";

export default class Card extends Component {
    render() {
        return (
            <div className="event-card mdl-card mdl-shadow--2dp">
                <div className="mdl-card__title mdl-card--expand">
                    <h4>
                        <span className="mdl-card__name">
                            {this.props.title}
                        </span>
                        <br />
                        <span className="mdl-card__date">
                            {this.props.date}
                        </span>
                        <br />
                        <span className="mdl-card__time">
                            {this.props.time}
                        </span>
                    </h4>
                </div>
                <div className="mdl-card__actions mdl-card--border">
                    <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                        Hinzufügen
                    </a>
                    <div className="mdl-layout-spacer" />
                    <MaterialIcon name="event" />
                </div>
            </div>
        );
    }
}
