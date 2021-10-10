import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import Landing from "../../pages/Landing";
import Reports from "../../pages/Reports";
const MainRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={Landing}></Route>
      <Route
        exact
        path="/raporlar"
        render={(props) => <Reports {...props} authed={true} />}
      ></Route>
    </Switch>
  );
};

export default withRouter(MainRouter);
