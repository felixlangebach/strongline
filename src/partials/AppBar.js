import React from "react";
import Image from "../components/Image";

import "./AppBar.css";

export default () =>
    <div className="mdl-cell--hide-desktop">
        <div className="mdl-app-bar-logo">
            <Image src="logo_strongline.svg" alt="Logo" />
        </div>
    </div>;
