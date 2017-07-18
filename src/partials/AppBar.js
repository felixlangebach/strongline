import React from "react";
import Image from "../components/Image";

import "./AppBar.css";

const AppBar = () =>
    <div className="mdl-app-bar-logo">
        <Image src="logo_strongline.svg" alt="Logo" />
    </div>;

export default AppBar;
