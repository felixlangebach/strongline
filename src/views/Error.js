import React, { Component } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

class HomeView extends Component {
    render() {
        return (
            <div data-view="error">
                <h3>Error 404</h3>
                <p>
                    The view under <strong>{this.props.location.pathname}</strong> does not exist,
                    go back to <Link to="/">Home</Link>
                </p>
            </div>
        );
    }
}

export default withRouter(HomeView);
