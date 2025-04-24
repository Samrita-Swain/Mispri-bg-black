import React, { useState, useEffect } from 'react';
import EmptyCart from './EmptyCart';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real application, you would fetch cart items from an API or local storage
    // For now, we'll simulate an empty cart
    const fetchCartItems = async () => {
      try {
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 500));

        // Set empty cart for now
        setCartItems([]);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching cart items:', error);
        setLoading(false);
      }
    };

    fetchCartItems();
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8 flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#2D7D90]"></div>
      </div>
    );
  }

  // If cart is empty, show the EmptyCart component
  if (cartItems.length === 0) {
    return <EmptyCart />;
  }

  // If cart has items, show the cart items (to be implemented later)
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-6">Your Cart</h1>
      {/* Cart items will be displayed here */}
    </div>
  );
};

export default Cart;
