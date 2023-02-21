import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

export function SignUpPage(){

    const navigate = useNavigate();
    const signInButton = useRef();

    const [signUp, setSignUp] = React.useState({
        "email" : "",
        "password" : "",
        "confirm-password" : ""
    })

    React.useEffect(()=>{
    },[signUp])

    function handleSubmit(e){
        e.preventDefault();
        if(localStorage.getItem(signUp.email)){
            alert("usernameExist");
        }else if(signUp["confirm-password"] !== signUp.password) {
            alert("password not same");
        }else{
            localStorage.setItem(signUp.email,signUp.password);
            setTimeout(()=>{
                signInButton.disabled = true;
                navigate("/");
            },2000)
        }
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
        <div className="sign-up">
            <form className="sign-up--form" action="" onSubmit={handleSubmit}>
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

                <button type="submit" className="sign-up--submit" ref={signInButton}>Sign Up</button>
            </form>
        </div>
    )
}