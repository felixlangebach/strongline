import React, { Component } from "react";
import { Link } from "react-router-dom";
import IonIcon from "../components/IonIcon";

import "./ShareBar.css";

export const SHARE_LINKS = {
    FACEBOOK: "https://facebook.com/strongline",
    TWITTER: "https://twitter.com/strongline",
    INSTAGRAM: "https://instagram.com/strongline",
    G_PLUS: "https://plus.google.com/strongline"
};

export const ShareButton = ({ className, icon, url }) => {
    return (
        <a className={className} href={url} target="_blank" rel="nofollow">
            <IonIcon name={icon} />
        </a>
    );
};

const ShareBar = ({ title, facebook = true, twitter = true, instagram = true, gplus = true }) => {
    return (
        <div className="share-bar">
            {title &&
                <h4>
                    {title}
                </h4>}
            <ShareButton
                className="share-bar__link"
                icon="social-facebook"
                url={SHARE_LINKS.FACEBOOK}
            />
            <ShareButton
                className="share-bar__link"
                icon="social-twitter"
                url={SHARE_LINKS.FACEBOOK}
            />
            <ShareButton
                className="share-bar__link"
                icon="social-instagram"
                url={SHARE_LINKS.FACEBOOK}
            />
            <ShareButton
                className="share-bar__link"
                icon="social-googleplus"
                url={SHARE_LINKS.G_PLUS}
            />
        </div>
    );
};

export default ShareBar;
