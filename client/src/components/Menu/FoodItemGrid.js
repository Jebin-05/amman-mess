import React, { useMemo } from 'react';
import FoodItemCard from './FoodItemCard';
import CategoryCard from './CategoryCard';
import { categories, menuItems } from '../../data/menuData';
import './FoodItemGrid.css';
import './CategoryCard.css';

const FoodItemGrid = ({ items, onItemClick, selectedCategory, onCategoryChange }) => {
  // Calculate item counts for each category
  const categoryItemCounts = useMemo(() => {
    const counts = {};
    menuItems.forEach(item => {
      counts[item.category] = (counts[item.category] || 0) + 1;
    });
    return counts;
  }, []);

  // Filter categories (exclude 'all')
  const displayCategories = categories.filter(cat => cat.id !== 'all');

  // Show category grid when 'all' is selected and no search query
  if (selectedCategory === 'all' && items.length === menuItems.length) {
    return (
      <div className="category-grid">
        <h2 className="category-grid-title">Explore Our Menu</h2>
        <p className="category-grid-subtitle">What would you like to eat today?</p>
        {displayCategories.map((category) => (
          <CategoryCard
            key={category.id}
            category={category}
            onClick={onCategoryChange}
            itemCount={categoryItemCounts[category.id] || 0}
          />
        ))}
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="empty-state">
        <span className="empty-emoji">🍽️</span>
        <h3>No items found</h3>
        <p>Try adjusting your search or filter</p>
      </div>
    );
  }

  // Get current category info for header
  const currentCategory = categories.find(cat => cat.id === selectedCategory);

  return (
    <div className="food-grid-container">
      {selectedCategory !== 'all' && currentCategory && (
        <div className="category-header">
          <button className="back-to-categories" onClick={() => onCategoryChange('all')}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            All Categories
          </button>
          <div className="category-header-info">
            <h2 className="category-header-title">
              <span className="category-header-emoji">{currentCategory.emoji}</span>
              {currentCategory.name}
            </h2>
            {currentCategory.tamilName && (
              <span className="category-header-tamil">{currentCategory.tamilName}</span>
            )}
            <span className="category-header-count">{items.length} items</span>
          </div>
        </div>
      )}
      <div className="food-item-grid">
        {items.map((item) => (
          <FoodItemCard
            key={item.id}
            item={item}
            onItemClick={onItemClick}
          />
        ))}
      </div>
    </div>
  );
};

export default FoodItemGrid;
