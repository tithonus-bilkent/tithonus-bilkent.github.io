import React from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Landing from "./pages/Landing/Landing";
import Reports from "./pages/Reports/Reports";
import "./App.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const App = () => {
  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={darkTheme}>
          <div className="at-background-bg" />
          <Header />
          <Switch>
            <Route exact path="/" component={Landing}></Route>
            <Route
              exact
              path="/reports"
              render={(props) => <Reports {...props} authed={true} />}
            />
          </Switch>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
};
export default App;
