import React, { Component } from "react";

const GOOGLE_STATIC_MAP = "https://maps.googleapis.com/maps/api/staticmap";
const GOOGLE_API_KEY = "AIzaSyBQjZvPl5nGiKR7IR2IyhgER1xk3kH4SDI";
const GOOGLE_MAPS_SEARCH = "https://www.google.ch/maps/search/";

export default class Maps extends Component {
    render() {
        const { location, zoom = 10 } = this.props;

        return (
            <div className="maps">
                <img
                    src={`${GOOGLE_STATIC_MAP}?center=${location}&markers=${location}&zoom=${zoom}&path=enc:encoded_data&size=640x400&style=element:labels|visibility:off&style=element:geometry.stroke|visibility:off&style=feature:landscape|element:geometry|saturation:-100&style=feature:water|saturation:-100|invert_lightness:true&key=${GOOGLE_API_KEY}`}
                />
            </div>
        );
    }
}
