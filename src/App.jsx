import "./App.css";
import { Routes, Route } from "react-router-dom";
import PrivateRoutes from "./utils/PrivateRoutes";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import Login from "./components/Login";
import Register from "./components/Register";
import MyProfile from "./components/MyProfile";
import AllItems from "./components/AllItemsPage";
import AddItem from "./components/AddItem";
import ItemBidPage from "./components/ItemBidPage.jsx";
import CategoryPage from "./components/CategoryPage.jsx";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          {/* <Route element={<PrivateRoutes />}> */}
          <Route path="/profile" element={<MyProfile />} />
          {/* </Route> */}

          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />

          <Route path="/item/:id" element={<ItemBidPage />} />
          <Route path="/category/:category" element={<CategoryPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* <Route path="/add-item" element={<AddItem />} />*/}
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
