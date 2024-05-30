import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        {/* <Route path="/item" element={<HomePage />} /> */}
        {/* <Route path="/account" element={<HomePage />} /> */}
        {/* <Route path="/signup" element={<HomePage />} /> */}
        {/* <Route path="/login" element={<HomePage />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
