import React, { Component } from "react";
import Card from "../components/Card";
import List from "../components/List";
import Grid, { Col } from "../components/Grid";
import database from "../data/locations";

import "./Locations.css";

export default class LocationsView extends Component {
    generateLocationDatasets() {
        const sets = [];

        for (let slug in database) {
            sets.push({
                ...database[slug],
                slug
            });
        }

        return sets;
    }

    render() {
        const datasets = this.generateLocationDatasets();

        return (
            <div className="locations-view">
                <h2>
                    Standorte <small>({datasets.length})</small>
                </h2>
                <Grid>
                    {datasets.map((dataset, index) => {
                        return (
                            <Col mobile={12} tablet={4} desktop={4} key={index}>
                                <Card
                                    title={dataset.company}
                                    text={dataset.shortDescription}
                                    button={{
                                        text: "Details",
                                        link: `/standorte/${dataset.slug}`
                                    }}
                                />
                            </Col>
                        );
                    })}
                </Grid>
            </div>
        );
    }
}
