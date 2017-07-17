import React, { Component } from "react";
import Grid, { Col } from "../components/Grid";
import EventCard from "../components/EventCard";
import database from "../data/events";

export default class OffersView extends Component {
    render() {
        return (
            <div data-view="OffersView">
                <h2>
                    Angebote <small>({database.length})</small>
                </h2>
                <Grid>
                    {database.map((data, index) => {
                        return (
                            <Col mobile={12} tablet={5} desktop={3} key={index}>
                                <EventCard title={data.title} time={data.time} date={data.date} />
                            </Col>
                        );
                    })}
                </Grid>
            </div>
        );
    }
}
