import React, { Component } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import Maps from "../components/Maps";
import { getLocationByRegion, getLocationByRegionAndId } from "../data/locations";
import Grid, { Col } from "../components/Grid";
import ContentSection from "../layouts/ContentSection";

class LocationView extends Component {
    renderNotFound() {
        return (
            <div>
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
                                    {data.description}
                                </p>
                            </div>
                        </Col>
                    </Grid>
                </ContentSection>
            </div>
        );
    }
}

export default withRouter(LocationView);
