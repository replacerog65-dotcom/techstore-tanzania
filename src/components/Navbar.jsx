import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { totalQuantity } = useCart();

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <Link to="/" className="navbar__logo" onClick={closeMenu}>
          <span className="navbar__logo-mark">T</span>
          <span className="navbar__logo-text">
            TechStore <strong>Tanzania</strong>
          </span>
        </Link>

        <nav className={`navbar__links ${menuOpen ? "is-open" : ""}`}>
          <NavLink to="/" end className="navbar__link" onClick={closeMenu}>
            Home
          </NavLink>
          <NavLink to="/products" className="navbar__link" onClick={closeMenu}>
            Products
          </NavLink>
          <NavLink to="/cart" className="navbar__link" onClick={closeMenu}>
            Cart
          </NavLink>
          <NavLink to="/contact" className="navbar__link" onClick={closeMenu}>
            Contact
          </NavLink>
        </nav>

        <div className="navbar__actions">
          <Link to="/cart" className="navbar__cart" onClick={closeMenu} aria-label="View cart">
            <span className="navbar__cart-icon">🛒</span>
            {totalQuantity > 0 && (
              <span className="navbar__cart-badge">{totalQuantity}</span>
            )}
          </Link>
          <button
            className="navbar__toggle"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
