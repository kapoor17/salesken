import React, {useEffect, useState, useRef  } from 'react';
import "./styles.css"
import questions from "./questions.json";
import { useNavigate } from 'react-router-dom';

export function Quiz({loggedIn}){
    const navigate = useNavigate();
    const [finished, setFinished] = useState(false);

    if(!loggedIn){
        return (
            <div style={{display : 'flex', flexDirection : 'column', justifyContent: 'center', alignItems:'center', gap:'2em'}}>
                <h1>Please Log  In to take the Quiz</h1>
                <button onClick={()=> navigate("/")}>Log In</button>
            </div>
        )
    }

    return finished ? <Result setFinished={setFinished} /> : <QuizContainer setFinished={setFinished}/>
}

export function QuizContainer({setFinished}) {
  const navigate = useNavigate();

  const [question, setQuestion] = React.useState(questions);
  const [currentQuesIndex, setCurrentQuesIndex] = React.useState(0);
  const [choosenAnswers, setChoosenAnswers] = React.useState([]);

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
            <button onClick={()=>{
                setFinished(true)
            }} style={{margin : '0 auto'}}>Finish Quiz</button>
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

export function Result({setFinished}) {
    const navigate = useNavigate();
    const [score, setScore] = useState(0)

    useEffect(()=>{
        const nodes = document.querySelectorAll("td")
        nodes.forEach(node => node.style.color === "green" && setScore(prev => prev + 1))
    },[])

    return (
        <div className='result-container'>
            <table id="result">
                <caption><h1 style={{marginBottom:'1rem'}}>Result : {score/2}/10</h1></caption>
                <thead>
                    <tr>
                        <th scope='col'>Your Answer</th>
                        <th scope='col'>Correct Answer</th>
                    </tr>
                </thead>
                <tbody>
                    {questions.map((ques,index) => {
                        let correctAns = ques.answers[ques.correctAnswer];
                        let yourAnswer = localStorage.getItem(index);
                        let color = yourAnswer != correctAns  ? "red" : "green"
                        let style = {color : color}
                        return (
                            <tr>
                                <td style={style}>{yourAnswer}</td>
                                <td>{correctAns}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <div>
                <button onClick={()=>setFinished(false)}>Retake the Quiz</button>
                <button onClick={()=>navigate("/")}>Logout</button>
            </div>
        </div>
    );
}