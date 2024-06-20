import "../App.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const formatDate = (dateString) => {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };

  const date = new Date(dateString);
  return new Intl.DateTimeFormat("en-US", options).format(date);
};

const calculateTimeLeft = (targetDateString) => {
  const now = new Date();
  const targetDate = new Date(targetDateString);
  const difference = targetDate - now;

  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  } else {
    timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return timeLeft;
};

function Card(props) {
  const [timeLeft, setTimeLeft] = useState(
    calculateTimeLeft(props.item.endDate)
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(props.item.endDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [props.item.endDate]);

  const color = timeLeft.days < 1 ? "red" : "green";

  return (
    <Link to={`/item/${props.item.id}`} className="card">
      <div className="card-image-container">
        <img
          src={props.item.imagePaths.split(" ")[0]}
          alt="IMG"
          className="card-image"
        />
      </div>

      <div className="card-stats">
        <h3 className="card-title">{props.item.name} </h3>
        <p>
          <strong className="card-price">${props.item.reservedPrice}</strong>
        </p>
        <p className="card-stats-info">
          {`Starting Price: ${props.item.startingPrice}`}
          <br />
          {props.item.buynow
            ? `Buy Now: ${props.item.buyNow}`
            : `Reserved Price: ${props.item.reservedPrice}`}
          <br />
          {`Time Left:`}
          <br />
          <span style={{ color: color }}>
            {timeLeft.days} days {timeLeft.hours} hours {timeLeft.minutes}{" "}
            minutes {timeLeft.seconds} seconds
          </span>
        </p>
      </div>

      <div className="card-buttons">
        <button className="card-bid card-button">Bid</button>
        <button className="card-buy card-button">Buy Now</button>
      </div>
    </Link>
  );
}

export default Card;
