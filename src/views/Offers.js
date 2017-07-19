import React, { Component } from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import Grid, { Col } from "../components/Grid";
import EventCard from "../components/EventCard";
import ContentSection from "../layouts/ContentSection";
import database from "../data/events";

export default class OffersView extends Component {
    render() {
        return (
            <div data-view="OffersView">
                <Breadcrumb
                    links={[
                        {
                            href: "/",
                            text: "Strongline"
                        },
                        {
                            text: "Angebote"
                        }
                    ]}
                />
                <ContentSection>
                    <Grid>
                        <Col phone={12} tablet={12} desktop={12}>
                            <h2>
                                Angebote <small>({database.length})</small>
                            </h2>
                        </Col>
                        {database.length === 0
                            ? <p>
                                  <a href="/angebote">Bitte Seite neu laden</a>
                              </p>
                            : null}
                        {database.map((data, index) => {
                            return (
                                <Col phone={12} tablet={4} desktop={3} key={index}>
                                    <EventCard
                                        title={data.title}
                                        time={data.time}
                                        date={data.date}
                                    />
                                </Col>
                            );
                        })}
                    </Grid>
                </ContentSection>
            </div>
        );
    }
}
