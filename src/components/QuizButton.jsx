import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setClicked, getClicked } from './redux/state/quizButtonClickedSlice.js';
import Button from '@mui/material/Button'
import QuizPage from './QuizPage.jsx'
import Box from '@mui/material/Box';

export default function QuizButton() {
  // const [buttonClicked, setButtonClicked] = useState(false)
  const quizClicked = useSelector(getClicked);
  const dispatch = useDispatch();

  // const renderQuiz = () => {
  //   setButtonClicked(true)
  // }

  const handleButtonClick = () => {
    dispatch(setClicked({ quizbuttonclicked: true }));
  }

  return (
    <>
    {(quizClicked.quizbuttonclicked) ? <QuizPage/> : <Button style={{ transform: 'translate(-50%)' }}variant="contained" onClick={handleButtonClick}>Take the Quiz</Button>}
    </>
  )
}