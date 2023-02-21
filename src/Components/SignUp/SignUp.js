import React from "react";

export function SignUp(){

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
                    <input name = "confirm-password" 
                        type="password" 
                        placeholder="Confirm Password..."
                        id="confirm-password" 
                        onChange={handleChange} 
                        value={login.confirmPass} 
                        required
                    />
                </div>

                <input type="submit" className="sign-up--submit" />
            </form>
        </div>
    )
}