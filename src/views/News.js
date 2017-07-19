import React, { Component } from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import Grid, { Col } from "../components/Grid";
import NewsCard from "../components/NewsCard";
import ContentSection from "../layouts/ContentSection";
import database from "../data/news";

export default class NewsView extends Component {
    render() {
        return (
            <div data-view="NewsView">
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
                                <Col phone={12} tablet={3} desktop={2} key={index}>
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
            </div>
        );
    }
}
