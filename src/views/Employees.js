import React, { Component } from "react";
import { Helmet } from "react-helmet";

// Database
import database from "../data/employees";

// Layouts
import ContentSection from "../layouts/ContentSection";

// Components
import List from "../components/List";
import Breadcrumb from "../components/Breadcrumb";
import ShareBar from "../components/ShareBar";
import Line from "../components/Line";
import Grid, { Col } from "../components/Grid";

export default class EmployeesView extends Component {
    render() {
        return (
            <div data-view="EmployeesView">
                <Helmet>
                    <title>Strongline - Mitarbeiter</title>
                </Helmet>
                <Breadcrumb
                    links={[
                        {
                            href: "/",
                            text: "Strongline"
                        },
                        {
                            text: "Über uns",
                            href: "/ueber-uns"
                        },
                        {
                            text: "Mitarbeiter"
                        }
                    ]}
                />
                <ContentSection>
                    <Grid>
                        <Col phone={12} tablet={12} desktop={12}>
                            <h2>
                                Unsere Mitarbeiter{" "}
                                <small>
                                    ({database.coaches.length + database.business.length} Total)
                                </small>
                            </h2>
                        </Col>
                        <Col phone={12} tablet={6} desktop={6}>
                            <h5>
                                Coaches <small>({database.coaches.length})</small>
                            </h5>
                            <List items={database.coaches} />
                        </Col>
                        <Col phone={12} tablet={6} desktop={6}>
                            <h5>
                                Geschäftsleitung <small>({database.business.length})</small>
                            </h5>
                            <List items={database.business} />
                        </Col>
                    </Grid>
                </ContentSection>
                <ShareBar title="Werde Teil der Strongline Community" />
                <Line color="#ec6248" height={3} />
            </div>
        );
    }
}
