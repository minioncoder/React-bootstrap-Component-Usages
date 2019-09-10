import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import Accordions from "./Accordion/AccordionCard";
import Home from "./Home";
import history from './history';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route path="/accordion" component={Accordions} />
                </Switch>
            </Router>
        )
    }
}
