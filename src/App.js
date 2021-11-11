import React, { useReducer, useState, useEffect } from "react";
import { ThemeProvider } from "@mui/material/styles";
import Theme from "./Theme/ThemeFile.js"
import { CssBaseline, Typography, GlobalStyles, Container, Box } from "@mui/material/";
import QuizButton from './components/QuizButton.jsx'
import { ReactTinyLink } from 'react-tiny-link'

function App() {
  return (
    <>
      <ThemeProvider theme={Theme}>
          <div className="App" >
            <QuizButton />
          </div>
          <div id='stars'></div>
          <div id='stars2'></div>
          <div id='stars3'></div>
      </ThemeProvider>
    </>
  );
}

export default App;
