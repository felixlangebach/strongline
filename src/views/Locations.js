import React, { Component } from "react";
import Card from "../components/Card";
import Grid, { Col } from "../components/Grid";
import ContentSection from "../layouts/ContentSection";
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
                <ContentSection>
                    <h2>
                        <span className="mdl-badge" data-badge={datasets.length}>
                            Standorte
                        </span>
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
                </ContentSection>
            </div>
        );
    }
}
