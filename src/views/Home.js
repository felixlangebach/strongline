import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

// Database
import database from "../data/events";

// Layouts
import ContentSection from "../layouts/ContentSection";

// Components
import MaterialIcon from "../components/MaterialIcon";
import Button from "../components/Button";
import Newsletter from "../components/Newsletter";
import Image from "../components/Image";
import CardPackage from "../components/CardPackage";
import EventCard from "../components/EventCard";
import BackgroundImage from "../components/BackgroundImage";
import ShareBar from "../components/ShareBar";
import Line from "../components/Line";
import { Switch } from "../components/Form";
import Grid, { Col, ContentWrapper as ColContent } from "../components/Grid";

// Styles
import "./Home.css";

// Currency calculator data
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
        // Default currency is CHF
        currency: currency.chf
    };

    // When user changes currency recalculate and rerender
    changeCurrency() {
        this.setState({
            currency: this.state.currency === currency.chf ? currency.eur : currency.chf
        });
    }

    render() {
        return (
            <div data-view="HomeView">
                <Helmet>
                    <title>Strongline - Herzlich Willkommen</title>
                </Helmet>
                <BackgroundImage src="stage/pexels-photo-260409.jpeg" size={700} />
                <Line color="#ec6248" height={5} />
                <ContentSection modifier="spaced-title">
                    <Grid>
                        <Col phone={12} tablet={12} desktop={12} key="title">
                            <h2>
                                Aktuelle Angebote <small>({database.length} verfügbar)</small>
                            </h2>
                        </Col>
                        {database.slice(0, 3).map((data, index) => {
                            return (
                                <Col phone={12} tablet={4} desktop={4} key={index}>
                                    <EventCard title={data.title} time={data.time} date={data.date} />
                                </Col>
                            );
                        })}
                        <Col phone={12} tablet={12} desktop={12} key="show-all">
                            <Link to="/angebote">
                                <Button>
                                    <MaterialIcon name="link" /> Alle Angebote anzeigen
                                </Button>
                            </Link>
                        </Col>
                    </Grid>
                </ContentSection>
                <Grid spacing={false}>
                    <Col modifier="fill-image" phone={12} tablet={12} desktop={6} key="image">
                        <Image src="stage/pexels-photo-442496.jpeg" alt="Side Image" />
                    </Col>
                    <Col phone={12} tablet={12} desktop={6} key="text">
                        <ColContent>
                            <h3>In Ihr neues Leben starten</h3>
                            <p>
                                The hope of a skinny kid with a funny name who believes that America has a place for
                                him, too. Threatening Israel with destruction - or repeating vile stereotypes about Jews
                                - is deeply wrong, and only serves to evoke in the minds of Israelis this most painful
                                of memories while preventing the peace that the people of this region deserve.
                            </p>
                            <p>
                                But this much is clear: governments that protect these rights are ultimately more
                                stable, successful and secure. But it should be their choice.
                            </p>
                            <p>
                                So let's rededicate ourselves to a new kind of politics - a politics of conscience. I
                                would not be running for President if I didn't believe with all my heart that this is
                                what the vast majority of Americans want for this country. Many bring up a specific
                                issue.
                            </p>
                        </ColContent>
                    </Col>
                </Grid>
                <div className="home-section home-section-red">
                    <ContentSection modifier="spaced-inner">
                        <Grid>
                            <Col phone={12} tablet={8} desktop={6}>
                                <h5>Wir heissen Sie herzlich Willkommen!</h5>
                                <p>
                                    That we can tuck in our children at night and know that they are fed and clothed and
                                    safe from harm. It's a journey that takes us back to our nation's founding, when
                                    none other than a UCC church inspired the Boston Tea Party and helped bring an
                                    Empire to its knees. "People began to shout, to rise from their seats and clap and
                                    cry out, a forceful wind carrying the reverend's voice up into the rafters....And in
                                    that single note - hope! - I heard something else; at the foot of that cross, inside
                                    the thousands of churches across the city, I imagined the stories of ordinary black
                                    people merging with the stories of David and Goliath, Moses and Pharaoh, the
                                    Christians in the lion's den, Ezekiel's field of dry bones. And nothing will change.
                                    These challenges are not all of government's making. I know there is debate about
                                    this issue.
                                </p>
                                <p>
                                    I'd been inspired by the civil rights movement - by all the clear-eyed,
                                    straight-backed, courageous young people who'd boarded buses and traveled down South
                                    to march and sit at lunch counters, and lay down their lives in some cases for
                                    freedom. And it puts the lie to the notion that the separation of church and state
                                    in America means faith should have no role in public life. Two hundred and twenty
                                    one years ago, in a hall that still stands across the street, a group of men
                                    gathered and, with these simple words, launched America's improbable experiment in
                                    democracy. You understand that in this election, the greatest risk we can take is to
                                    try the same old politics with the same old players and expect a different result.
                                </p>
                            </Col>
                            <Col phone={12} tablet={8} desktop={6}>
                                <h5>Weitere Informationen zu Strongline</h5>
                                <p>
                                    Religious leaders like my friends Rev. Jim Wallis and Rabbi David Saperstein and
                                    Nathan Diament are working for justice and fighting for change. Consensus and
                                    compromise will not come easy. And the lack of basic services in so many urban black
                                    neighborhoods - parks for kids to play in, police walking the beat, regular garbage
                                    pick-up and building code enforcement - all helped create a cycle of violence,
                                    blight and neglect that continue to haunt us. But it is where we start. That's the
                                    change we need right now.
                                </p>
                                <p>
                                    God is still speaking. We may not agree on abortion, but surely we can agree on
                                    reducing the number of unwanted pregnancies in this country. A belief that there are
                                    better days ahead. And because she had to miss days of work, she was let go and lost
                                    her health care.
                                </p>
                                <p>
                                    But somehow, somewhere along the way, faith stopped being used to bring us together
                                    and started being used to drive us apart. Hamas does have support among some
                                    Palestinians, but they also have responsibilities.
                                </p>
                            </Col>
                        </Grid>
                    </ContentSection>
                </div>
                <Grid spacing={false}>
                    <Col phone={12} tablet={12} desktop={6} key="text">
                        <ColContent align="right">
                            <h3>Mit Kampfsport den Weg zum inneren Selbst neu entdecken</h3>
                            <p>
                                At every opportunity, they've told evangelical Christians that Democrats disrespect
                                their values and dislike their Church, while suggesting to the rest of the country that
                                religious Americans care only about issues like abortion and gay marriage; school prayer
                                and intelligent design. In the end, then, what is called for is nothing more, and
                                nothing less, than what all the world's great religions demand - that we do unto others
                                as we would have them do unto us. The issues that I have described will not be easy to
                                address.
                            </p>

                            <p>
                                My mother, whose parents were non-practicing Baptists and Methodists, was one of the
                                most spiritual souls I ever knew. In my first book, Dreams From My Father, I described
                                the experience of my first service at Trinity: That is true genius of this nation. And
                                then another one.
                            </p>

                            <p>
                                If you're working forty hours a week, you shouldn't be living in poverty. I know there
                                are those who dismiss such beliefs as happy talk. We have the power to make the world we
                                seek, but only if we have the courage to make a new beginning, keeping in mind what has
                                been written.
                            </p>
                        </ColContent>
                    </Col>
                    <Col modifier="fill-image" phone={12} tablet={12} desktop={6} key="image">
                        <Image src="stage/pexels-photo-260447.jpeg" alt="Side Image" />
                    </Col>
                </Grid>
                <Line color="#ec6248" height={5} />
                <div className="home-section home-section-grey">
                    <ContentSection modifier="spaced-inner" align="center">
                        <Grid>
                            <Col phone={12} tablet={12} desktop={12} key="title">
                                <h3>Wähle dein Paket aus</h3>
                                <p className="card-package-intro-text">
                                    Mithilfe unserer Pakete verhelfen wir dir zu deinem individuellen Ziel. Kontaktieren
                                    Sie uns jetzt in Ihrem nächsten Stronglife Zentrum und lösen Sie ihr eigenes Paket.
                                </p>
                                <p className="card-package-currency-switch">
                                    {" "}Währung umschalten{" "}
                                    {this.state.currency === currency.chf
                                        ? <strong>Schweizer Franken</strong>
                                        : "Schweizer Franken"}{" "}
                                    / {this.state.currency === currency.eur ? <strong>Euro</strong> : "Euro"}
                                    <Switch delegate={this.changeCurrency.bind(this)} id="currency-change" />
                                </p>
                            </Col>
                            <Col phone={12} tablet={12} desktop={4} key="package-1">
                                <CardPackage
                                    title="Bronze"
                                    price={packagePrices[this.state.currency].bronze}
                                    items={["Cardio", "Kraft", "Freie Getränke", "Kurse"]}
                                    button={{ link: "#package-1", text: "Jetzt bestellen" }}
                                    icon="fitness center"
                                    theme="bronze"
                                    currency={this.state.currency}
                                />
                            </Col>
                            <Col phone={12} tablet={12} desktop={4} key="package-2">
                                <CardPackage
                                    title="Silver"
                                    price={packagePrices[this.state.currency].silver}
                                    items={["Cardio", "Kraft", "Freie Getränke", "Kurse", "Wellness"]}
                                    button={{ link: "#package-2", text: "Jetzt bestellen" }}
                                    icon="fitness center"
                                    theme="silver"
                                    currency={this.state.currency}
                                />
                            </Col>
                            <Col phone={12} tablet={12} desktop={4} key="package-3">
                                <CardPackage
                                    title="Gold"
                                    price={packagePrices[this.state.currency].gold}
                                    items={[
                                        "Cardio",
                                        "Kraft",
                                        "Freie Getränke",
                                        "Kurse",
                                        "Wellness",
                                        "8h Personalcoach"
                                    ]}
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
                    <Newsletter
                        title="Newsletter"
                        text="Melden Sie sich jetzt für unsere Newsletter an!"
                        inputPlaceholder="max@mustermann.de"
                        placeholder="E-Mail"
                    />
                </div>
                <Line color="#ec6248" height={5} />
                <ShareBar title="Werde Teil der Strongline Community" />
                <Line color="#ec6248" height={3} />
            </div>
        );
    }
}
