import React from "react";
import IonIcon from "../components/IonIcon";

// Styles
import "./ShareBar.css";

// URL Configuration
export const SHARE_LINKS = {
    FACEBOOK: "https://facebook.com/strongline",
    TWITTER: "https://twitter.com/strongline",
    INSTAGRAM: "https://instagram.com/strongline",
    G_PLUS: "https://plus.google.com/strongline"
};

// Single Button
export const ShareButton = ({ className, icon, url }) => {
    return (
        <a className={className} href={url} target="_blank" rel="nofollow">
            <IonIcon name={icon} />
        </a>
    );
};

// Render 4 buttons for FB, Twitter, IG and GPlus
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
