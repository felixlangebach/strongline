import React, { Component } from "react";

export default class List extends Component {
    renderListItems() {
        const items = [];

        this.props.items.forEach((person, index) => {
            items.push(
                <li key={index} className="mdl-list__item">
                    <span className="mdl-list__item-primary-content">
                        <i className="material-icons mdl-list__item-icon">person</i>
                        {person}
                    </span>
                </li>
            );
        });

        return items;
    }
    render() {
        return (
            <ul className="demo-list-icon mdl-list">
                {this.renderListItems()}
            </ul>
        );
    }
}
