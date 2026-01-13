import React, { useState, useMemo } from 'react';
import Header from '../Layout/Header';
import CategoryFilter from './CategoryFilter';
import FoodItemGrid from './FoodItemGrid';
import CartSidebar from '../Cart/CartSidebar';
import ItemDetailsModal from '../common/ItemDetailsModal';
import { menuItems } from '../../data/menuData';
import { useCart } from '../../context/CartContext';
import './MenuPage.css';

const MenuPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedItem, setSelectedItem] = useState(null);
  const { isCartOpen, closeCart } = useCart();

  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      const matchesSearch = item.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === 'all' || item.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  return (
    <div className={`menu-page ${isCartOpen ? 'cart-open' : ''}`}>
      <div
        className="menu-bg"
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/BG.JPG)` }}
      />
      <Header
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      <main className="menu-content">
        <CategoryFilter
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        <FoodItemGrid
          items={filteredItems}
          onItemClick={handleItemClick}
        />
      </main>

      <CartSidebar isOpen={isCartOpen} onClose={closeCart} />

      {selectedItem && (
        <ItemDetailsModal
          item={selectedItem}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default MenuPage;
