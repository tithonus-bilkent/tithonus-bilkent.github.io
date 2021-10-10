import React from "react";
import MainRouter from "../../router/MainRoute";
import { createTheme, ThemeProvider } from "@mui/material";
import Header from "../../components/Header";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});
const Home = () => {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <div className="at-background-bg" />
        <Header />
        <MainRouter />
      </ThemeProvider>
    </>
  );
};

export default Home;
