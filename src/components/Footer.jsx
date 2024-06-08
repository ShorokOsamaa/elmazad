import "../App.css";

function Footer() {
  return (
    <footer>
      <div className="footer-row-1">
        <div className="footer-col">
          <h5>Services</h5>
          <p>Live auctions</p>
          <p>Buy now</p>
          <p>Start auctions</p>
        </div>
        <div className="footer-col">
          <h5>Account</h5>
          <p>My Account</p>
          <p>Login / Register</p>
        </div>
        <div className="footer-col">
          <h5>Quick Link</h5>
          <p>Privacy Policy</p>
          <p>Terms Of Use</p>
          <p>FAQ</p>
        </div>
      </div>

      <hr style={{ margin: "0.8rem 0" }} />

      <div className="footer-row-2">
        <h2 className="footer-title">ElMazad</h2>
        <div className="footer-info">
          <i className="fa-solid fa-phone"></i>
          <p className="footer-info-txt"> 19199</p>
        </div>
        <div className="footer-info">
          <i className="fa-regular fa-envelope"></i>
          <p className="footer-info-txt"> support@elmazad.com</p>
        </div>
        <div>
          <i className="fa-regular fa-copyright"></i> All Rights Reserved
        </div>
      </div>
    </footer>
  );
}

export default Footer;
