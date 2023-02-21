import React from 'react';
import "./styles.css"
import questions from "./questions.json";
import { useNavigate } from 'react-router-dom';

export function Quiz({loggedIn}) {
  const navigate = useNavigate();
  const [question, setQuestion] = React.useState(questions);
  const [currentQuesIndex, setCurrentQuesIndex] = React.useState(0);
  const [choosenAnswers, setChoosenAnswers] = React.useState([]);

  if(!loggedIn){
    return (
        <div style={{display : 'flex', flexDirection : 'column', justifyContent: 'center', alignItems:'center', gap:'2em'}}>
            <h1>Please Log  In to take the Quiz</h1>
            <button onClick={()=> navigate("/")}>Log In</button>
        </div>
    )
  }

  function handleClick(questionIndex, ansIndex){
    const newArray = [...choosenAnswers];
    newArray[questionIndex] = ansIndex;
    const correctAns = currentQues.correctAnswer
    localStorage.setItem(currentQuesIndex, currentQues.answers[ansIndex])
    setChoosenAnswers(newArray);
  }

  const currentQues = question[currentQuesIndex];
  const isLastQuestion = currentQuesIndex === question.length - 1;
  const isFirstQuestion = currentQuesIndex === 0;

  return (
    <div className='quiz-container'>
        <h1>{currentQuesIndex + 1 + ": " + currentQues.question}</h1>
        <div className='answers'>
            {currentQues.answers.map((ans,ansIndex) => {
                let className = "answer"
                const choosenAnswer = choosenAnswers[currentQuesIndex]

                if(choosenAnswer === ansIndex){
                    className += currentQues.correctAnswer === choosenAnswer ? " correct" : " incorrect";
                }
                return (
                    <h3 
                        className={className}
                        key={ansIndex}
                        onClick = {() => {
                            if(choosenAnswer != null) return
                            handleClick(currentQuesIndex, ansIndex)
                        }}
                    >
                        {ans}
                    </h3>
                )
            })}
        </div>
        {
            isLastQuestion && choosenAnswers[currentQuesIndex] != null ?
            <button onClick={()=>navigate("/result")} style={{margin : '0 auto'}}>Finish Quiz</button>
            :
            <>
                <button 
                    className='quiz-controls' 
                    disabled = {isLastQuestion  || choosenAnswers[currentQuesIndex] == null} 
                    onClick={()=>setCurrentQuesIndex(prev => prev+1)}
                >
                        Next
                </button>

                <button 
                    className='quiz-controls' 
                    disabled = {isFirstQuestion} 
                    onClick={()=>setCurrentQuesIndex(prev => prev-1)}
                >
                        Back
                </button>
            </>
        }
    </div>
  )

}