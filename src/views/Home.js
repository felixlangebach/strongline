import React, { Component } from "react";
import { Link } from "react-router-dom";
import database from "../data/events";
import Icon from "../components/Icon";
import Button from "../components/Button";
import Image from "../components/Image";
import Form, { ExpandableInput } from "../components/Form";
import Line from "../components/Line";
// import Card from "../components/Card";
import CardPackage from "../components/CardPackage";
import EventCard from "../components/EventCard";
import BackgroundImage from "../components/BackgroundImage";
import ContentSection from "../layouts/ContentSection";
import { Switch } from "../components/Form";
import Grid, { Col, ContentWrapper as ColContent } from "../components/Grid";

import "./Home.css";

const currency = {
    chf: "CHF",
    eur: "EUR"
};

const packagePrices = {
    [currency.chf]: {
        bronze: 799.99,
        silver: 999.99,
        gold: 1249.99
    },
    [currency.eur]: {
        bronze: 599.99,
        silver: 899.99,
        gold: 949.99
    }
};

export default class HomeView extends Component {
    state = {
        currency: currency.chf
    };

    changeCurrency() {
        this.setState({
            currency: this.state.currency === currency.chf ? currency.eur : currency.chf
        });
    }

    render() {
        return (
            <div data-view="HomeView">
                <BackgroundImage src="stage/pexels-photo-260409.jpeg" size={700} />
                <Line color="#ec6248" height={5} />
                <ContentSection modifier="spaced-title">
                    <Grid>
                        <Col phone={12} tablet={12} desktop={12} key="title">
                            <h2>
                                Aktuelle Angebote <small>({database.length} verfügbar)</small>
                            </h2>
                        </Col>
                        {database.splice(0, 3).map((data, index) => {
                            return (
                                <Col phone={12} tablet={4} desktop={4} key={index}>
                                    <EventCard
                                        title={data.title}
                                        time={data.time}
                                        date={data.date}
                                    />
                                </Col>
                            );
                        })}
                        <Col phone={12} tablet={12} desktop={12} key="show-all">
                            <Link to="/angebote">
                                <Button>
                                    <Icon name="link" /> Alle Angebote anzeigen
                                </Button>
                            </Link>
                        </Col>
                    </Grid>
                </ContentSection>
                <Grid spacing={false}>
                    <Col phone={12} tablet={6} desktop={6} key="image">
                        <Image src="stage/pexels-photo-260409.jpeg" alt="Side Image" />
                    </Col>
                    <Col phone={12} tablet={6} desktop={6} key="text">
                        <ColContent>
                            <h3>Some title</h3>
                            <p>Lorem Ipsum Dolor</p>
                        </ColContent>
                    </Col>
                </Grid>
                <div className="home-section home-section-red">
                    <ContentSection modifier="spaced-inner">
                        <Grid>
                            <Col phone={12} tablet={8} desktop={6}>
                                <h5>Some Title here</h5>
                                <p>
                                    Lorem Ipsum dolor sit amet ... Lorem Ipsum dolor sit amet ...
                                    Lorem Ipsum dolor sit amet ... Lorem Ipsum dolor sit amet ...
                                    Lorem Ipsum dolor sit amet ... Lorem Ipsum dolor sit amet ...
                                    Lorem Ipsum dolor sit amet ... Lorem Ipsum dolor sit amet ...
                                    Lorem Ipsum dolor sit amet ... Lorem Ipsum dolor sit amet ...
                                </p>
                                <p>
                                    Lorem Ipsum dolor sit amet ... Lorem Ipsum dolor sit amet ...
                                    Lorem Ipsum dolor sit amet ... Lorem Ipsum dolor sit amet ...
                                    Lorem Ipsum dolor sit amet ... Lorem Ipsum dolor sit amet ...
                                    Lorem Ipsum dolor sit amet ... Lorem Ipsum dolor sit amet ...
                                    Lorem Ipsum dolor sit amet ... Lorem Ipsum dolor sit amet ...
                                </p>
                            </Col>
                            <Col phone={12} tablet={8} desktop={6}>
                                <h5>Some Title here</h5>
                                <p>
                                    Lorem Ipsum dolor sit amet ... Lorem Ipsum dolor sit amet ...
                                    Lorem Ipsum dolor sit amet ... Lorem Ipsum dolor sit amet ...
                                    Lorem Ipsum dolor sit amet ... Lorem Ipsum dolor sit amet ...
                                    Lorem Ipsum dolor sit amet ... Lorem Ipsum dolor sit amet ...
                                    Lorem Ipsum dolor sit amet ... Lorem Ipsum dolor sit amet ...
                                </p>
                                <p>
                                    Lorem Ipsum dolor sit amet ... Lorem Ipsum dolor sit amet ...
                                    Lorem Ipsum dolor sit amet ... Lorem Ipsum dolor sit amet ...
                                    Lorem Ipsum dolor sit amet ... Lorem Ipsum dolor sit amet ...
                                    Lorem Ipsum dolor sit amet ... Lorem Ipsum dolor sit amet ...
                                    Lorem Ipsum dolor sit amet ... Lorem Ipsum dolor sit amet ...
                                </p>
                            </Col>
                        </Grid>
                    </ContentSection>
                </div>
                <Grid spacing={false}>
                    <Col phone={12} tablet={6} desktop={6} key="text">
                        <ColContent align="right">
                            <h3>Some title</h3>
                            <p>Lorem Ipsum Dolor</p>
                        </ColContent>
                    </Col>
                    <Col phone={12} tablet={6} desktop={6} key="image">
                        <Image src="stage/pexels-photo-260409.jpeg" alt="Side Image" />
                    </Col>
                </Grid>
                <Line color="#ec6248" height={5} />
                <div className="home-section home-section-grey">
                    <ContentSection modifier="spaced-inner" align="center">
                        <Grid>
                            <Col phone={12} tablet={12} desktop={12} key="title">
                                <h3>Wähle dein Paket aus</h3>
                                <p className="card-package-intro-text">
                                    Mithilfe unserer Pakete verhelfen wir dir zu deinem
                                    individuellen Ziel. Kontaktieren Sie uns jetzt in Ihrem nächsten
                                    Stronglife Zentrum und lösen Sie ihr eigenes Paket.
                                </p>
                                <p className="card-package-currency-switch">
                                    {" "}Währung umschalten{" "}
                                    {this.state.currency === currency.chf
                                        ? <strong>Schweizer Franken</strong>
                                        : "Schweizer Franken"}{" "}
                                    /{" "}
                                    {this.state.currency === currency.eur
                                        ? <strong>Euro</strong>
                                        : "Euro"}
                                    <Switch
                                        delegate={this.changeCurrency.bind(this)}
                                        id="currency-change"
                                    />
                                </p>
                            </Col>
                            <Col phone={12} tablet={6} desktop={4} key="package-1">
                                <CardPackage
                                    title="Bronze"
                                    price={packagePrices[this.state.currency].bronze}
                                    items={["Cardio", "Wellness"]}
                                    button={{ link: "#package-1", text: "Jetzt bestellen" }}
                                    icon="fitness center"
                                    theme="bronze"
                                    currency={this.state.currency}
                                />
                            </Col>
                            <Col phone={12} tablet={6} desktop={4} key="package-2">
                                <CardPackage
                                    title="Silver"
                                    price={packagePrices[this.state.currency].silver}
                                    items={["Cardio", "Wellness"]}
                                    button={{ link: "#package-2", text: "Jetzt bestellen" }}
                                    icon="fitness center"
                                    theme="silver"
                                    currency={this.state.currency}
                                />
                            </Col>
                            <Col phone={12} tablet={6} desktop={4} key="package-3">
                                <CardPackage
                                    title="Gold"
                                    price={packagePrices[this.state.currency].gold}
                                    items={["Cardio", "Wellness"]}
                                    button={{ link: "#package-3", text: "Jetzt bestellen" }}
                                    icon="fitness center"
                                    theme="gold"
                                    currency={this.state.currency}
                                />
                            </Col>
                        </Grid>
                    </ContentSection>
                </div>
                <div className="home-section home-section-light-grey">
                    <ContentSection modifier="spaced-inner" align="center">
                        <h3>Newsletter</h3>
                        <p className="newsletter-sign-up-text">
                            Melden Sie sich jetzt für unsere Newsletter an!
                        </p>
                        <Form action="#newsletter-sign-up" showSubmitButton={false}>
                            <ExpandableInput
                                type="mail"
                                icon="mail outline"
                                id="newsletter"
                                placeholder="Newsletter Anmeldung"
                                inputPlaceholder="max@mustermann.de"
                            />
                        </Form>
                    </ContentSection>
                </div>
                <Line color="#ec6248" height={5} />
            </div>
        );
    }
}
