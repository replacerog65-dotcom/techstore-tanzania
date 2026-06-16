import { useState } from "react";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem.jsx";
import { useCart } from "../context/CartContext.jsx";
import { formatPrice } from "../utils/format.js";

export default function Cart() {
  const { items, subtotal, deliveryFee, total, clearCart } = useCart();
  const [checkedOut, setCheckedOut] = useState(false);

  function handleCheckout() {
    // Frontend-only simulation — no real payment is processed.
    setCheckedOut(true);
    clearCart();
  }

  if (checkedOut) {
    return (
      <section className="section">
        <div className="container">
          <div className="empty-state">
            <span className="empty-state__icon">🎉</span>
            <h2>Thank you for your order!</h2>
            <p>
              This is a demo checkout — no payment was processed. Your simulated
              order has been placed successfully.
            </p>
            <Link to="/products" className="btn btn--primary">
              Continue Shopping
            </Link>
          </div>
        </div>
      </section>
    );
  }

  if (items.length === 0) {
    return (
      <section className="section">
        <div className="container">
          <div className="empty-state">
            <span className="empty-state__icon">🛒</span>
            <h2>Your cart is empty</h2>
            <p>Looks like you haven't added anything yet.</p>
            <Link to="/products" className="btn btn--primary">
              Start Shopping
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section">
      <div className="container">
        <div className="page-header">
          <h1 className="page-header__title">Shopping Cart</h1>
          <p className="page-header__subtitle">
            Review your items before checking out.
          </p>
        </div>

        <div className="cart-layout">
          <div className="cart-list">
            <div className="cart-list__head">
              <span>Product</span>
              <span>Quantity</span>
              <span>Total</span>
              <span />
            </div>
            {items.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}

            <button className="cart-list__clear" onClick={clearCart}>
              Clear Cart
            </button>
          </div>

          <aside className="cart-summary">
            <h2 className="cart-summary__title">Order Summary</h2>
            <div className="cart-summary__row">
              <span>Subtotal</span>
              <span>{formatPrice(subtotal)}</span>
            </div>
            <div className="cart-summary__row">
              <span>Delivery Fee</span>
              <span>{formatPrice(deliveryFee)}</span>
            </div>
            <div className="cart-summary__row cart-summary__row--total">
              <span>Total</span>
              <span>{formatPrice(total)}</span>
            </div>
            <button className="btn btn--accent btn--block" onClick={handleCheckout}>
              Proceed to Checkout
            </button>
            <Link to="/products" className="cart-summary__continue">
              ← Continue Shopping
            </Link>
          </aside>
        </div>
      </div>
    </section>
  );
}
