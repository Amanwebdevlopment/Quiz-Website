import React, { useContext, useEffect, useState } from 'react'
import { Data } from '../context/DataProvider';
import { Box, Button, Container, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
export const QuizTest = () => {
  const navigate = useNavigate();
  const { quizData ,categoryName} = useContext(Data);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const [answerData, setAnswerData] = useState([]);
  const [flag, setFlag] = useState(false);
  const [answerSubmit,setAnswerSubmit] = useState(false)
  const next = () => {
    if (quizData.length > nextIndex) {
      setQuestionIndex(1 + questionIndex)
      setNextIndex(1 + nextIndex)
      setFlag(false)
      setAnswerSubmit(false)
    }
  }
  const leave = ()=>{
    navigate("/")
  }
  // console.log(quizData)
  useEffect(() => {
    if (quizData.length > 0) {
      let correctAns = quizData[questionIndex].correctAnswer;
      let incorrectAnswers = [...quizData[questionIndex].incorrectAnswers]; 
      const randomNumber = Math.floor(Math.random() * (incorrectAnswers.length + 1)); 
      let updatedAnswers = [...incorrectAnswers]; 
      updatedAnswers.splice(randomNumber, 0,correctAns ); 
      setAnswerData(updatedAnswers);
    }
  }, [questionIndex,quizData]);
  const handleAnswerChange = (e) => {
    if ( quizData.length > 0){
      setAnswerSubmit(true)
      if (e.target.value === quizData[questionIndex].correctAnswer) {
        console.log(e.target.value)
        setFlag("correct")
      } else {
        setFlag("notCorrect")
        console.log('incorrect answer !')
    }
    }
  }
  // console.log(quizData[questionIndex].correctAnswer)
  return (
    <section id='quizTest'>
      <Container>
        {quizData.slice(questionIndex, nextIndex).map((item, index) => {
          return (<Box sx={{ boxShadow: 2, p: 5, bgcolor: 'white' }} key={index}>
            <Typography variant='h4' sx={{ textTransform: 'uppercase' }}>{item.category}</Typography>
            <Typography variant='h6' sx={{ mt: 1 }}>{questionIndex + index + 1}. {item.question.text}</Typography>
            <FormControl fullWidth sx={{ mt: 1 }}>
              <FormLabel id="demo-radio-buttons-group-label">{item.difficulty}</FormLabel>
              <RadioGroup
                defaultValue="female"
                name="radio-buttons-group"
                // value={selectedAnswer}
                onChange={handleAnswerChange}
              >
                {answerData.map((item, index) => {
                  return (
                    <FormControlLabel key={index} sx={{ border: 1, mt: 2, p: 1 }} value={item} control={<Radio disabled={answerSubmit} />} label={item} />
                  )
                })}
              </RadioGroup>
            </FormControl>
            <Box sx={{ display: "flex", justifyContent: 'space-between', mt: 4 }}>
              <Box> <span>{nextIndex} of {quizData.length}</span></Box>
              <Box sx={{display:"flex",gap:1}}>
              <Button variant="contained" color="error" onClick={leave} >
                leave
              </Button>
              <Button variant="contained" color="primary" onClick={next} >
                Next
              </Button>
              </Box>
            </Box>
            <Box>
              {flag === "correct"? <Typography component="span" sx={{ color: "green" }}>
                congratulation your answer is correct {quizData[questionIndex].correctAnswer}
              </Typography>:null}
              {flag === "notCorrect" ? <Typography component="span" sx={{ color: "red" }}>
                your answer is incorrect and the correct Answer  is : {quizData[questionIndex].correctAnswer}
              </Typography>:null}
            </Box>
          </Box>)
        })}

      </Container>
    </section>
  )
}
