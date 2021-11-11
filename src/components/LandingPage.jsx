import React, { useState } from "react";
import Header from "./Header.jsx"
import Mouse from "./Mouse.jsx"
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

export default function LandingPage() {
  const [quizClicked, setQuizClicked] = useState(false);

  return (
          <>
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
              <Button onClick={setQuizClicked(true)} variant='contained'>
                Take the survey
              </Button>
            </Box>
          </>
  )
}
