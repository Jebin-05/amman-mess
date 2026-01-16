import React, { useState } from 'react';
import './CategoryCard.css';

const CategoryCard = ({ category, onClick, itemCount }) => {
  const [imageState, setImageState] = useState('loading');

  const handleImageLoad = () => {
    setImageState('loaded');
  };

  const handleImageError = () => {
    setImageState('error');
  };

  return (
    <div className="category-card" onClick={() => onClick(category.id)}>
      <div className="category-card-image">
        {category.image && imageState !== 'error' ? (
          <>
            <img
              src={category.image}
              alt={category.name}
              className={`category-img ${imageState}`}
              onLoad={handleImageLoad}
              onError={handleImageError}
              loading="lazy"
            />
            {imageState === 'loading' && (
              <div className="category-placeholder">
                <span className="category-card-emoji">{category.emoji}</span>
              </div>
            )}
          </>
        ) : (
          <div className="category-placeholder">
            <span className="category-card-emoji">{category.emoji}</span>
          </div>
        )}
        <div className="category-card-overlay" />
      </div>

      <div className="category-card-info">
        <h3 className="category-card-name">{category.name}</h3>
        {category.tamilName && (
          <span className="category-card-tamil">{category.tamilName}</span>
        )}
        <span className="category-card-count">{itemCount} items</span>
      </div>
    </div>
  );
};

export default CategoryCard;
