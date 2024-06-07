import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage.jsx";
import { Routes, Route } from "react-router-dom";
import ItemBid from "./components/ItemBidPage";
import AllItems from "./components/AllItemsPage";

function App() {
   const items = [
      {
         id:1,
         image: "/item.jpg",
         description: "Product 1",
         startingPrice: 100,
         reservedPrice: 500,
         startDate: "1/1/24",
         endDate: "7/7/25",
      },
      {
         id:2,
         image: "/item.jpg",
         description: "Product 2",
         startingPrice: 100,
         reservedPrice: 500,
         startDate: "1/1/24",
         endDate: "7/7/25",
      },
   ];
   return (
      <div>
         <Header />

         {/* <ItemBid items={items} /> */}
         <AllItems products={items}/>

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
