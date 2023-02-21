import React from 'react';
import { useNavigate } from 'react-router-dom';
import questions from "./questions.json";

export function Result({loggedIn}) {
    const navigate = useNavigate();
    if(!loggedIn){
        return (
            <div style={{display : 'flex', flexDirection : 'column', justifyContent: 'center', alignItems:'center', gap:'2em'}}>
                <h1>Please Log In and take the Quiz to get your result</h1>
                <button onClick={()=> navigate("/")}>Log In</button>
            </div>
        )
    }

    return (
        <div className='result-container'>
            <table id="result">
                <caption><h1 style={{marginBottom:'1rem'}}>Result</h1></caption>
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
                <button onClick={()=>navigate("/quiz")}>Retake the Quiz</button>
                <button onClick={()=>navigate("/")}>Logout</button>
            </div>
        </div>
    );
}
