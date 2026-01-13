import React from 'react';
import { CartProvider, useCart } from './context/CartContext';
import Homepage from './components/Homepage/Homepage';
import MenuPage from './components/Menu/MenuPage';
import CartPage from './components/Cart/CartPage';
import CheckoutPage from './components/Checkout/CheckoutPage';
import OrderConfirmation from './components/Order/OrderConfirmation';
import ThankYouPage from './components/ThankYou/ThankYouPage';
import './App.css';

const AppContent = () => {
  const { currentPage } = useCart();

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Homepage />;
      case 'menu':
        return <MenuPage />;
      case 'cart':
        return <CartPage />;
      case 'checkout':
        return <CheckoutPage />;
      case 'order-confirmation':
        return <OrderConfirmation />;
      case 'thank-you':
        return <ThankYouPage />;
      default:
        return <Homepage />;
    }
  };

  return (
    <div className="App">
      {renderPage()}
    </div>
  );
};

function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}

export default App;
