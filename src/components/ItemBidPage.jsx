import "../App.css";
import { useParams } from "react-router-dom";
import React, { useRef, useEffect, useState } from "react";

function ItemBid(props) {
  const { id } = useParams();
  const [Item, setItem] = useState(null);
  const [currentBid, setCurrentBid] = useState(null);
  const [errorMessage, setErrorMessage] = useState(""); // State for error message
  const [isBidOpen, setIsBidOpen] = useState(false);

  console.log("before use effect");
  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/item/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("inside use effect");
        console.log(data);
        setItem(data.item);
        setCurrentBid(data.item.startingPrice);
        const now = new Date();
        setIsBidOpen(
          now >= new Date(data.item.startDate) &&
            now <= new Date(data.item.endDate)
        );
      })
      .catch((error) => {
        console.error("Error fetching item details:", error);
      });
  }, [id]);

  // const Items = {
  //    image: "/item.jpg",
  //    description: "game controller",
  //    details: "play station 4 game controller in good condition ",
  //    startingPrice: 100,
  //    reservedPrice: 500,
  //    startDate: "1/1/24",
  //    endDate: "7/7/24",
  // };
  //   const { Item } = props;

  console.log("Item--->", Item);

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

  if (!Item) {
    return <div>Loading...</div>;
  }

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
        <img
          className="item-img"
          src={Item.imagePaths.split(" ")[0]}
          alt={Item.description}
        />
      </div>
      <div className="item-details-container">
        <div className="item-details">
          <h3>{Item.name}</h3>
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
                <button disabled={currentBid >= Item.reservedPrice}>
                  Place Bid
                </button>
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