import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login"
import Register from "./components/Register";
import MyProfile from "./components/MyProfile";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <MyProfile />
      <Footer />

      
      
    </div>
    
  );
}

export default App;
