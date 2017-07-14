import React from "react";
import ReactDOM from "react-dom";
import { Router, Route } from "react-router";

// Middleware utility
import registerServiceWorker from "./registerServiceWorker";
import createHistory from "history/createBrowserHistory";

// Global Templates
import StronglineTemplate from "./templates/Strongline";

// Individual Views
import HomeView from "./views/Home";
import LocationsView from "./views/Locations";
import ShopView from "./views/Shop";
import PhilosophyView from "./views/Philosophy";
import OffersView from "./views/Offers";
import NewsView from "./views/News";
import EmployeesView from "./views/Employees";
import AboutUsView from "./views/AboutUs";
import TrendignCollectionView from "./views/TrendingCollection";

const History = createHistory();

ReactDOM.render(
    <Router history={History}>
        <StronglineTemplate>
            <Route path="/" component={HomeView} />
            <Route path="/standorte" component={LocationsView} />
            <Route path="/ueber-uns" component={AboutUsView} />
            <Route path="/ueber-uns/philosophie" component={PhilosophyView} />
            <Route path="/ueber-uns/mitarbeiter" component={EmployeesView} />
            <Route path="/angebote" component={OffersView} />
            <Route path="/angebote/kollektion-der-woche" component={TrendignCollectionView} />
            <Route path="/news" component={NewsView} />
            <Route path="/shop" component={ShopView} />
        </StronglineTemplate>
    </Router>,
    document.getElementById("root")
);

registerServiceWorker();
