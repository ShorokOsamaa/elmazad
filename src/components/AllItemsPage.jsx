import "../App.css";
import React, { useRef, useState } from "react";
import ItemBid from "./ItemBidPage";

function AllItems(props) {
   const { products } = props;
   const [selectedProductId, setSelectedProductId] = useState(null);
   const handleItemClick = (productId) => {
      setSelectedProductId(productId);
   };

   const [itemBids, setItemBids] = useState({});
   // const [currentBid, setCurrentBid] = useState(items.startingPrice);

   //    const [isBidOpen, setIsBidOpen] = useState(startDate < new Date()); // Check if bidding is open based on start date
   // const isBiddingOpen = (item) => {
   //    const now = new Date();
   //    console.log("start date: ", item.startDate);
   //    console.log("end date: ", item.endDate);
   //    console.log("items: ", item);

   //    return now >= new Date(item.startDate) && now <= new Date(item.endDate);
   // };
   // const handleBidChange = (e, item, itemId) => {
   //    e.preventDefault();
   //    setErrorMessage("");

   //    console.log(e);
   //    console.log("current bid", currentBid);
   //    const newBid = parseFloat(e.target[0].value);
   //    console.log("new bid", newBid);

   //    if (newBid > currentBid && newBid > item.startingPrice) {
   //       //  setCurrentBid(newBid);
   //       setItemBids({
   //          ...itemBids,
   //          [itemId]: newBid,
   //       });
   //       console.log("item bid-------------: ", itemBids);
   //       console.log("current bid: ", currentBid);
   //    } else {
   //       console.log("new bid", newBid);
   //       setErrorMessage("Bid must be higher than current bid and starting price");

   //       //  alert("Bid must be higher than current bid and starting price");
   //    }
   // };

   return (
      <div className="product-container">
         {products.map((product) => (
            <div key={product.description} className="item">
               <img src={product.image} alt={product.description} onClick={() => handleItemClick(product.id)} />{" "}
               {/* Trigger on click */}
               <div className="item-details">
                  <h3>{product.description}</h3>
                  <p>Starting Price: ${product.startingPrice}</p>
                  {/* ... other details (these are visible without clicking) */}
               </div>
            </div>
         ))}
         {selectedProductId && (
            <ItemBid
               Items={products.find((p) => {
                  if (p.id === selectedProductId) {
                     return products[p.id];
                  }
               })}
            />
         )}
      </div>

      //-------------list
      // // </main>
      // <div className="item-container">
      //    {items.map((item) => (
      //       <div key={item.description} className="item">
      //          <img src={item.image} alt={item.description} />
      //          <div className="item-details">
      //             <h3>{item.description}</h3>
      //             <p>Starting Price: ${item.startingPrice}</p>
      //             <p>Reserved Price: ${item.reservedPrice}</p>
      //             <p>Start Date: {new Date(item.startDate).toLocaleDateString()}</p>
      //             <p>End Date: {new Date(item.endDate).toLocaleDateString()}</p>
      //             {isBiddingOpen(item) ? (
      //                <div className="bid-section">
      //                   <p>Current Bid: ${currentBid}</p>
      //                   <form onSubmit={handleBidChange}>
      //                      <input type="number" />
      //                      <span className="error-message">{errorMessage}</span>
      //                      <button disabled={currentBid >= item.reservedPrice}>Place Bid</button>
      //                   </form>
      //                </div>
      //             ) : (
      //                <p>Bidding Closed</p>
      //             )}
      //          </div>
      //       </div>
      //    ))}
      // </div>
   );
}

export default AllItems;
