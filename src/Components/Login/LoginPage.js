import React, {useState} from "react";  
import { useNavigate } from "react-router-dom"; 

export function LoginPage({setLoggedIn}){
    const navigate = useNavigate();

    const [login, setLogin] = useState({
        "email" : "",
        "password" : ""
    })

    const [formState, setFormState] = useState("");

    function handleSubmit(e){
        e.preventDefault();
        if(!localStorage.getItem(login.email)){
            setFormState("User does not exist! Please Sign-Up.")
        }else{
            if(localStorage.getItem(login.email) === login.password ){
                setLoggedIn();
                navigate("/quiz")
            }else{
                setFormState("Password doen not match! Try again.");
            }
        }
    }

    function handleChange({target}){
        const {value, name} = target;
        setLogin(prev => {
            return {
                ...prev,
                [name] : value
            }
        })
    }

    return (
        <div className="login">
            <div className="form-state">{formState}</div>
            <form className="login--form" action=""  onSubmit={handleSubmit}>
                <h1>Login</h1>
                <div className="email">
                    <label htmlFor="email">Email</label>
                    <input name = "email" 
                        type="email" 
                        id="email" 
                        placeholder="Enter Email..."
                        onChange={handleChange} 
                        value={login.email} 
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
                        value={login.password} 
                        required
                    />
                </div>

                <button type="submit" className="login--submit">Login</button>
                
                <p className="sign-up-redirect">Need an Account? <a href= "" onClick={()=> navigate('/signup')}>SIGN UP</a> </p>
            </form>
        </div>
    )
}