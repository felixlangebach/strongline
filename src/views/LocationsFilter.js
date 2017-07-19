import React, { Component } from "react";

// Database
import { getLocationByRegion } from "../data/locations";

// Layouts
import ContentSection from "../layouts/ContentSection";

// Components
import Breadcrumb from "../components/Breadcrumb";
import Card from "../components/Card";
import Grid, { Col } from "../components/Grid";

// Styles
import "./Locations.css";

export default class LocationsView extends Component {
    render() {
        const region = this.props.match.params.region;
        const dataset = getLocationByRegion(region);

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
                    <div className="locations-view__container">
                        <Grid>
                            <Col phone={12} tablet={12} desktop={12}>
                                <h2>Standorte</h2>
                                <h5>
                                    {Object.keys(dataset.list).length} davon in {dataset.title}
                                </h5>
                            </Col>
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
