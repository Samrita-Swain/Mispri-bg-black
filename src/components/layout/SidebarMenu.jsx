import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaUser, FaTruck, FaHeart, FaPhoneAlt, FaWhatsapp, FaChevronRight } from 'react-icons/fa';
import './SidebarMenu.css';

const SidebarMenu = ({ isOpen, onClose }) => {
  const sidebarRef = useRef(null);
  const [categories, setCategories] = useState([
    { id: 1, name: 'Express Delivery', url: '/express-delivery' },
    { id: 2, name: 'Flowers', url: '/flowers' },
    { id: 3, name: 'Cakes', url: '/cakes' },
    { id: 4, name: 'Birthday', url: '/birthday' },
    { id: 5, name: 'Anniversary', url: '/anniversary' },
    { id: 6, name: 'Gifts', url: '/gifts' },
  ]);

  const quickLinks = [
    { id: 1, name: 'Track Order', icon: <FaTruck className="w-5 h-5 mr-3 text-[#2D7D90]" />, url: '/track-order' },
    { id: 2, name: 'My Favourites', icon: <FaHeart className="w-5 h-5 mr-3 text-[#2D7D90]" />, url: '/favourites' },
    { id: 3, name: 'Contact Us', icon: <FaPhoneAlt className="w-5 h-5 mr-3 text-[#2D7D90]" />, url: '/contact-us' },
    { id: 4, name: 'WhatsApp', icon: <FaWhatsapp className="w-5 h-5 mr-3 text-[#2D7D90]" />, url: '/whatsapp' },
  ];

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target) && isOpen) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  // Prevent body scrolling when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="sidebar-overlay">
      <div
        ref={sidebarRef}
        className="sidebar-container"
      >
        {/* Header */}
        <div className="sidebar-header">
          <button
            onClick={onClose}
            className="sidebar-close-btn"
          >
            <FaArrowLeft className="w-5 h-5" />
          </button>

          <div className="user-info">
            <div className="user-avatar">
              <FaUser className="w-6 h-6 text-white" />
            </div>
            <div className="user-details">
              <p className="user-greeting">Hey Guest!</p>
              <Link to="/login" className="user-login" onClick={onClose}>
                Login In Now!
              </Link>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="quick-links">
          {quickLinks.map((link) => (
            <Link
              key={link.id}
              to={link.url}
              className="quick-link-item"
              onClick={onClose}
            >
              {link.icon}
              <span>{link.name}</span>
            </Link>
          ))}
        </div>

        {/* Categories */}
        <div className="categories">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={category.url}
              className="category-item"
              onClick={onClose}
            >
              <span>{category.name}</span>
              <FaChevronRight className="w-4 h-4 text-gray-400" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SidebarMenu;
