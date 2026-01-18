import React from 'react';
import { useCart } from '../../context/CartContext';
import './Homepage.css';

const Homepage = () => {
  const { navigate } = useCart();

  const handleStartOrdering = () => {
    navigate('table-booking');
  };

  return (
    <div className="homepage">
      <div className="hero-section">
        <img src="/Homepage.png" alt="Amman Restaurant" className="background-image" />
        <button className="start-ordering-btn" onClick={handleStartOrdering}>
          Start Ordering
        </button>
      </div>
    </div>
  );
};

export default Homepage;
