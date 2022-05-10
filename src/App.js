import React from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import RoutesList from "./routes/RoutesList";

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
                    <Header />
                    <RoutesList />
                </ThemeProvider>
            </BrowserRouter>
        </>
    );
};
export default App;
