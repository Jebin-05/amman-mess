import React from 'react';
import { useCart } from '../../context/CartContext';
import CartItem from './CartItem';
import CartSummary from './CartSummary';
import './CartPage.css';

const CartPage = () => {
  const { items, itemCount, total, navigate } = useCart();

  const handleCheckout = () => {
    navigate('checkout');
  };

  const handleBackToMenu = () => {
    navigate('menu');
  };

  return (
    <div className="cart-page">
      <div
        className="cart-bg"
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/ocbg.JPG)` }}
      />
      <header className="cart-header">
        <button className="back-btn" onClick={handleBackToMenu}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </button>
        <h1>Your Cart ({itemCount})</h1>
      </header>

      {items.length === 0 ? (
        <div className="empty-cart-page">
          <span className="empty-cart-emoji">🛒</span>
          <h3>Your cart is empty</h3>
          <p>Looks like you haven't added anything yet</p>
          <button className="browse-menu-btn" onClick={handleBackToMenu}>
            Browse Menu
          </button>
        </div>
      ) : (
        <>
          <div className="cart-items-list">
            {items.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          <div className="cart-page-footer">
            <CartSummary />
            <button className="checkout-btn" onClick={handleCheckout}>
              Proceed to Checkout • ₹{total}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
