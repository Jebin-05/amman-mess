import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import './CheckoutPage.css';

const CheckoutPage = () => {
  const navigate = useNavigate();
  const { items, subtotal, placeOrder } = useCart();

  const handlePlaceOrder = () => {
    if (items.length === 0) return;
    placeOrder();
    navigate('/order-confirmation');
  };

  if (items.length === 0) {
    return (
      <div className="checkout-page">
        <div
          className="checkout-bg"
          style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/BG.JPG)` }}
        />
        <div className="empty-checkout">
          <span className="empty-emoji">🛒</span>
          <h3>Your cart is empty</h3>
          <p>Add some items before checkout</p>
          <button className="browse-btn" onClick={() => navigate('/menu')}>
            Browse Menu
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <div
        className="checkout-bg"
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/BG.JPG)` }}
      />
      <header className="checkout-header">
        <button className="back-btn" onClick={() => navigate('/menu')}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </button>
        <h1>Confirm Order</h1>
      </header>

      <div className="checkout-content">
        <div className="checkout-form">
          <div className="order-summary-section">
            <h2>Order Items ({items.length})</h2>
            <div className="order-items">
              {items.map((item) => (
                <div key={item.id} className="summary-item">
                  <div className="summary-item-image">
                    {item.image ? (
                      <img src={item.image} alt={item.name} />
                    ) : (
                      <div className="summary-item-placeholder" style={{ backgroundColor: item.placeholderColor }}>
                        <span>{item.emoji}</span>
                      </div>
                    )}
                  </div>
                  <div className="summary-item-info">
                    <span className="item-name">{item.name}</span>
                    <span className="item-qty">Qty: {item.quantity}</span>
                  </div>
                  <span className="item-price">₹{item.price * item.quantity}</span>
                </div>
              ))}
            </div>

            <div className="order-totals">
              <div className="total-row grand-total">
                <span>Total</span>
                <span>₹{subtotal}</span>
              </div>
            </div>
          </div>

          <div className="checkout-footer">
            <button className="place-order-btn" onClick={handlePlaceOrder}>
              Place Order - ₹{subtotal}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
