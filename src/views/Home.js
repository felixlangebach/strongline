import React, { Component } from "react";
import { Link } from "react-router-dom";
import database from "../data/events";
import Icon from "../components/Icon";
import Button from "../components/Button";
import Image from "../components/Image";
import Line from "../components/Line";
import EventCard from "../components/EventCard";
import BackgroundImage from "../components/BackgroundImage";
import ContentSection from "../layouts/ContentSection";
import Grid, { Col, ContentWrapper as ColContent } from "../components/Grid";

import "./Home.css";

export default class HomeView extends Component {
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
            </div>
        );
    }
}
