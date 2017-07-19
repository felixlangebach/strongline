import React, { Component } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Typist from "react-typist";
import typistConfig from "../data/typistConfig";

// Layouts
import ContentSection from "../layouts/ContentSection";

// Components
import Grid, { Col } from "../components/Grid";
import Breadcrumb from "../components/Breadcrumb";

class ErrorView extends Component {
    render() {
        return (
            <div data-view="ShopView">
                <Helmet>
                    <title>Strongline - Hier ist nichts ...</title>
                </Helmet>
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
                                <strong>
                                    <Typist {...typistConfig}>Ihr Strongline Team</Typist>
                                </strong>
                            </p>
                        </Col>
                    </Grid>
                </ContentSection>
            </div>
        );
    }
}

export default withRouter(ErrorView);
