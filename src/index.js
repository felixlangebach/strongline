import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, Switch } from "react-router";

// Middleware utility
import registerServiceWorker from "./registerServiceWorker";
import createHistory from "history/createBrowserHistory";

// Global Templates
import StronglineTemplate from "./templates/Strongline";

// Individual Views
import ErrorView from "./views/Error";
import HomeView from "./views/Home";
import LocationView from "./views/Location";
import LocationsView from "./views/Locations";
import LocationsFilterView from "./views/LocationsFilter";
import ShopView from "./views/Shop";
import PhilosophyView from "./views/Philosophy";
import OffersView from "./views/Offers";
import NewsView from "./views/News";
import EmployeesView from "./views/Employees";
import AboutUsView from "./views/AboutUs";
import ContactView from "./views/Contact";
import TrendignCollectionView from "./views/TrendingCollection";

const History = createHistory();

ReactDOM.render(
    <Router history={History}>
        <StronglineTemplate>
            <Switch>
                <Route exact path="/" component={HomeView} />
                <Route exact path="/standorte" component={LocationsView} />
                <Route exact path="/standorte/:region" component={LocationsFilterView} />
                <Route exact path="/standorte/:location/:id" component={LocationView} />
                <Route exact path="/ueber-uns" component={AboutUsView} />
                <Route exact path="/ueber-uns/philosophie" component={PhilosophyView} />
                <Route exact path="/ueber-uns/mitarbeiter" component={EmployeesView} />
                <Route exact path="/angebote" component={OffersView} />
                <Route
                    exact
                    path="/angebote/kollektion-der-woche"
                    component={TrendignCollectionView}
                />
                <Route exact path="/kontakt" component={ContactView} />
                <Route exact path="/news" component={NewsView} />
                <Route exact path="/shop" component={ShopView} />
                <Route component={ErrorView} />
            </Switch>
        </StronglineTemplate>
    </Router>,
    document.getElementById("root")
);

registerServiceWorker();
