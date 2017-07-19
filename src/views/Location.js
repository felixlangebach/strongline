import React, { Component } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

// Datasets
import { getLocationByRegion, getLocationByRegionAndId } from "../data/locations";

// Helper
import template from "../helper/template";

// Layouts
import ContentSection from "../layouts/ContentSection";

// Components
import Breadcrumb from "../components/Breadcrumb";
import Maps from "../components/Maps";
import Button from "../components/Button";
import MaterialIcon from "../components/MaterialIcon";
import Grid, { Col } from "../components/Grid";

class LocationView extends Component {
    renderNotFound(invalidLocation) {
        return (
            <div>
                <Helmet>
                    {invalidLocation
                        ? <title>
                              Strongline - Standort {invalidLocation} nicht gefunden
                          </title>
                        : <title>Strongline - Unbekannter Standort</title>}
                </Helmet>
                <h2>Nichts gefunden ...</h2>
                <p>
                    Finde deinen Standort unter <Link to="/standorte">Standorte</Link>
                </p>
            </div>
        );
    }

    render() {
        // Get URL params => /standorte/:location/:id
        const location = this.props.match.params.location;
        const id = this.props.match.params.id;

        if (!location || !id) {
            // If URL is invalid e.g. no region or id return not found
            return this.renderNotFound();
        }

        // Get region data
        const parentData = getLocationByRegion(location);

        // Get center data
        const data = getLocationByRegionAndId(location, id);

        if (!data) {
            // If no center found return not found
            return this.renderNotFound();
        }

        return (
            <div data-view="LocationView">
                <Helmet>
                    <title>
                        Strongline - Standort in {parentData.title} - {data.company}
                    </title>
                </Helmet>
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
                            text: parentData.title,
                            href: `/standorte/${location}`
                        },
                        {
                            text: data.company
                        }
                    ]}
                />
                <ContentSection>
                    <Grid>
                        <Col phone={12} tablet={7} desktop={8}>
                            <Maps location={data.query} zoom={14} />
                        </Col>
                        <Col phone={12} tablet={5} desktop={4}>
                            <div className="location-info">
                                <h3>
                                    {data.company}
                                </h3>
                                <p>
                                    {data.contact.chief}
                                    <br />
                                    {data.contact.address}
                                    <br />
                                    {data.contact.location}
                                    <br />
                                </p>
                                <hr />
                                <p>
                                    {template(data.description, {
                                        company: data.company,
                                        region: parentData.title,
                                        address: data.contact.address
                                    })}
                                </p>
                            </div>
                        </Col>
                        <Col phone={12} tablet={12} desktop={12}>
                            <a
                                href={`https://www.google.com/maps/search/?api=1&query=${data.query}`}
                                target="_blank"
                                rel="nofollow"
                            >
                                <Button>
                                    <MaterialIcon name="navigation" /> Auf Google Maps anzeigen
                                </Button>
                            </a>
                        </Col>
                    </Grid>
                </ContentSection>
            </div>
        );
    }
}

export default withRouter(LocationView);
