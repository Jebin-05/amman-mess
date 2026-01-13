import React, { useRef, useEffect } from 'react';
import { categories } from '../../data/menuData';
import './CategoryFilter.css';

const CategoryFilter = ({ selectedCategory, onCategoryChange }) => {
  const scrollRef = useRef(null);
  const buttonRefs = useRef({});

  // Scroll to active category when it changes
  useEffect(() => {
    const activeButton = buttonRefs.current[selectedCategory];
    const scrollContainer = scrollRef.current;

    if (activeButton && scrollContainer) {
      const containerRect = scrollContainer.getBoundingClientRect();
      const buttonRect = activeButton.getBoundingClientRect();

      // Check if button is not fully visible
      if (buttonRect.left < containerRect.left || buttonRect.right > containerRect.right) {
        const scrollLeft = activeButton.offsetLeft - scrollContainer.offsetWidth / 2 + activeButton.offsetWidth / 2;
        scrollContainer.scrollTo({
          left: Math.max(0, scrollLeft),
          behavior: 'smooth'
        });
      }
    }
  }, [selectedCategory]);

  // Scroll to beginning on mount - force reset
  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      // Reset scroll immediately
      container.scrollLeft = 0;
      // Also reset after a small delay to handle any race conditions
      const timer = setTimeout(() => {
        container.scrollLeft = 0;
      }, 100);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div className="category-filter">
      <div className="category-scroll" ref={scrollRef}>
        {categories.map((category) => (
          <button
            key={category.id}
            ref={(el) => (buttonRefs.current[category.id] = el)}
            className={`category-pill ${selectedCategory === category.id ? 'active' : ''}`}
            onClick={() => onCategoryChange(category.id)}
            aria-pressed={selectedCategory === category.id}
          >
            <span className="category-emoji" aria-hidden="true">{category.emoji}</span>
            <span className="category-name">{category.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
