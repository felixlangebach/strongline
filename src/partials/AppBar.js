import React from "react";
import { Link } from "react-router-dom";

// Components
import Image from "../components/Image";

// Styles
import "./AppBar.css";

const AppBar = () =>
    <div className="mdl-app-bar-logo">
        <Link to="/">
            <Image src="logo_finish_white.png" alt="Logo" />
        </Link>
    </div>;

export default AppBar;
