import React, { Component } from "react";
import { Link } from "react-router-dom";
import Grid, { Col } from "../components/Grid";
import "./Footer.css";

export default class Footer extends Component {
    render() {
        return (
            <footer className="mdl-custom-footer">
                <Grid spacing={false}>
                    <Col phone={12} tablet={12} desktop={12}>
                        2017 &copy; Stronglife Ltd.
                    </Col>
                </Grid>
            </footer>
        );
    }
}
