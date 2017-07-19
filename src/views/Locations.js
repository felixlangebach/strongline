import React, { Component } from "react";
import { Link } from "react-router-dom";

// Database
import database from "../data/locations";

// Layouts
import ContentSection from "../layouts/ContentSection";

// Components
import Breadcrumb from "../components/Breadcrumb";
import Card from "../components/Card";
import MaterialIcon from "../components/MaterialIcon";
import Grid, { Col } from "../components/Grid";
import ShareBar from "../components/ShareBar";
import Line from "../components/Line";

// Styles
import "./Locations.css";

export default class LocationsView extends Component {
    generateLocationDatasets() {
        console.log("generate sets", database);
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
                    <Grid>
                        <Col phone={12} tablet={12} desktop={12}>
                            <h2>
                                <span className="mdl-badge" data-badge={datasets.length}>
                                    Standorte
                                </span>
                            </h2>
                        </Col>
                    </Grid>
                    <div className="locations-view__container">
                        {datasets.map((dataset, index) => {
                            return (
                                <div
                                    className="locations-view__container-region"
                                    key={dataset.slug}
                                >
                                    <Grid>
                                        <Col phone={12} tablet={12} desktop={12}>
                                            <h4>
                                                <Link to={`/standorte/${dataset.slug}`}>
                                                    <MaterialIcon name="filter list" />{" "}
                                                    {dataset.title}
                                                    <small>
                                                        {" "}({Object.keys(dataset.list).length}{" "}
                                                        Verfügbar)
                                                    </small>
                                                </Link>
                                            </h4>
                                        </Col>
                                        {Object.keys(dataset.list).map((slug, centerIndex) => {
                                            const center = dataset.list[slug];

                                            return (
                                                <Col phone={12} tablet={4} desktop={4} key={slug}>
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
                <ShareBar title="Werde Teil der Strongline Community" />
                <Line color="#ec6248" height={3} />
            </div>
        );
    }
}
