// import ExamplePage from './components/ExamplePage.jsx'
import React from "react"
import { useSelector } from 'react-redux'
import { setName, getName } from './components/redux/state/firstNameSlice.js';
import { getClicked } from './components/redux/state/quizButtonClickedSlice.js'
import { ThemeProvider } from "@mui/material/styles"
import Box from '@mui/material/Box'
import Theme from "./Theme/ThemeFile.js"
import Header from "./components/Header.jsx"
import Mouse from "./components/Mouse.jsx"
import QuizButton from './components/QuizButton.jsx'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Footer from './components/Footer.jsx'
import ResultsPage from './components/ResultsPage.jsx'

function App() {

  return (
    <>
      <ThemeProvider theme={Theme}>
        <div id='stars'></div>
        <div id='stars2'></div>
        <div id='stars3'></div>
        <Header/>
        <Grid container alignItems="center">
          <Grid item align='center' xs={12} sm={12} m={12}>
            <QuizButton />
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
}

export default App;
