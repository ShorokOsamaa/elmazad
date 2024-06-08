import "../App.css";
import React, { useRef, useState } from "react";

function ItemBid(props) {
   // const Items = {
   //    image: "/item.jpg",
   //    description: "game controller",
   //    details: "play station 4 game controller in good condition ",
   //    startingPrice: 100,
   //    reservedPrice: 500,
   //    startDate: "1/1/24",
   //    endDate: "7/7/24",
   // };
   const { Items: Item } = props;
   console.log("Item--->",Item);
   const [currentBid, setCurrentBid] = useState(Item.startingPrice);
   const [errorMessage, setErrorMessage] = useState(""); // State for error message

   const [isBidOpen, setIsBidOpen] = useState(() => {
      const now = new Date();
      return now >= new Date(Item.startDate) && now <= new Date(Item.endDate);
   }); // Check if bidding is open based on start date
   // const isBiddingOpen = () => {
   //    const now = new Date();
   //    return now >= new Date(Items.startDate) && now <= new Date(Items.endDate);
   // };
   const handleBidChange = (e) => {
      e.preventDefault();
      setErrorMessage("");
      console.log(e);
      console.log("current bid", currentBid);
      const newBid = parseFloat(e.target[0].value);
      console.log("new bid", newBid);

      if (newBid > currentBid && newBid > Item.startingPrice) {
         setCurrentBid(newBid);
         console.log("current bid: ", currentBid);
      } else {
         console.log("new bid", newBid);
         setErrorMessage("Bid must be higher than current bid and starting price");

         //  alert("Bid must be higher than current bid and starting price");
      }
   };
   const buyNow = () => {
      if (confirm("want to continue buying the item?")) {
         setIsBidOpen(false);
         console.log("Thing was saved to the database.");
      } else {
         // Do nothing!
         console.log("Thing was not saved to the database.");
      }
   };

   return (
      // <main class="container">
      // <div class="product-card">
      // <img src={Items.image} alt={Items.description} />
      //   <h3>Product Title 1</h3>
      //   <p>A short description of product 1.</p>
      //   <button>Add to Cart</button>
      // </div>

      // </main>
      <div className="item">
         <div className="item-img-container">
            <img className="item-img" src={Item.image} alt={Item.description} />
         </div>
         <div className="item-details-container">
            <div className="item-details">
               <h3>{Item.description}</h3>
               <p>Starting Price: {Item.startingPrice}LE</p>
               <p>Reserved Price: {Item.reservedPrice}LE</p>
               <p>Start Date: {new Date(Item.startDate).toLocaleDateString()}</p>
               <p>End Date: {new Date(Item.endDate).toLocaleDateString()}</p>
               <div>
                  <p>{Item.details}</p>
               </div>

               {isBidOpen ? (
                  <div className="bid-section">
                     <p>Current Bid: {currentBid}LE</p>
                     <form onSubmit={handleBidChange}>
                        <input type="number" />
                        <span className="error-message">{errorMessage}</span>
                        <button disabled={currentBid >= Item.reservedPrice}>Place Bid</button>
                     </form>
                     <button id="buy-now-btn" onClick={buyNow}>
                        Buy now at {Item.reservedPrice}LE
                     </button>
                  </div>
               ) : (
                  <p>Bidding Closed</p>
               )}
            </div>
         </div>
      </div>
   );
}

export default ItemBid;
