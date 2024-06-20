import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const navigateTo = useNavigate();

  const SubmitHandler = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      console.log({ email, password });

      // Proceed with form submission

      const response = await axios.post(
        "http://localhost:5000/api/v1/user/login",
        {
          email,
          password,
        }
      );

      const token = response.data.accessToken;
      console.log(response);

      localStorage.setItem("token", token);
      console.log("From local storage Token: ", localStorage.getItem("token"));

      navigateTo("/");
    } else {
      setErrors(validationErrors);
    }
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email address is invalid!";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    return newErrors;
  };

  return (
    <div>
      <div id="FormContainer">
        <form onSubmit={SubmitHandler} id="LoginForm">
          <h2>Login</h2>
          <div className="inputbox">
            <label> Email: </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
              required
              id="email"
              name="email"
            ></input>
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <i></i>
          <div className="inputbox">
            <label>Password: </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
              required
              id="password"
              name="password"
            ></input>
            {errors.password && <p className="error">{errors.password}</p>}
          </div>
          <i></i>
          <a href="#">Forgot password?</a>
          <button type="submit">Login</button>
        </form>
        <p>
          Dont have an account? <a href="./Register">Register here.</a>
        </p>
      </div>
    </div>
  );
}
export default Login;
