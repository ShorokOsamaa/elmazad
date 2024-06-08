import { useState } from 'react'; 

export default function Register() { 
  const[firstName , setFirstName] = useState("");
  const[lastName , setLastName] = useState("");
  const[email , setEmail] = useState("");
  const[password , setPassword] = useState("");
  const[age , setAge] = useState("");
  const[location , setLocation] = useState("");

  const SubmitHandler = (e) => {
    e.preventDefault();
    console.log(email);
}

  return ( 
    <>
      <div id="FormContainer">
            <form onSubmit={SubmitHandler} id="RegisterForm">
                <h2>Register</h2>
                <div class="inputbox">
                <label> First name: </label>
                <input value={firstName}onChange={(e) => setFirstName(e.target.value)}
                required placeholder="First Name" id="firstName" name="firstName"></input>
                </div>
                <i></i>

                <div class="inputbox">
                <label> Last name: </label>
                <input value={lastName}onChange={(e) => setLastName(e.target.value)}
                required placeholder="Last Name" id="lastName" name="lastName"></input>
                </div>
                <i></i>

                <div class="inputbox">
                <label> Email: </label>
                <input value={email}onChange={(e) => setEmail(e.target.value)}
                type="email" placeholder="Email" required id="email" name="email"></input>
                </div>
                <i></i>

                <div class="inputbox">
                <label> Age: </label>
                <input value={age}onChange={(e) => setAge(e.target.value)}
                type="age" placeholder="age" required id="age" name="age"></input>
                </div>
                <i></i>

                <div class="inputbox">
                <label> Location: </label>
                <input value={location}onChange={(e) => setLocation(e.target.value)}
                placeholder="location" required id="location" name="location"></input>
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
            <p> Already have an account? <a href="./Register">Login here.</a></p>
          </div>
    </>
  
  
  ); 
} 
