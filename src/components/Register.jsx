import { useState } from "react";
import axios from "axios";

export default function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [location, setLocation] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!firstName) {
      newErrors.email = "First Name is required";
    }

    if (!lastName) {
      newErrors.email = "Last Name is required";
    }

    if (!email) {
      newErrors.email = "Email Name is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email address is invalid";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    } else if (!/[A-Z]/.test(password)) {
      newErrors.password =
        "Password must contain at least one uppercase letter";
    } else if (!/[a-z]/.test(password)) {
      newErrors.password =
        "Password must contain at least one lowercase letter";
    } else if (!/[0-9]/.test(password)) {
      newErrors.password = "Password must contain at least one digit";
    } else if (!/[^A-Za-z0-9]/.test(password)) {
      newErrors.password =
        "Password must contain at least one special character";
    }

    if (!age) {
      newErrors.age = "Age is required";
    } else if (isNaN(age) || age <= 0) {
      newErrors.age = "Age must be a positive number";
    } else if (age >= 90) {
      newErrors.age = "Age must be less than 90 years old";
    }

    if (!location) {
      newErrors.location = "Location is required";
    }
    return newErrors;
  };

  const SubmitHandler = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      console.log({ firstName, lastName, email, password, age, location });

      // Proceed with form submission

      const response = await axios.post(
        "http://localhost:5000/api/v1/user/signup",
        {
          name: firstName + " " + lastName,
          email,
          password,
          phone: "224455",
          birthDate: "2000-1-1",
          gender: "male",
          country: "Egypt",
          city: "Cairo",
        }
      );
      console.log(response);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div>
      <div id="FormContainer">
        <form onSubmit={SubmitHandler} id="RegisterForm">
          <h2>Register</h2>
          <div className="inputbox">
            <label> First name: </label>
            <input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              placeholder="First Name"
              id="firstName"
              name="firstName"
            ></input>
            {errors.firstName && <p className="error">{errors.firstName}</p>}
          </div>
          <i></i>

          <div className="inputbox">
            <label> Last name: </label>
            <input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              placeholder="Last Name"
              id="lastName"
              name="lastName"
            ></input>
            {errors.lastName && <p className="error">{errors.lastName}</p>}
          </div>
          <i></i>

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
            <label> Age: </label>
            <input
              value={age}
              onChange={(e) => setAge(e.target.value)}
              type="age"
              placeholder="age"
              required
              id="age"
              name="age"
            ></input>
            {errors.age && <p className="error">{errors.age}</p>}
          </div>
          <i></i>

          <div className="inputbox">
            <label> Location: </label>
            <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="location"
              required
              id="location"
              name="location"
            ></input>
            {errors.location && <p className="error">{errors.location}</p>}
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
          {" "}
          Already have an account? <a href="./Login">Login here.</a>
        </p>
      </div>
    </div>
  );
}
