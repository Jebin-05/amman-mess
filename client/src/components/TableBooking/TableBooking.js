import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import './TableBooking.css';

const TableBooking = () => {
  const { setTable, navigate } = useCart();
  const [selectedSofas, setSelectedSofas] = useState([]);

  // Sofas: A (top - 2 seats), B (bottom - 2 seats)
  const toggleSofa = (sofa) => {
    if (selectedSofas.includes(sofa)) {
      setSelectedSofas(selectedSofas.filter(s => s !== sofa));
    } else {
      setSelectedSofas([...selectedSofas, sofa]);
    }
  };

  const getSide = () => {
    if (selectedSofas.includes('A') && selectedSofas.includes('B')) return 'A & B';
    if (selectedSofas.includes('A')) return 'A';
    if (selectedSofas.includes('B')) return 'B';
    return null;
  };

  const getTotalSeats = () => {
    return selectedSofas.length * 2; // Each sofa has 2 seats
  };

  const handleConfirm = () => {
    if (selectedSofas.length > 0) {
      setTable(getSide(), getTotalSeats());
      navigate('menu');
    }
  };

  const handleBack = () => {
    navigate('home');
  };

  return (
    <div className="table-booking">
      <div className="booking-bg" style={{ backgroundImage: 'url(/BG.JPG)' }}></div>

      <header className="booking-header">
        <button className="back-btn" onClick={handleBack}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </button>
        <div className="header-title">
          <img src="/logo.jpg" alt="Amman" className="header-logo" />
          <h1>Select Your Seat</h1>
        </div>
      </header>

      <div className="booking-content">
        <div className="table-layout">
          {/* Sofa A - Top (flipped) */}
          <div
            className={`sofa sofa-top ${selectedSofas.includes('A') ? 'selected' : ''}`}
            onClick={() => toggleSofa('A')}
          >
            <span className="sofa-label">A</span>
            {selectedSofas.includes('A') && <span className="check">✓</span>}
          </div>

          {/* The Table */}
          <div className="table-surface">
            <span>TABLE</span>
          </div>

          {/* Sofa B - Bottom */}
          <div
            className={`sofa ${selectedSofas.includes('B') ? 'selected' : ''}`}
            onClick={() => toggleSofa('B')}
          >
            <span className="sofa-label">B</span>
            {selectedSofas.includes('B') && <span className="check">✓</span>}
          </div>
        </div>
      </div>

      <div className="bottom-panel">
        {selectedSofas.length > 0 ? (
          <div className="confirm-row">
            <div className="confirm-info">
              <span className="confirm-table">Seat {getSide()}</span>
              <span className="confirm-guests">{getTotalSeats()} Seats</span>
            </div>
            <button className="confirm-btn" onClick={handleConfirm}>
              Continue
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        ) : (
          <p className="hint">Select a seat to continue</p>
        )}
      </div>
    </div>
  );
};

export default TableBooking;
