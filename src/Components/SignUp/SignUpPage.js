import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

export function SignUpPage(){

    const navigate = useNavigate();
    const confirmPass = useRef();

    const [signUp, setSignUp] = React.useState({
        "email" : "",
        "password" : "",
        "confirm-password" : ""
    })

    React.useEffect(()=>{
    },[signUp])

    function handleSubmit(e){
        e.preventDefault();
        if(signUp["confirm-password"] !== signUp.password) {
            // handle confirm pass functionality
            alert("password not same");
        }else{
            localStorage.setItem(signUp.email,signUp.password);
            navigate("/");
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
        <div className="sign-up" onSubmit={handleSubmit}>
            <form className="sign-up--form" action="">
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
                        ref={confirmPass}
                        required
                    />
                </div>

                <button type="submit" className="sign-up--submit">Sign Up</button>
            </form>
        </div>
    )
}