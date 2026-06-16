import { useCart } from "../context/CartContext.jsx";
import { formatPrice, FALLBACK_IMAGE } from "../utils/format.js";

export default function CartItem({ item }) {
  const { updateQuantity, removeFromCart } = useCart();
  const lineTotal = item.price * item.quantity;

  return (
    <div className="cart-item">
      <img
        src={item.image}
        alt={item.name}
        className="cart-item__image"
        onError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.src = FALLBACK_IMAGE;
        }}
      />

      <div className="cart-item__info">
        <h3 className="cart-item__name">{item.name}</h3>
        <span className="cart-item__category">{item.category}</span>
        <span className="cart-item__unit">{formatPrice(item.price)} each</span>
      </div>

      <div className="cart-item__qty">
        <button
          aria-label="Decrease quantity"
          onClick={() => updateQuantity(item.id, item.quantity - 1)}
        >
          −
        </button>
        <span>{item.quantity}</span>
        <button
          aria-label="Increase quantity"
          onClick={() => updateQuantity(item.id, item.quantity + 1)}
        >
          +
        </button>
      </div>

      <div className="cart-item__total">{formatPrice(lineTotal)}</div>

      <button
        className="cart-item__remove"
        aria-label={`Remove ${item.name} from cart`}
        onClick={() => removeFromCart(item.id)}
      >
        ✕
      </button>
    </div>
  );
}
