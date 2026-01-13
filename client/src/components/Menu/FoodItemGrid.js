import React from 'react';
import FoodItemCard from './FoodItemCard';
import './FoodItemGrid.css';

const FoodItemGrid = ({ items, onItemClick }) => {
  if (items.length === 0) {
    return (
      <div className="empty-state">
        <span className="empty-emoji">🍽️</span>
        <h3>No items found</h3>
        <p>Try adjusting your search or filter</p>
      </div>
    );
  }

  return (
    <div className="food-item-grid">
      {items.map((item) => (
        <FoodItemCard
          key={item.id}
          item={item}
          onItemClick={onItemClick}
        />
      ))}
    </div>
  );
};

export default FoodItemGrid;
