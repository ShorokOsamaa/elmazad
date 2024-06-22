import "../App.css";
import { Link } from "react-router-dom";



function PurchasedCard(props) {
  return (
    <Link to={`/item/${props.item.id}`}  className="card " id="Pcard">
      <div className="card-image-container">
        <img
          src={props.item.imagePaths.split(" ")[0]}
          alt="IMG"
          className="card-image"
        />
      </div>

      <div className="card-stats">
        <h3 className="card-title">{props.item.name} </h3>

        <p className="card-stats-info">
          {`Starting Price: ${props.item.startingPrice}`}
          <br />
          {`Purchased Price: ${props.item.PurchasedPrice}`}
          <br />
          {`Purchased Date: ${props.item.PurchasedDate}`}
        </p>
      </div>

      <div className="card-buttons">
        <button className="card-show card-button">Show Details</button>
      </div>
    </Link>
  );
}

export default PurchasedCard;
