import { useNavigate } from 'react-router-dom';

function Cart({ cart, updateQuantity, removeFromCart }) {
  const navigate = useNavigate();
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = cart.length > 0 ? 15.00 : 0;
  const total = subtotal + shipping;

  if (cart.length === 0) {
    return (
      <div className="empty-cart">
        <h2>Your cart is empty</h2>
        <button className="btn-primary" onClick={() => navigate('/')}>Continue Shopping</button>
      </div>
    );
  }

  return (
    <div className="cart-layout">
      <div className="cart-items">
        <h2>Shopping Cart</h2>
        {cart.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} />
            <div className="item-details">
              <h4>{item.name}</h4>
              <p>${item.price.toFixed(2)}</p>
            </div>
            <div className="quantity-controls">
              <button onClick={() => updateQuantity(item.id, -1)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => updateQuantity(item.id, 1)}>+</button>
            </div>
            <button className="btn-remove" onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <h3>Order Summary</h3>
        <div className="summary-row"><span>Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
        <div className="summary-row"><span>Shipping</span><span>${shipping.toFixed(2)}</span></div>
        <div className="summary-row total"><span>Total</span><span>${total.toFixed(2)}</span></div>
        <button className="btn-checkout" onClick={() => navigate('/checkout')}>
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;