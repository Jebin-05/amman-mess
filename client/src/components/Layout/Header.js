import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import './Header.css';

const Header = ({ onSearchChange, searchQuery }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { itemCount, toggleCart } = useCart();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleLogoClick = () => {
    navigate('/');
  };

  const handleCartClick = () => {
    if (window.innerWidth < 768) {
      navigate('/cart');
    } else {
      toggleCart();
    }
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const isMenuPage = location.pathname === '/menu';

  return (
    <header className="header">
      <div className="header-content">
        <div className="header-left">
          <div className="logo" onClick={handleLogoClick}>
            <img src="/logo.jpg" alt="Amman" className="logo-image" />
            <div className="logo-text-container">
              <span className="logo-text">Amman</span>
              <span className="logo-tagline">Pure Veg Restaurant</span>
            </div>
          </div>
        </div>

        {isMenuPage && (
          <div className={`header-center ${isSearchOpen ? 'search-open' : ''}`}>
            <div className="search-container">
              <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
              <input
                type="text"
                placeholder="Search for dishes..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="search-input"
              />
              {searchQuery && (
                <button className="clear-search" onClick={() => onSearchChange('')}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
          </div>
        )}

        <div className="header-right">
          {isMenuPage && (
            <button className="search-toggle" onClick={toggleSearch}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
            </button>
          )}
          <button className="cart-button" onClick={handleCartClick}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
            {itemCount > 0 && <span className="cart-badge">{itemCount}</span>}
          </button>
        </div>
      </div>

      {isMenuPage && isSearchOpen && (
        <div className="mobile-search">
          <input
            type="text"
            placeholder="Search for dishes..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="mobile-search-input"
            autoFocus
          />
          {searchQuery && (
            <button className="clear-search" onClick={() => onSearchChange('')}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
