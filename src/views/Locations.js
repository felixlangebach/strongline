import React, { Component } from "react";
import Card from "../components/Card";
import List from "../components/List";
import Grid, { Col } from "../components/Grid";

export default class LocationsView extends Component {
    render() {
        return (
            <div className="locations-view">
                <h1>Standorte</h1>
                <List items={["Rogeeeeea"]} />
                <Grid>
                    <Col mobile={12} tablet={4} desktop={3}>
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
                    </Col>
                </Grid>
            </div>
        );
    }
}
