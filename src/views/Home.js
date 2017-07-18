import React, { Component } from "react";
import BackgroundImage from "../components/BackgroundImage";
import ContentSection from "../layouts/ContentSection";

export default class HomeView extends Component {
    render() {
        return (
            <div data-view="HomeView">
                <BackgroundImage src="stage/pexels-photo-260409.jpeg" size={500} />
            </div>
        );
    }
}
