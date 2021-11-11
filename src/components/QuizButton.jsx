import React, { useState } from 'react'
import Button from '@mui/material/Button'
import QuizPage from './QuizPage.jsx'

export default function QuizButton() {
  const [buttonClicked, setButtonClicked] = useState(false)

  const renderQuiz = () => {
    setButtonClicked(true)
  }

  if (!buttonClicked) {
    return (

      <div style={{opacity: '1'}}>
      <Button variant="contained" onClick={renderQuiz}>Take the Quiz</Button>
      </div>

    )
  }

  return (
    <>
    <QuizPage />
    </>
  )
}