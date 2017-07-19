import React, { Component } from "react";
import { Helmet } from "react-helmet";

// Database
import database from "../data/news";

// Layouts
import ContentSection from "../layouts/ContentSection";

// Components
import Breadcrumb from "../components/Breadcrumb";
import Grid, { Col } from "../components/Grid";
import NewsCard from "../components/NewsCard";
import ShareBar from "../components/ShareBar";
import Line from "../components/Line";

export default class NewsView extends Component {
    render() {
        return (
            <div data-view="NewsView">
                <Helmet>
                    <title>Strongline - News</title>
                </Helmet>
                <Breadcrumb
                    links={[
                        {
                            href: "/",
                            text: "Strongline"
                        },
                        {
                            text: "News"
                        }
                    ]}
                />
                <ContentSection>
                    <Grid>
                        <Col phone={12} tablet={12} desktop={12}>
                            <h2>
                                Aktuelle News <small>({database.recent.length})</small>
                            </h2>
                        </Col>
                        {database.recent.map((data, index) => {
                            return (
                                <Col phone={12} tablet={4} desktop={3} key={index}>
                                    <NewsCard title={data.title} text={data.text} />
                                </Col>
                            );
                        })}
                    </Grid>
                    <Grid>
                        <Col phone={12} tablet={12} desktop={12}>
                            <h2>
                                Ältere news <small>({database.old.length})</small>
                            </h2>
                        </Col>
                        {database.old.map((data, index) => {
                            return (
                                <Col phone={12} tablet={4} desktop={2} key={index}>
                                    <NewsCard
                                        modifier="small"
                                        title={data.title}
                                        text={data.text}
                                    />
                                </Col>
                            );
                        })}
                    </Grid>
                </ContentSection>
                <ShareBar title="Werde Teil der Strongline Community" />
                <Line color="#ec6248" height={3} />
            </div>
        );
    }
}
