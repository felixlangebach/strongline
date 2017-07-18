import React, { Component } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import Maps from "../components/Maps";
import { getLocationByRegionAndId } from "../data/locations";
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
        const location = this.props.match.params.location;
        const id = this.props.match.params.id;

        if (!location || !id) {
            return this.renderNotFound();
        }

        const data = getLocationByRegionAndId(location, id);

        if (!data) {
            return this.renderNotFound();
        }

        return (
            <div data-view="LocationView">
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
