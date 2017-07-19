import React, { Component } from "react";
import { Helmet } from "react-helmet";

// Typing animation library
import Typist from "react-typist";
import typistConfig from "../data/typistConfig";

// Layouts
import ContentSection from "../layouts/ContentSection";

// Components
import Breadcrumb from "../components/Breadcrumb";
import Grid, { Col } from "../components/Grid";
import Form, { Input, Textarea } from "../components/Form";
import Button from "../components/Button";
import MaterialIcon from "../components/MaterialIcon";

// Styles
import "./Contact.css";

export default class ContactView extends Component {
    render() {
        return (
            <div data-view="ContactView">
                <Helmet>
                    <title>Strongline - Kontakt</title>
                </Helmet>
                <Breadcrumb
                    links={[
                        {
                            href: "/",
                            text: "Strongline"
                        },
                        {
                            text: "Kontakt"
                        }
                    ]}
                />
                <ContentSection>
                    <Grid>
                        <Col phone={12} tablet={12} desktop={12}>
                            <h2>
                                {/* Animation happening in Typist component */}
                                <Typist {...typistConfig}>Kontaktieren Sie uns</Typist>
                            </h2>
                        </Col>
                        <Col phone={12} tablet={6} desktop={6}>
                            <Form action="#contact" submitText="Absenden">
                                <Input id="mail" type="email" placeholder="E-Mail" />
                                <Input id="alter" type="number" placeholder="Alter" />
                                <Input id="name" type="text" placeholder="Vorname Nachname" />
                                <Input
                                    id="subject"
                                    type="text"
                                    placeholder="Ihr Kontaktierungsgrund"
                                />
                                <Textarea
                                    id="message"
                                    placeholder="Ihre Nachricht (max. 255 Zeichen)"
                                />
                            </Form>
                        </Col>
                        <Col phone={12} tablet={6} desktop={6}>
                            <Grid spacing={false}>
                                <Col phone={12} tablet={12} desktop={12}>
                                    <h6 className="mdl-cell--hide-desktop">
                                        Alternative Kontaktmöglichkeiten
                                    </h6>
                                    <a className="contact-button" href="tel:0041000000000">
                                        <Button>
                                            <MaterialIcon name="call" /> Anrufen
                                        </Button>
                                    </a>
                                </Col>
                                <Col phone={12} tablet={12} desktop={12}>
                                    <a
                                        className="contact-button"
                                        href="mailto:contact@strongline.ch"
                                    >
                                        <Button>
                                            <MaterialIcon name="email" /> E-Mail senden
                                        </Button>
                                    </a>
                                </Col>
                                <Col phone={12} tablet={12} desktop={12}>
                                    <a className="contact-button" href="#chat-now">
                                        <Button>
                                            <MaterialIcon name="chat bubble" /> Jetzt Chat starten
                                        </Button>
                                    </a>
                                </Col>
                            </Grid>
                        </Col>
                    </Grid>
                </ContentSection>
            </div>
        );
    }
}
