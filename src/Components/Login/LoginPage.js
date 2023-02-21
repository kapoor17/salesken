import React from "react";  
import { SignUpPage as SignUp } from "../SignUp/SignUpPage";
import { useNavigate } from "react-router-dom"; 

export function LoginPage(){
    const navigate = useNavigate();

    const [login, setLogin] = React.useState({
        "email" : "",
        "password" : "",
        "confirm-password" : ""
    })

    React.useEffect(()=>{
    },[login])

    function handleSubmit(e){
        e.preventDefault();
        if(login["confirm-password"] !== login.password) {
            console.log("pass not same")
            return
        }
        localStorage.setItem(login.email,login.password);
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
        <div className="login" onSubmit={handleSubmit}>
            <form className="login--form" action="">
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
                
                <p className="sign-up-redirect">Need an Account? <a onClick={()=> navigate('/signup')}>SIGN UP</a> </p>
            </form>
        </div>
    )
}