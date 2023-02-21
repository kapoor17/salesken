import React from 'react';
import questions from "./questions.json";

export function Quiz() {
  const [question, setQuestion] = React.useState(questions);
  const [currentQuesIndex, setCurrentQuesIndex] = React.useState(0);
  const [choosenAnswers, setChoosenAnswers] = React.useState([]);

  function handleClick(questionIndex, ansIndex){
    const newArray = [...choosenAnswers];
    newArray[questionIndex] = ansIndex;
    setChoosenAnswers(newArray);
  }

  const currentQues = question[currentQuesIndex];
  const isLastQuestion = currentQuesIndex === question.length - 1;
  const isFirstQuestion = currentQuesIndex === 0;

  return (
    <div className='quiz-container'>
        <h1>{currentQues.question}</h1>
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
    </div>
  )

}