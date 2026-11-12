import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Checkout({ cart, clearCart }) {
  const navigate = useNavigate();
  const [status, setStatus] = useState('idle'); // 'idle', 'processing', 'success'
  const [orderId, setOrderId] = useState('');
  
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0) + 15.00;

  const handlePay = (e) => {
    e.preventDefault();
    setStatus('processing');

    fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ cart, total })
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setOrderId(data.orderId);
          setStatus('success');
          clearCart();
        }
      });
  };

  if (status === 'success') {
    return (
      <div className="checkout-success">
        <div className="success-icon">✓</div>
        <h1>Payment Successful!</h1>
        <p>Thank you for your order. Your order ID is <strong>{orderId}</strong>.</p>
        <button className="btn-primary" onClick={() => navigate('/')}>Return to Store</button>
      </div>
    );
  }

  return (
    <div className="checkout-container">
      <h2>Secure Checkout</h2>
      <form className="checkout-form" onSubmit={handlePay}>
        <div className="form-group">
          <label>Full Name</label>
          <input type="text" placeholder="John Doe" required disabled={status === 'processing'} />
        </div>
        <div className="form-group">
          <label>Email Address</label>
          <input type="email" placeholder="john@example.com" required disabled={status === 'processing'} />
        </div>
        <div className="form-group">
          <label>Shipping Address</label>
          <input type="text" placeholder="123 Main St, City, Country" required disabled={status === 'processing'} />
        </div>
        <div className="form-group">
          <label>Card Details</label>
          <input type="text" placeholder="**** **** **** 4242" required disabled={status === 'processing'} />
        </div>
        
        <button type="submit" className="btn-checkout" disabled={status === 'processing'}>
          {status === 'processing' ? 'Processing Payment...' : `Pay $${total.toFixed(2)}`}
        </button>
      </form>
    </div>
  );
}

export default Checkout;