import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import './ThankYouPage.css';

const ThankYouPage = () => {
  const navigate = useNavigate();
  const { endSession } = useCart();

  useEffect(() => {
    // End the session when this page loads
    endSession();

    // Auto redirect to homepage after 5 seconds
    const timer = setTimeout(() => {
      navigate('/');
    }, 5000);

    return () => clearTimeout(timer);
  }, [endSession, navigate]);

  return (
    <div className="thank-you-page">
      <div className="thank-you-content">
        <div className="logo-animation">
          <div className="logo-circle">
            <img src="/logo.jpg" alt="Amman Restaurant" className="amman-logo" />
          </div>
          <div className="pulse-ring"></div>
          <div className="pulse-ring delay-1"></div>
          <div className="pulse-ring delay-2"></div>
        </div>

        <div className="thank-you-text">
          <h1 className="thank-you-title">Thank You!</h1>
          <p className="thank-you-subtitle">
            For dining with us at
          </p>
          <div className="restaurant-name-container">
            <h2 className="restaurant-name">Amman</h2>
            <p className="restaurant-tagline">Veg Restaurant</p>
          </div>
        </div>

        <div className="thank-you-message">
          <p>We hope you enjoyed your meal!</p>
          <p className="visit-again">Visit us again soon!</p>
        </div>

        <div className="sparkles">
          <span className="sparkle s1">✨</span>
          <span className="sparkle s2">⭐</span>
          <span className="sparkle s3">✨</span>
          <span className="sparkle s4">⭐</span>
          <span className="sparkle s5">✨</span>
        </div>

        <div className="redirect-notice">
          <p>Redirecting to home...</p>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;
