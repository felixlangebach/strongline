import React, { Component } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import Grid, { Col } from "../components/Grid";
import ContentSection from "../layouts/ContentSection";
import Breadcrumb from "../components/Breadcrumb";

class ErrorView extends Component {
    render() {
        return (
            <div data-view="ShopView">
                <Breadcrumb
                    links={[
                        {
                            href: "/",
                            text: "Strongline"
                        },
                        {
                            text: "Nicht gefunden"
                        }
                    ]}
                />
                <ContentSection modifier="space" width="small">
                    <Grid>
                        <Col phone={12} tablet={12} desktop={12}>
                            <h3>Fehler 404</h3>
                        </Col>
                        <Col phone={12} tablet={10} desktop={8}>
                            <p>
                                Die Ansicht unter der URL{" "}
                                <strong>{this.props.location.pathname}</strong> wurde leider nicht
                                gefunden, bitte kehren Sie zur <Link to="/">Startseite</Link>{" "}
                                zurück.
                            </p>
                        </Col>
                        <Col phone={12} tablet={10} desktop={8}>
                            <p>
                                <strong>Ihr Strongline Team</strong>
                            </p>
                        </Col>
                    </Grid>
                </ContentSection>
            </div>
        );
    }
}

export default withRouter(ErrorView);
