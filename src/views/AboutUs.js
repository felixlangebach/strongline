import React, { Component } from "react";
import { Link } from "react-router-dom";
import Typist from "react-typist";
import typistConfig from "../data/typistConfig";
import Button from "../components/Button";
import MaterialIcon from "../components/MaterialIcon";
import Grid, { Col } from "../components/Grid";
import Breadcrumb from "../components/Breadcrumb";
import ContentSection from "../layouts/ContentSection";

export default class AboutUsView extends Component {
    render() {
        return (
            <div data-view="AboutUsView">
                <Breadcrumb
                    links={[
                        {
                            href: "/",
                            text: "Strongline"
                        },
                        {
                            text: "Über uns"
                        }
                    ]}
                />
                <ContentSection>
                    <Grid>
                        <Col phone={12} tablet={12} desktop={12}>
                            <h2>
                                <Typist {...typistConfig}>Über uns</Typist>
                            </h2>
                        </Col>
                        <Col phone={12} tablet={4} desktop={4}>
                            <p>
                                Leverage agile frameworks to provide a robust synopsis for high
                                level overviews. Iterative approaches to corporate strategy foster
                                collaborative thinking to further the overall value proposition.
                                Organically grow the holistic world view of disruptive innovation
                                via workplace diversity and empowerment.
                            </p>
                            <p>
                                Bring to the table win-win survival strategies to ensure proactive
                                domination. At the end of the day, going forward, a new normal that
                                has evolved from generation X is on the runway heading towards a
                                streamlined cloud solution. User generated content in real-time will
                                have multiple touchpoints for offshoring.
                            </p>
                            <p>
                                Capitalize on low hanging fruit to identify a ballpark value added
                                activity to beta test. Override the digital divide with additional
                                clickthroughs from DevOps. Nanotechnology immersion along the
                                information highway will close the loop on focusing solely on the
                                bottom line.
                            </p>
                        </Col>
                        <Col phone={12} tablet={4} desktop={4}>
                            <p>
                                Leverage agile frameworks to provide a robust synopsis for high
                                level overviews. Iterative approaches to corporate strategy foster
                                collaborative thinking to further the overall value proposition.
                                Organically grow the holistic world view of disruptive innovation
                                via workplace diversity and empowerment.
                            </p>
                            <p>
                                Bring to the table win-win survival strategies to ensure proactive
                                domination. At the end of the day, going forward, a new normal that
                                has evolved from generation X is on the runway heading towards a
                                streamlined cloud solution. User generated content in real-time will
                                have multiple touchpoints for offshoring.
                            </p>
                            <p>
                                Capitalize on low hanging fruit to identify a ballpark value added
                                activity to beta test. Override the digital divide with additional
                                clickthroughs from DevOps. Nanotechnology immersion along the
                                information highway will close the loop on focusing solely on the
                                bottom line.
                            </p>
                        </Col>
                        <Col phone={12} tablet={4} desktop={4}>
                            <p>
                                Leverage agile frameworks to provide a robust synopsis for high
                                level overviews. Iterative approaches to corporate strategy foster
                                collaborative thinking to further the overall value proposition.
                                Organically grow the holistic world view of disruptive innovation
                                via workplace diversity and empowerment.
                            </p>
                            <p>
                                Bring to the table win-win survival strategies to ensure proactive
                                domination. At the end of the day, going forward, a new normal that
                                has evolved from generation X is on the runway heading towards a
                                streamlined cloud solution. User generated content in real-time will
                                have multiple touchpoints for offshoring.
                            </p>
                            <p>
                                Capitalize on low hanging fruit to identify a ballpark value added
                                activity to beta test. Override the digital divide with additional
                                clickthroughs from DevOps. Nanotechnology immersion along the
                                information highway will close the loop on focusing solely on the
                                bottom line.
                            </p>
                        </Col>
                    </Grid>
                    <Grid>
                        <Col phone={12} tablet={12} desktop={12} key="show-all">
                            <Link to="/ueber-uns/mitarbeiter">
                                <Button>
                                    <MaterialIcon name="link" /> Unsere Mitarbeiter
                                </Button>
                            </Link>
                        </Col>
                    </Grid>
                </ContentSection>
            </div>
        );
    }
}
