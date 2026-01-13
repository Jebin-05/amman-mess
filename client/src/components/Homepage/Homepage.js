import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Homepage.css';

const Homepage = () => {
  const navigate = useNavigate();

  const handleStartOrdering = () => {
    navigate('/menu');
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
