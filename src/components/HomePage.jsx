import "../App.css";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import { useEffect, useState } from "react";

function HomePage() {
  const [items, setItems] = useState({ items: [] });

  useEffect(() => {
    fetch("http://localhost:5000/api/v1/item")
      .then((res) => res.json())
      .then((data) => {
        setItems({ items: data.items });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const cards = items.items.map((item) => <Card key={item.id} item={item} />);

  return (
    <div className="home-page">
      {/* <div className="banner">
        <h1 className="banner-text">Uncover Hidden Treasures</h1>
        <button className="banner-button">View All Auctions</button>
      </div> */}
      <div className="home-categories">
        <h2 className="home-text">Explore Categories</h2>
        <div className="home-categories-list">
          <Link to="/category/electronics" className="home-category-item">
            <div>
              <i className="fa-solid fa-laptop"></i>
              <br />
              Electronics
            </div>
          </Link>
          <Link to="/category/cars" className="home-category-item">
            <div>
              <i className="fa-solid fa-car"></i>
              <br />
              Cars
            </div>
          </Link>
          <Link to="/category/realestate" className="home-category-item">
            <div>
              <i className="fa-solid fa-house-chimney"></i>
              <br />
              Estate
            </div>
          </Link>
        </div>
      </div>

      <div className="home-ongoing-auctions">
        <h2 className="home-text">Ongoing Auctions</h2>
        <div className="home-cards">{cards}</div>
      </div>
    </div>
  );
}

export default HomePage;
