import "../App.css";
import { Link } from "react-router-dom";
import { useRef } from "react";

function Header() {
  const navRef = useRef(null);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    // if (navRef.current) {
    navRef.current.classList.toggle("active");

    menuRef.current.classList.toggle("fa-times");
    // }
  };

  return (
    <div>
      <header>
        <h1 className="header-title">ElMazad</h1>

        <nav ref={navRef}>
          <Link to="/" className="nav-item">
            Home
          </Link>
          <Link to="/mybids" className="nav-item">
            My Bids
          </Link>
          <Link to="/about" className="nav-item">
            About
          </Link>
          <Link to="/contact" className="nav-item">
            Contact
          </Link>
        </nav>

        {/* <div className="header-search">
          <input
            type="text"
            id="search-bar"
            placeholder="What are you looking for?"
          ></input>
          <label htmlFor="search-bar" className="fas fa-search"></label>
        </div> */}
        <div className="header-icons">
          <div class="nav-item fa-solid fa-earth-americas header-lang"></div>
          <Link
            to="/profile"
            className="nav-item fas fa-user-circle header-profile"
          ></Link>
        </div>

        <div
          id="menu-bar"
          className="fas fa-bars"
          onClick={toggleMenu}
          ref={menuRef}
        ></div>
      </header>
    </div>
  );
}

export default Header;
