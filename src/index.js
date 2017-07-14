import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, Redirect, useRouterHistory } from "react-router";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import createHistory from "history/createBrowserHistory";

import StronglineTemplate from "./templates/Strongline";
import HomeView from "./views/Home";
import LocationsView from "./views/Locations";

const History = createHistory();

ReactDOM.render(
    <Router history={History}>
        <StronglineTemplate>
            <Route path="/start" component={HomeView} />
            <Route path="/standorte" component={LocationsView} />
        </StronglineTemplate>
    </Router>,
    document.getElementById("root")
);

registerServiceWorker();
