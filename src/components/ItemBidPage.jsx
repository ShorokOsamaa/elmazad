import "../App.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import React, { useRef, useEffect, useState } from "react";
import BidCard from "./BidCard";

function ItemBid() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [isBidOpen, setIsBidOpen] = useState(true);
  const [amount, setAmount] = useState("");
  const [bids, setBids] = useState([]);

  const fetchItemData = async () => {
    fetch(`http://localhost:5000/api/v1/item/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setItem(data.item);
        setBids(data.item.bids);
        const now = new Date();
        setIsBidOpen(
          now >= new Date(data.item.startDate) &&
            now <= new Date(data.item.endDate)
        );
      })
      .catch((error) => {
        console.error("Error fetching item details:", error);
      });
  };

  useEffect(() => {
    fetchItemData();
  }, [id]);

  console.log("Item--->", item);

  const handleInputChange = (e) => {
    const { value } = e.target;
    setAmount(value);
  };

  const bidsCards = bids.map((bid) => <BidCard key={bid.id} bid={bid} />);

  const handleBidSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    const newBid = parseFloat(amount);
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("user must signin");
    }

    if (newBid > item.startingPrice) {
      // setCurrentBid(newBid);
      const response = await axios.post(
        `http://localhost:5000/api/v1/item/${id}/bid`,
        {
          amount: newBid,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("request sent:", response);
      setAmount("");
      fetchItemData();
    } else {
      setErrorMessage("Bid must be higher than current bid and starting price");
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

  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <div className="item-page">
      <div className="item-img-container">
        <img src={item.imagePaths.split(" ")[0]} alt={item.description} />
      </div>
      <div className="item-details-container">
        <div className="item-details">
          <h2>{item.name}</h2>
          <h4>{item.description}</h4>
          <div className="item-bid-details">
            <span>Starting Price: {item.startingPrice}LE</span>
            <span>Reserved Price: {item.reservedPrice}LE</span>
          </div>
          <div className="item-bid-details">
            <span>
              Start Date: {new Date(item.startDate).toLocaleDateString()}
            </span>
            <span>End Date: {new Date(item.endDate).toLocaleDateString()}</span>
          </div>

          {/* <div>
            <p>{item.details}</p>
          </div> */}

          {isBidOpen ? (
            <div className="bid-section">
              <div className="item-bids">
                {bidsCards.length ? bidsCards : "Be the first to make a bid"}
              </div>
              <form onSubmit={handleBidSubmit}>
                <div className="bid-form">
                  <input
                    type="number"
                    className="bid-input"
                    onChange={handleInputChange}
                    value={amount}
                  />

                  <button
                    type="submit"
                    id="place-bid-btn"
                    disabled={amount >= item.reservedPrice}
                  >
                    Place Bid
                  </button>
                </div>
                <span className="error-message">{errorMessage}</span>
              </form>
              {item.buyNowPrice && (
                <button id="buy-now-btn" onClick={buyNow}>
                  Buy now at {item.buyNowPrice}LE
                </button>
              )}
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
