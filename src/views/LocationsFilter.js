import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getLocationByRegion } from "../data/locations";
import Breadcrumb from "../components/Breadcrumb";
import Card from "../components/Card";
import Icon from "../components/Icon";
import Grid, { Col } from "../components/Grid";
import ContentSection from "../layouts/ContentSection";
import database from "../data/locations";

import "./Locations.css";

export default class LocationsView extends Component {
    render() {
        const region = this.props.match.params.region;
        const dataset = getLocationByRegion(region);

        console.log(dataset);

        return (
            <div className="locations-view">
                <Breadcrumb
                    links={[
                        {
                            href: "/",
                            text: "Strongline"
                        },
                        {
                            href: "/standorte",
                            text: "Standorte"
                        },
                        {
                            text: dataset.title
                        }
                    ]}
                />
                <ContentSection>
                    <h2>
                        <span className="mdl-badge" data-badge={Object.keys(dataset.list).length}>
                            Standorte in {dataset.title}
                        </span>
                    </h2>
                    <div className="locations-view__container">
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
                                                link: `/standorte/${region}/${slug}`
                                            }}
                                        />
                                    </Col>
                                );
                            })}
                        </Grid>
                    </div>
                </ContentSection>
            </div>
        );
    }
}
