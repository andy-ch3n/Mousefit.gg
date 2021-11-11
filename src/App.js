// import ExamplePage from './components/ExamplePage.jsx'
import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Theme from "./Theme/ThemeFile.js"
import QuizButton from './components/QuizButton.jsx'
import Header from "./components/Header.jsx"
import Mouse from "./components/Mouse.jsx"
// import { CssBaseline, Typography, GlobalStyles, Container, Box}from "@mui/material/";




function App() {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <div id='stars'></div>
        <div id='stars2'></div>
        <div id='stars3'></div>
        <div
          style={{
            width: '100vw',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Header />
          <Mouse />
        </div>
        <Box
          textAlign='center'
          position='absolute'
          top='75%'
          left='40%'
        >
           <QuizButton />
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
