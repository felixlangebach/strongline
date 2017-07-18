import React, { Component } from "react";
import "./BackgroundImage.css";

export default class BackgroundImage extends Component {
    render() {
        return (
            <div
                className="background-image"
                style={{
                    backgroundImage: `url(/assets/img/${this.props.src})`,
                    height: this.props.size || 0
                }}
            />
        );
    }
}
