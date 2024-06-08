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

      
      <div className="content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          {/* <Route path="/item" element={<HomePage />} /> */}
          {/* <Route path="/account" element={<HomePage />} /> */}
          {/* <Route path="/signup" element={<HomePage />} /> */}
          {/* <Route path="/login" element={<Login />} /> */}
        </Routes>
      </div>
      <Footer />
    </div>
    
  );
}

export default App;
