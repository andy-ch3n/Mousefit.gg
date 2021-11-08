import ExamplePage from './components/ExamplePage.jsx'
import React, { useReducer, useState, useEffect } from "react";
import { ThemeProvider } from "@mui/material/styles";
import Theme from "./Theme/ThemeFile.js"
import { CssBaseline, Typography, GlobalStyles, Container, Box}from "@mui/material/";




function App() {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <div className="App">
          <ExamplePage />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
