import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const TrackOrder = () => {
  const [orderId, setOrderId] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would make an API call to track the order
    console.log('Tracking order:', orderId, email);
    // For now, just show an alert
    alert(`Tracking order: ${orderId} with email: ${email}`);
  };

  return (
    <div className="bg-gray-50 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-semibold text-center text-[#ffcc85] mb-8">Track Your Mispri Order</h1>
        
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-medium text-center text-gray-800 mb-6">Track Your Orders</h2>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Enter order ID*"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#ffcc85] focus:border-[#ffcc85]"
                  value={orderId}
                  onChange={(e) => setOrderId(e.target.value)}
                  required
                />
              </div>
              
              <div className="mb-6">
                <input
                  type="email"
                  placeholder="Email ID*"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#ffcc85] focus:border-[#ffcc85]"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-[#ffcc85] text-white py-3 px-4 rounded-md hover:bg-[#ffcc85] transition duration-200"
              >
                Track Order
              </button>
            </form>
          </div>
        </div>
        
        <div className="text-center mt-6">
          <Link to="/" className="text-[#ffcc85] font-medium hover:underline">
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TrackOrder;
