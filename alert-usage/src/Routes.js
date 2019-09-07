import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import Alerts from "./alerts/alerts"; 
import AlertsAPI from "./alerts/alertsAPI";
import AlertHeading from "./alerts/AlertHeading";
import AlertLink from "./alerts/AlertLink";
import HandleShow from "./alerts/handleAlertTransitions";
import Home from "./home/home";
import history from './history';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route path="/alerts" component={Alerts} />
                    <Route path="/alertsAPI" component={AlertsAPI} />
                    <Route path="/alertTransitions" component={HandleShow} />
                    <Route path="/alertHeading" component={AlertHeading} />
                    <Route path="/alertLink" component={AlertLink} />
                </Switch>
            </Router>
        )
    }
}
