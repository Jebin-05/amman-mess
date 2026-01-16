import React, { useRef, useState } from 'react';
import { useCart } from '../../context/CartContext';
import QuantitySelector from '../common/QuantitySelector';
import './FoodItemCard.css';

const FoodItemCard = ({ item, onItemClick }) => {
  const { addItem, incrementItem, decrementItem, getItemQuantity, openCart } = useCart();
  const quantity = getItemQuantity(item.id);
  const cardRef = useRef(null);
  const [imageState, setImageState] = useState('loading');

  const handleAddClick = (e) => {
    e.stopPropagation();

    const card = cardRef.current;
    const cardRect = card.getBoundingClientRect();
    const cartIcon = document.querySelector('.cart-button');
    const cartRect = cartIcon.getBoundingClientRect();

    const flyingEl = document.createElement('div');
    flyingEl.className = 'flying-item';
    flyingEl.innerHTML = item.image
      ? `<div class="flying-inner"><img src="${item.image}" alt="${item.name}" style="width:100%;height:100%;object-fit:cover;border-radius:12px;" /></div>`
      : `<div class="flying-inner" style="background: ${item.placeholderColor};"><span>${item.emoji}</span></div>`;
    flyingEl.style.cssText = `
      position: fixed;
      left: ${cardRect.left}px;
      top: ${cardRect.top}px;
      width: ${cardRect.width}px;
      height: 140px;
      z-index: 1000;
      pointer-events: none;
    `;

    const style = document.createElement('style');
    style.textContent = `
      .flying-item .flying-inner {
        width: 100%;
        height: 100%;
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 4rem;
        box-shadow: 0 10px 40px rgba(0,0,0,0.3);
        animation: popOut 0.15s ease-out forwards;
      }
      @keyframes popOut {
        0% { transform: scale(1); }
        100% { transform: scale(1.1); }
      }
      .flying-item.animate .flying-inner {
        animation: flyToCart 0.7s cubic-bezier(0.32, 0, 0.67, 0) forwards;
      }
      @keyframes flyToCart {
        0% {
          transform: scale(1.1);
          border-radius: 12px;
        }
        50% {
          transform: scale(0.6) rotate(20deg);
          border-radius: 50%;
        }
        100% {
          transform: scale(0.2) rotate(40deg);
          border-radius: 50%;
        }
      }
    `;
    document.head.appendChild(style);
    document.body.appendChild(flyingEl);

    const endX = cartRect.left + cartRect.width / 2 - cardRect.width / 2;
    const endY = cartRect.top + cartRect.height / 2 - 70;

    setTimeout(() => {
      flyingEl.classList.add('animate');
      flyingEl.style.transition = 'left 0.7s cubic-bezier(0.32, 0, 0.67, 0), top 0.7s cubic-bezier(0.32, 0, 0.67, 0)';
      flyingEl.style.left = `${endX}px`;
      flyingEl.style.top = `${endY}px`;
    }, 150);

    setTimeout(() => {
      cartIcon.classList.add('cart-bounce');
      setTimeout(() => cartIcon.classList.remove('cart-bounce'), 300);
    }, 700);

    setTimeout(() => {
      flyingEl.remove();
      style.remove();
      addItem(item);
      openCart();
    }, 850);
  };

  const handleIncrement = (e) => {
    e.stopPropagation();
    incrementItem(item.id);
  };

  const handleDecrement = (e) => {
    e.stopPropagation();
    decrementItem(item.id);
  };

  const handleImageLoad = () => {
    setImageState('loaded');
  };

  const handleImageError = () => {
    setImageState('error');
  };

  return (
    <div className="food-item-card" onClick={() => onItemClick(item)} ref={cardRef}>
      <div className="food-image">
        {item.image && imageState !== 'error' ? (
          <>
            <img
              src={item.image}
              alt={item.name}
              className={`food-img ${imageState}`}
              onLoad={handleImageLoad}
              onError={handleImageError}
              loading="lazy"
            />
            {imageState === 'loading' && (
              <div className="food-placeholder" style={{ backgroundColor: item.placeholderColor }}>
                <span className="food-emoji">{item.emoji}</span>
              </div>
            )}
          </>
        ) : (
          <div className="food-placeholder" style={{ backgroundColor: item.placeholderColor }}>
            <span className="food-emoji">{item.emoji}</span>
          </div>
        )}
      </div>

      <div className="food-info">
        <div className="food-header">
          <span className="veg-badge" title="Vegetarian">
            <span className="veg-dot"></span>
          </span>
          <div className="food-name-container">
            <h3 className="food-name">{item.name}</h3>
            {item.tamilName && <span className="food-tamil-name">{item.tamilName}</span>}
          </div>
        </div>

        <p className="food-description">{item.description}</p>

        <div className="food-footer">
          <span className="food-price">₹{item.price}</span>

          {quantity === 0 ? (
            <button className="add-btn" onClick={handleAddClick}>
              ADD
            </button>
          ) : (
            <QuantitySelector
              quantity={quantity}
              onIncrement={handleIncrement}
              onDecrement={handleDecrement}
              size="small"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default FoodItemCard;
