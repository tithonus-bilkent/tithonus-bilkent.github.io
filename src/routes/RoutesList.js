import { Route, Switch } from "react-router-dom";
import React from "react";
import Landing from "../pages/Landing/Landing";
import Poster from "../pages/Poster/Poster";
import Reports from "../pages/Reports/Reports";
import { Routes } from "./Routes";

const RoutesList = () => {
    return (
        <Switch>
            <Route
                exact
                path={Routes.Home}
                component={(props) => <Landing {...props} />}
            ></Route>
            <Route
                exact
                path={Routes.Reports}
                render={(props) => <Reports {...props} authed={true} />}
            />
            <Route
                exact
                path={Routes.Poster}
                render={(props) => <Poster {...props} authed={true} />}
            />
        </Switch>
    );
};
export default RoutesList;
