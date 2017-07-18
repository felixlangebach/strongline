import React, { Component } from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import Card from "../components/Card";
import Icon from "../components/Icon";
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
                <Breadcrumb
                    links={[
                        {
                            href: "/",
                            text: "Strongline"
                        },
                        {
                            text: "Standorte"
                        }
                    ]}
                />
                <ContentSection>
                    <h2>
                        <span className="mdl-badge" data-badge={datasets.length}>
                            Standorte
                        </span>
                    </h2>
                    <div className="locations-view__container">
                        {datasets.map((dataset, index) => {
                            return (
                                <div
                                    className="locations-view__container-region"
                                    key={dataset.slug}
                                >
                                    <h4>
                                        <Link to={`/standorte/${dataset.slug}`}>
                                            <Icon name="filter list" /> {dataset.title}
                                            <small>
                                                {" "}({Object.keys(dataset.list).length} Verfügbar)
                                            </small>
                                        </Link>
                                    </h4>
                                    <Grid>
                                        {Object.keys(dataset.list).map((slug, centerIndex) => {
                                            const center = dataset.list[slug];

                                            return (
                                                <Col mobile={12} tablet={4} desktop={4} key={slug}>
                                                    <Card
                                                        title={center.company}
                                                        text={center.shortDescription}
                                                        button={{
                                                            text: "Details",
                                                            link: `/standorte/${dataset.slug}/${slug}`
                                                        }}
                                                    />
                                                </Col>
                                            );
                                        })}
                                    </Grid>
                                </div>
                            );
                        })}
                    </div>
                </ContentSection>
            </div>
        );
    }
}
