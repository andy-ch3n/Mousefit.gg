import React from "react"
import { useSelector } from 'react-redux'
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
  // const quizButtonClicked = useSelector(getQuizButtonClicked)
  const quizClicked = useSelector(getClicked);

  const landingPage = () => {
    if(!quizClicked.quizbuttonclicked) {
      return (
          // <Mouse />
          <></>
      )
    }
    return (<></>)
  }

  return (
    <>
      <ThemeProvider theme={Theme}>
        {/* <Header />
        <div id='stars'></div>
        <div id='stars2'></div>
        <div id='stars3'></div>
        <Header/>
        <div
        style={{
          width: '100vw',
          height: '100vh',
          display: 'flex',
          alignItems: !quizClicked.quizbuttonclicked ? null : 'center',
          justifyContent: !quizClicked.quizbuttonclicked ? null : 'center',
          flexDirection: 'column',
        }}
        >
          {landingPage()}
        <Box
          position= {!quizClicked.quizbuttonclicked ? 'absolute' : 'static' }
          top= {!quizClicked.quizbuttonclicked ? '75%' : null}
          left= {!quizClicked.quizbuttonclicked ? '44%' : null}
          >
           <QuizButton /> */}
           <ResultsPage />
        {/* </Box> */}
        {/* </div> */}
      </ThemeProvider>
    </>
  );
}

export default App;
