import React, { useState, useEffect } from "react";
import "./styles.css"
import { useNavigate } from "react-router-dom";

export function SignUpPage({loggedIn}){
    const navigate = useNavigate();
    const [signUp, setSignUp] = React.useState({
        "email" : "",
        "password" : "",
        "confirm-password" : ""
    })

    const [formState, setFormState] = useState("");

    function handleSubmit(e){
        e.preventDefault();
        if(localStorage.getItem(signUp.email)){
            setFormState("User already exists! Please try another E-Mail")
        }else if(signUp["confirm-password"] !== signUp.password) {
            setFormState("Password does not match!")
        }else{
            localStorage.setItem(signUp.email,signUp.password);
            navigate("/");
        }
        setTimeout(()=>{
            setFormState("");
        },2000)
    }

    function handleChange({target}){
        const {value, name} = target;
        setSignUp(prev => {
            return {
                ...prev,
                [name] : value
            }
        })
    }

    return (
        <div className="form-container">
            <div className="form-state">{formState}</div>
            <form className="form" action="" onSubmit={handleSubmit}>
                <h1>Sign Up</h1>
                <div className="email">
                    <label htmlFor="email">Email</label>
                    <input name = "email" 
                        type="email" 
                        id="email" 
                        placeholder="Enter Email..."
                        onChange={handleChange} 
                        value={signUp.email} 
                        required
                    />
                </div>

                <div className="password">
                    <label htmlFor="password">Password</label>
                    <input name = "password" 
                        type="password" 
                        placeholder="Enter Password..."
                        id="password" 
                        onChange={handleChange} 
                        value={signUp.password} 
                        required
                    />
                    <input name = "confirm-password" 
                        type="password" 
                        placeholder="Confirm Password..."
                        id="confirm-password" 
                        onChange={handleChange} 
                        value={signUp.confirmPass}
                        required
                    />
                </div>

                <button type="submit" className="form-submit">Sign Up</button>
                <p className="form-redirect">Already Signed Up? <a href= "" onClick={()=> navigate('/')}>LOG IN</a> </p>
            </form>
        </div>
    )
}