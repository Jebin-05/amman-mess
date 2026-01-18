import React, { createContext, useContext, useReducer, useEffect } from 'react';

const CartContext = createContext();

const initialState = {
  items: [],
  orderedItems: [],
  isCartOpen: false,
  orderNumber: null,
  currentPage: 'home',
  tableNumber: null,
  guestCount: null,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }],
      };
    }
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
      };
    case 'UPDATE_QUANTITY':
      if (action.payload.quantity <= 0) {
        return {
          ...state,
          items: state.items.filter(item => item.id !== action.payload.id),
        };
      }
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };
    case 'INCREMENT_ITEM':
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
    case 'DECREMENT_ITEM': {
      const item = state.items.find(item => item.id === action.payload);
      if (item && item.quantity === 1) {
        return {
          ...state,
          items: state.items.filter(item => item.id !== action.payload),
        };
      }
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      };
    }
    case 'CLEAR_CART':
      return {
        ...state,
        items: [],
      };
    case 'PLACE_ORDER': {
      // Move current cart items to ordered items
      const newOrderedItems = [...state.orderedItems];
      state.items.forEach(cartItem => {
        const existingOrdered = newOrderedItems.find(item => item.id === cartItem.id);
        if (existingOrdered) {
          existingOrdered.quantity += cartItem.quantity;
        } else {
          newOrderedItems.push({ ...cartItem });
        }
      });
      return {
        ...state,
        items: [],
        orderedItems: newOrderedItems,
        orderNumber: action.payload.orderNumber,
      };
    }
    case 'CANCEL_ORDERED_ITEM':
      return {
        ...state,
        orderedItems: state.orderedItems.filter(item => item.id !== action.payload),
      };
    case 'DECREMENT_ORDERED_ITEM': {
      const orderedItem = state.orderedItems.find(item => item.id === action.payload);
      if (orderedItem && orderedItem.quantity === 1) {
        return {
          ...state,
          orderedItems: state.orderedItems.filter(item => item.id !== action.payload),
        };
      }
      return {
        ...state,
        orderedItems: state.orderedItems.map(item =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      };
    }
    case 'INCREMENT_ORDERED_ITEM':
      return {
        ...state,
        orderedItems: state.orderedItems.map(item =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
    case 'END_SESSION':
      return {
        ...state,
        items: [],
        orderedItems: [],
        orderNumber: null,
        tableNumber: null,
        guestCount: null,
      };
    case 'SET_TABLE':
      return {
        ...state,
        tableNumber: action.payload.tableNumber,
        guestCount: action.payload.guestCount,
      };
    case 'TOGGLE_CART':
      return {
        ...state,
        isCartOpen: !state.isCartOpen,
      };
    case 'OPEN_CART':
      return {
        ...state,
        isCartOpen: true,
      };
    case 'CLOSE_CART':
      return {
        ...state,
        isCartOpen: false,
      };
    case 'NAVIGATE':
      return {
        ...state,
        currentPage: action.payload,
      };
    case 'LOAD_CART':
      return {
        ...state,
        items: action.payload.items || [],
        orderedItems: action.payload.orderedItems || [],
        orderNumber: action.payload.orderNumber || null,
        tableNumber: action.payload.tableNumber || null,
        guestCount: action.payload.guestCount || null,
      };
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('amman-cart');
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        dispatch({ type: 'LOAD_CART', payload: parsedCart });
      } catch (e) {
        console.error('Error loading cart from localStorage:', e);
      }
    }
  }, []);

  // Save cart to localStorage on change
  useEffect(() => {
    localStorage.setItem('amman-cart', JSON.stringify({
      items: state.items,
      orderedItems: state.orderedItems,
      orderNumber: state.orderNumber,
      tableNumber: state.tableNumber,
      guestCount: state.guestCount,
    }));
  }, [state.items, state.orderedItems, state.orderNumber, state.tableNumber, state.guestCount]);

  // Computed values for current cart
  const itemCount = state.items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const taxes = Math.round(subtotal * 0.05);
  const total = subtotal + taxes;

  // Computed values for all ordered items (for final bill)
  const orderedItemCount = state.orderedItems.reduce((sum, item) => sum + item.quantity, 0);
  const orderedSubtotal = state.orderedItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const orderedTaxes = Math.round(orderedSubtotal * 0.05);
  const orderedTotal = orderedSubtotal + orderedTaxes;

  const value = {
    items: state.items,
    orderedItems: state.orderedItems,
    orderNumber: state.orderNumber,
    isCartOpen: state.isCartOpen,
    currentPage: state.currentPage,
    tableNumber: state.tableNumber,
    guestCount: state.guestCount,
    itemCount,
    subtotal,
    taxes,
    total,
    orderedItemCount,
    orderedSubtotal,
    orderedTaxes,
    orderedTotal,
    dispatch,
    addItem: (item) => dispatch({ type: 'ADD_ITEM', payload: item }),
    removeItem: (id) => dispatch({ type: 'REMOVE_ITEM', payload: id }),
    updateQuantity: (id, quantity) => dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } }),
    incrementItem: (id) => dispatch({ type: 'INCREMENT_ITEM', payload: id }),
    decrementItem: (id) => dispatch({ type: 'DECREMENT_ITEM', payload: id }),
    clearCart: () => dispatch({ type: 'CLEAR_CART' }),
    placeOrder: () => {
      const orderNumber = 'AMN' + Date.now().toString().slice(-6);
      dispatch({ type: 'PLACE_ORDER', payload: { orderNumber } });
      return orderNumber;
    },
    cancelOrderedItem: (id) => dispatch({ type: 'CANCEL_ORDERED_ITEM', payload: id }),
    decrementOrderedItem: (id) => dispatch({ type: 'DECREMENT_ORDERED_ITEM', payload: id }),
    incrementOrderedItem: (id) => dispatch({ type: 'INCREMENT_ORDERED_ITEM', payload: id }),
    endSession: () => dispatch({ type: 'END_SESSION' }),
    setTable: (tableNumber, guestCount) => dispatch({ type: 'SET_TABLE', payload: { tableNumber, guestCount } }),
    toggleCart: () => dispatch({ type: 'TOGGLE_CART' }),
    openCart: () => dispatch({ type: 'OPEN_CART' }),
    closeCart: () => dispatch({ type: 'CLOSE_CART' }),
    navigate: (page) => dispatch({ type: 'NAVIGATE', payload: page }),
    getItemQuantity: (id) => {
      const item = state.items.find(item => item.id === id);
      return item ? item.quantity : 0;
    },
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export default CartContext;
