import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Footer extends Component {
    render() {
        return (
            <footer className="mdl-mega-footer">
                <div className="mdl-mega-footer__middle-section">
                    <div className="mdl-mega-footer__drop-down-section">
                        <input
                            className="mdl-mega-footer__heading-checkbox"
                            type="checkbox"
                            checked
                        />
                        <h1 className="mdl-mega-footer__heading">Features</h1>
                        <ul className="mdl-mega-footer__link-list">
                            <li>
                                <Link to="#somewhere">About</Link>
                            </li>
                            <li>
                                <Link to="#somewhere">Terms</Link>
                            </li>
                            <li>
                                <Link to="#somewhere">Partners</Link>
                            </li>
                            <li>
                                <Link to="#somewhere">Updates</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="mdl-mega-footer__drop-down-section">
                        <input
                            className="mdl-mega-footer__heading-checkbox"
                            type="checkbox"
                            checked
                        />
                        <h1 className="mdl-mega-footer__heading">Details</h1>
                        <ul className="mdl-mega-footer__link-list">
                            <li>
                                <Link to="#somewhere">Specs</Link>
                            </li>
                            <li>
                                <Link to="#somewhere">Tools</Link>
                            </li>
                            <li>
                                <Link to="#somewhere">Resources</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="mdl-mega-footer__drop-down-section">
                        <input
                            className="mdl-mega-footer__heading-checkbox"
                            type="checkbox"
                            checked
                        />
                        <h1 className="mdl-mega-footer__heading">Technology</h1>
                        <ul className="mdl-mega-footer__link-list">
                            <li>
                                <Link to="#somewhere">How it works</Link>
                            </li>
                            <li>
                                <Link to="#somewhere">Patterns</Link>
                            </li>
                            <li>
                                <Link to="#somewhere">Usage</Link>
                            </li>
                            <li>
                                <Link to="#somewhere">Products</Link>
                            </li>
                            <li>
                                <Link to="#somewhere">Contracts</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="mdl-mega-footer__drop-down-section">
                        <input
                            className="mdl-mega-footer__heading-checkbox"
                            type="checkbox"
                            checked
                        />
                        <h1 className="mdl-mega-footer__heading">FAQ</h1>
                        <ul className="mdl-mega-footer__link-list">
                            <li>
                                <Link to="#somewhere">Questions</Link>
                            </li>
                            <li>
                                <Link to="#somewhere">Answers</Link>
                            </li>
                            <li>
                                <Link to="#somewhere">Contact us</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mdl-mega-footer__bottom-section">
                    <div className="mdl-logo">Strongline &copy; 2017 All rights reserved</div>
                    <ul className="mdl-mega-footer__link-list">
                        <li>
                            <Link to="#somewhere">Help</Link>
                        </li>
                        <li>
                            <Link to="#somewhere">Privacy &amp; Terms</Link>
                        </li>
                    </ul>
                </div>
            </footer>
        );
    }
}
