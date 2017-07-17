import React, { Component } from "react";
import Grid, { Col } from "../components/Grid";
import EventCard from "../components/EventCard";
import database from "../data/events";

export default class XXView extends Component {
    render() {
        return (
            <Grid>
                {database.map((data, index) => {
                    return (
                        <Col mobile={12} tablet={5} desktop={3} key={index}>
                            <EventCard title={data.title} time={data.time} date={data.date} />
                        </Col>
                    );
                })}
            </Grid>
        );
    }
}
