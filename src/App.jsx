import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import MyProfile from "./components/MyProfile";
import AllItems from "./components/AllItemsPage";
import ItemBidPage from "./components/ItemBidPage.jsx";

function App() {
  const items = [
    {
      id: 1,
      image: "/item.jpg",
      description: "Product 1",
      startingPrice: 100,
      reservedPrice: 500,
      startDate: "1/1/24",
      endDate: "7/7/25",
    },
    {
      id: 2,
      image: "/item.jpg",
      description: "Product 2",
      startingPrice: 100,
      reservedPrice: 500,
      startDate: "1/1/24",
      endDate: "7/7/25",
    },
  ];
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/all-items" element={<AllItems products={items} />} />
          <Route path="/item/:id" element={<ItemBidPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<MyProfile />} />
          {/* <Route path="/item" element={<HomePage />} /> */}
          {/* <Route path="/account" element={<HomePage />} /> */}
          {/* <Route path="/signup" element={<HomePage />} /> */}
          {/* <Route path="/login" element={<HomePage />} /> */}
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
