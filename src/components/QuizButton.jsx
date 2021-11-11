import React, { useState } from 'react'
import Button from '@mui/material/Button'
import QuizPage from './QuizPage.jsx'
import Box from '@mui/material/Box';

export default function QuizButton() {
  const [buttonClicked, setButtonClicked] = useState(false)

  const renderQuiz = () => {
    setButtonClicked(true)
  }

  if (!buttonClicked) {
    return (

      <div style={{opacity: '1'}}>
        <Box
          textAlign='center'
          position='relative'
          top='50%'
          left='50%'
        >
          <Button variant="contained" onClick={renderQuiz}>Take the Quiz</Button>
        </Box>
      </div>

    )
  }

  return (
    <>
    <QuizPage />
    </>
  )
}