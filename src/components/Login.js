import { useState } from "react";


function Login(){

    const SubmitHandler = (e) => {
        /* use prevent default cause when we reload we wont lose our state */
        e.preventDefault();
        console.log(email)
    }

    const[email , setEmail] = useState("");
    const[password , setPassword] = useState("");

    
    return( 
        <>
        <div id="FormContainer">
            <form onSubmit={SubmitHandler} id="LoginForm">
                <h2>Login</h2>
                <div class="inputbox">
                <label> Email: </label>
                <input value={email}onChange={(e) => setEmail(e.target.value)}
                type="email" placeholder="Email" required id="email" name="email"></input>
                </div>
                <i></i>
                <div class="inputbox">
                <label>Password: </label>
                <input value={password}onChange={(e) => setPassword(e.target.value)}
                type="password" placeholder="Password" required id="password" name="password"></input>
                </div>
                <i></i>
                <a href="#">Forgot password?</a>
                <button type="submit">Login</button>
            </form>
            <p>Dont have an account? <a href="./Register">Register here.</a></p>
            </div>
        </>
    );
}
export default Login;