import "../App.css";
import axios from "axios";
import { useState, useEffect } from "react";

function BidCard(props) {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      axios
        .get(`http://localhost:5000/api/v1/user/${props.bid.userId}`)
        .then((response) => {
          setUsername(response.data.user.name);
        })
        .catch((error) => {
          console.error("Error fetching user data", error);
        });
    }
  }, []);

  if (!username) {
    return <p>Loading...</p>;
  }

  const formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    };
    return new Date(dateString).toLocaleString(undefined, options);
  };

  return (
    <div className="bid-card">
      <span>{username}</span>
      <span>
        <strong>{props.bid.amount}</strong>LE
      </span>
      <span>{formatDate(props.bid.placedAt)}</span>
    </div>
  );
}

export default BidCard;
