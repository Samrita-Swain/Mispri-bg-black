import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import apiService from '../../services/api';
import './Cart.css';

const EmptyCart = () => {
  const [categories, setCategories] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        // Fetch categories with images from the database via API service
        const data = await apiService.getCategoriesWithImages();

        if (data && data.length > 0) {
          setCategories(data);
        } else {
          console.warn('No categories returned from API');
        }
      } catch (error) {
        console.error('Error fetching categories:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="empty-cart-main">
        {/* Empty Cart Message with Illustration */}
        <div className="flex flex-col md:flex-row items-center justify-center mb-10 gap-8">
          {/* Left side - Illustration */}
          <div className="w-full max-w-xs flex justify-center">
            <img
              src="/cart-image.svg"
              alt="Empty Cart"
              className="w-[60%] h-auto"
            />
          </div>

          {/* Right side - Message */}
          <div className="text-left">
            <h2 className="text-2xl item-left font-semibold !text-[#f5f5f5] mb-2">Hey, cart bag seems to be empty,<br />Let's add some items.</h2>
          </div>
        </div>

        {/* Continue Shopping Button */}
        <div className="flex justify-center mb-12">
          <Link
            to="/"
            className="continue-shopping-button bg-[#2D7D90] text-white px-8 py-3 rounded font-medium hover:bg-[#236A7A] transition duration-300 uppercase text-center"
          >
            Continue Shopping
          </Link>
        </div>

        {/* Browse Categories Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-8">Browse Through Our Best Categories</h2>
          {loading ? (
            <div className="flex justify-center items-center h-40">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#2D7D90]"></div>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {categories.length > 0 ? (
                categories.map((category, index) => (
                  <div key={index} className="category-item flex flex-col items-center">
                    <Link
                      to={category.url}
                      className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition duration-300"
                    >
                      <div className="category-image-container">
                        <img
                          src={category.image}
                          alt={category.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "https://www.floweraura.com/sites/default/files/styles/200x200/public/placeholder.jpg";
                          }}
                        />
                      </div>
                    </Link>
                    <div className="p-3 text-center">
                      <h3 className="font-medium text-gray-800">{category.name}</h3>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-6 text-center py-8">
                  <p className="text-gray-500">No categories found. Please try again later.</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmptyCart;
