import React, { Component } from "react";
import Card from "../components/Card";

export default class LocationsView extends Component {
    render() {
        return (
            <div className="locations-view">
                <h1>Standorte</h1>
                <Card
                    title="Test"
                    text="Lorem ipsum dolor sit amet ..."
                    image="http://placehold.it/300x300"
                    button={{
                        text: "Button Text",
                        link: "/test",
                        test: 10
                    }}
                />
            </div>
        );
    }
}
