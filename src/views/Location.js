import React, { Component } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import Maps from "../components/Maps";
import { getLocationById } from "../data/locations";
import Grid, { Col } from "../components/Grid";

class LocationView extends Component {
    render() {
        const location = this.props.match.params.location;
        const data = getLocationById(location);

        if (!data) {
            return (
                <div>
                    <h2>Nichts gefunden ...</h2>
                    <p>
                        Finde deinen Standort unter <Link to="/standorte">Standorte</Link>
                    </p>
                </div>
            );
        }

        return (
            <div data-view="LocationView">
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
                        </div>
                    </Col>
                </Grid>
            </div>
        );
    }
}

export default withRouter(LocationView);
