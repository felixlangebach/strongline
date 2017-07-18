import React, { Component } from "react";
import List from "../components/List";
import Breadcrumb from "../components/Breadcrumb";
import Grid, { Col } from "../components/Grid";
import ContentSection from "../layouts/ContentSection";
import database from "../data/employees";

export default class EmployeesView extends Component {
    render() {
        return (
            <div data-view="EmployeesView">
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
                                    ({database.coaches.length + database.business.length})
                                </small>
                            </h2>
                        </Col>
                        <Col phone={12} tablet={6} desktop={6}>
                            <h5>Coaches</h5>
                            <List items={database.coaches} />
                        </Col>
                        <Col phone={12} tablet={6} desktop={6}>
                            <h5>Geschäftsleitung</h5>
                            <List items={database.business} />
                        </Col>
                    </Grid>
                </ContentSection>
            </div>
        );
    }
}
