import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__col">
          <Link to="/" className="footer__logo">
            <span className="navbar__logo-mark">T</span>
            <span>TechStore Tanzania</span>
          </Link>
          <p className="footer__about">
            Your trusted destination for the latest laptops, smartphones,
            accessories and smart devices at affordable prices.
          </p>
          <div className="footer__social">
            <a href="#" aria-label="Facebook" className="footer__social-link">f</a>
            <a href="#" aria-label="Twitter / X" className="footer__social-link">𝕏</a>
            <a href="#" aria-label="Instagram" className="footer__social-link">◎</a>
            <a href="#" aria-label="LinkedIn" className="footer__social-link">in</a>
          </div>
        </div>

        <div className="footer__col">
          <h4 className="footer__heading">Quick Links</h4>
          <ul className="footer__list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/cart">Cart</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4 className="footer__heading">Categories</h4>
          <ul className="footer__list">
            <li><Link to="/products">Laptops</Link></li>
            <li><Link to="/products">Smartphones</Link></li>
            <li><Link to="/products">Accessories</Link></li>
            <li><Link to="/products">Smart Devices</Link></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4 className="footer__heading">Contact</h4>
          <ul className="footer__list footer__contact">
            <li>📍 Dodoma, Tanzania</li>
            <li>📞 +255 712 345 678</li>
            <li>✉️ support@techstore.co.tz</li>
            <li>🕘 Mon – Sat, 8:00 – 18:00</li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <p>© {new Date().getFullYear()} TechStore Tanzania. All rights reserved.</p>
          <p className="footer__credit">Built with React — frontend demo project.</p>
        </div>
      </div>
    </footer>
  );
}
