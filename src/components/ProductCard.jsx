import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";
import useTilt from "../hooks/useTilt.js";
import { formatPrice, FALLBACK_IMAGE } from "../utils/format.js";

// Render a 5-star rating row from a numeric rating (e.g. 4.5).
function StarRating({ rating }) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    let className = "star";
    if (rating >= i) className += " star--full";
    else if (rating >= i - 0.5) className += " star--half";
    stars.push(
      <span key={i} className={className} aria-hidden="true">
        ★
      </span>
    );
  }
  return (
    <span className="rating" title={`${rating} out of 5`}>
      {stars}
      <span className="rating__value">{rating.toFixed(1)}</span>
    </span>
  );
}

/**
 * Reusable product card.
 * - variant="featured" renders a "View Product" link (used on the Home page).
 * - variant="catalog" (default) renders an "Add to Cart" button.
 */
export default function ProductCard({ product, variant = "catalog" }) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);
  const tiltRef = useTilt({ max: 8, scale: 1.03 });

  function handleAdd() {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1400);
  }

  return (
    <article className="product-card product-card--tilt" ref={tiltRef}>
      <div className="product-card__media">
        <span className="product-card__category">{product.category}</span>
        <img
          src={product.image}
          alt={product.name}
          className="product-card__image"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = FALLBACK_IMAGE;
          }}
        />
      </div>

      <div className="product-card__body">
        <StarRating rating={product.rating} />
        <h3 className="product-card__name">{product.name}</h3>
        <p className="product-card__desc">{product.description}</p>

        <div className="product-card__footer">
          <span className="product-card__price">{formatPrice(product.price)}</span>
          {variant === "featured" ? (
            <Link to="/products" className="btn btn--primary btn--sm">
              View Product
            </Link>
          ) : (
            <button
              className={`btn btn--primary btn--sm ${added ? "btn--success" : ""}`}
              onClick={handleAdd}
            >
              {added ? "✓ Added" : "Add to Cart"}
            </button>
          )}
        </div>
      </div>
    </article>
  );
}
