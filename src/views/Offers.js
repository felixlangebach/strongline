import React, { Component } from "react";
import { Helmet } from "react-helmet";

// Database
import database from "../data/events";

// Layouts
import ContentSection from "../layouts/ContentSection";

// Components
import Breadcrumb from "../components/Breadcrumb";
import Grid, { Col } from "../components/Grid";
import EventCard from "../components/EventCard";

export default class OffersView extends Component {
    render() {
        return (
            <div data-view="OffersView">
                <Helmet>
                    <title>
                        {`Strongline - Angebote - ${database.length} verfügbar`}
                    </title>
                </Helmet>
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
                            ? <Col phone={12} tablet={12} desktop={12}>
                                  <p>
                                      Fehler bei der Datenverarbeitung,{" "}
                                      <a href="/angebote">bitte laden Sie die Seite erneut</a>.
                                  </p>
                              </Col>
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
