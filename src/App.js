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

function App() {
  // const quizButtonClicked = useSelector(getQuizButtonClicked)
  const quizClicked = useSelector(getClicked);

  // const LandingPage = () => {
  //   if(!quizClicked.quizbuttonclicked) {
  //     return (
  //           <Mouse />
  //     )
  //   }

  //   return (null)
  // }

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
        <Box
          textAlign='center'
          position='absolute'
          top='75%'
          left='44%'
        >
           <QuizButton />
        </Box>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
