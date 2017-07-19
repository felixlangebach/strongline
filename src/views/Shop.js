import React, { Component } from "react";
import { Link } from "react-router-dom";
import Typist from "react-typist";
import typistConfig from "../data/typistConfig";

// Layouts
import ContentSection from "../layouts/ContentSection";

// Components
import Grid, { Col } from "../components/Grid";
import Breadcrumb from "../components/Breadcrumb";

export default class ShopView extends Component {
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
                            text: "Online Shop"
                        }
                    ]}
                />
                <ContentSection modifier="space" width="small">
                    <Grid>
                        <Col phone={12} tablet={12} desktop={12}>
                            <h3>Unser Shop eröffnet in kürze ...</h3>
                        </Col>
                        <Col phone={12} tablet={10} desktop={8}>
                            <p>
                                Besuchen Sie diese Seite später wieder, stöbern Sie doch in dieser
                                Zeit in unseren <Link to="/angebote">Angeboten</Link> oder besuchen
                                Sie eines unseren vielen <Link to="/standorte">Standorte</Link> in
                                der Schweiz. Besten Dank für Ihre Geduld.
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
