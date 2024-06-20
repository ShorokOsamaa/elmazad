import "../App.css";
import { useParams } from "react-router-dom";
import Card from "../components/Card";
import { useEffect, useState } from "react";

function CategoryPage() {
  const { category } = useParams();
  const [items, setItems] = useState({ items: [] });

  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/item/category/${category}`)
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
    <div className="category-page">
      <div className="home-ongoing-auctions">
        <h2 className="home-text">{category}</h2>
        <div className="home-cards">{cards}</div>
      </div>
    </div>
  );
}

export default CategoryPage;
