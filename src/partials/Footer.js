import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Footer extends Component {
    render() {
        return (
            <footer className="mdl-mini-footer">
                <div className="mdl-mini-footer__left-section">
                    <div className="mdl-logo">Title</div>
                    <ul className="mdl-mini-footer__link-list">
                        <li>
                            <Link to="#help">Help</Link>
                        </li>
                        <li>
                            <Link to="#privacy">Privacy &amp; Terms</Link>
                        </li>
                    </ul>
                </div>
            </footer>
        );
    }
}
