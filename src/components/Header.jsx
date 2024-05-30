import "../App.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <h1>Header</h1>
      <Link to="/" className="nav-item">
        Home
      </Link>
      <Link to="/about" className="nav-item">
        About
      </Link>
      <Link to="/login" className="nav-item">
        Login
      </Link>
    </div>
  );
}

export default Header;
