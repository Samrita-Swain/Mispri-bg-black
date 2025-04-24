import { useState, useEffect, useRef, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaShoppingCart, FaGift, FaUser, FaBars, FaTimes, FaEllipsisV, FaHeart, FaWhatsapp, FaQuestion } from 'react-icons/fa';
import SignInModal from '../Auth/SignInModal';
// Uncomment if you need to fetch menu items from API
// import apiService from '../../services/api';

import './Header.css';
import '../styles/HoverEffects.css';

const Header = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [moreMenuOpen, setMoreMenuOpen] = useState(false);
  const [desktopMoreMenuOpen, setDesktopMoreMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [mobileMoreMenuOpen, setMobileMoreMenuOpen] = useState(false);
  const [locationPopupOpen, setLocationPopupOpen] = useState(false);
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [signInModalOpen, setSignInModalOpen] = useState(false);
  const moreMenuRef = useRef(null);
  const mobileDotMenuRef = useRef(null);
  const desktopDropdownRef = useRef(null);
  const mobileDropdownRef = useRef(null);
  const locationPopupRef = useRef(null);

  // Main navigation menu items
  const mainNavItems = useMemo(() => [
    { id: 1, name: 'Express Delivery', url: '/express-delivery' },
    { id: 2, name: 'Flowers', url: '/flowers' },
    { id: 3, name: 'Cakes', url: '/cakes' },
    { id: 4, name: 'Birthday', url: '/birthday' },
    { id: 5, name: 'Anniversary', url: '/anniversary' },
    { id: 6, name: 'Gifts', url: '/gifts' },
    { id: 7, name: 'Personalised', url: '/personalised' },
    { id: 8, name: 'Plants', url: '/plants' },
    { id: 9, name: 'Combos', url: '/combos' },
    { id: 10, name: 'International', url: '/international' },
    { id: 11, name: 'Occasions', url: '/occasions' },
  ], []);

  // More dropdown menu items
  const moreMenuItems = [
    { id: 1, name: 'Corporate Gifts', icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#ffcc85]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" /></svg>, url: '/corporate-gifts' },
    { id: 2, name: 'My Favourites', icon: <FaHeart className="w-5 h-5 text-[#ffcc85]" />, url: '/favourites' },
    { id: 3, name: 'Refer and Earn', icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#ffcc85]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>, url: '/refer-earn', badge: 'New' },
    { id: 4, name: 'Franchise', icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#ffcc85]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>, url: '/franchise' },
    { id: 5, name: 'FAQ', icon: <FaQuestion className="w-5 h-5 text-[#ffcc85]" />, url: '/faq' },
    { id: 6, name: 'About Us', icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#ffcc85]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, url: '/about-us' },
    { id: 7, name: 'Sell With Us', icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#ffcc85]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>, url: '/sell-with-us' },
    { id: 8, name: 'Contact Us', icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#ffcc85]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>, url: '/contact-us' },
    { id: 9, name: 'WhatsApp', icon: <FaWhatsapp className="w-5 h-5 text-[#ffcc85]" />, url: '/whatsapp' },
  ];

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const clickedInMobileMenu = mobileDotMenuRef.current && mobileDotMenuRef.current.contains(event.target);
      const clickedInMoreMenu = moreMenuRef.current && moreMenuRef.current.contains(event.target);
      const clickedInDesktopDropdown = desktopDropdownRef.current && desktopDropdownRef.current.contains(event.target);
      const clickedInMobileDropdown = mobileDropdownRef.current && mobileDropdownRef.current.contains(event.target);
      const clickedInLocationPopup = locationPopupRef.current && locationPopupRef.current.contains(event.target);
      const clickedInLocationPopupContent = event.target.closest('.bg-white.rounded-lg');

      if (!clickedInMoreMenu && !clickedInDesktopDropdown && desktopMoreMenuOpen) {
        setDesktopMoreMenuOpen(false);
      }

      if (!clickedInMobileMenu && !clickedInMobileDropdown && mobileMoreMenuOpen) {
        setMobileMoreMenuOpen(false);
      }

      if (!clickedInLocationPopup && !clickedInLocationPopupContent && locationPopupOpen) {
        setLocationPopupOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [desktopMoreMenuOpen, mobileMoreMenuOpen, locationPopupOpen]);

  // Close menus when window is resized
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (desktopMoreMenuOpen) {
        setDesktopMoreMenuOpen(false);
      }
      if (mobileMoreMenuOpen) {
        setMobileMoreMenuOpen(false);
      }
      if (moreMenuOpen) {
        setMoreMenuOpen(false);
      }
      if (locationPopupOpen) {
        setLocationPopupOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [desktopMoreMenuOpen, mobileMoreMenuOpen, moreMenuOpen, locationPopupOpen]);

  useEffect(() => {
    // Set the main navigation items directly instead of fetching
    setMenuItems(mainNavItems);

    // If you want to fetch from API later, uncomment this
    // const fetchMenuItems = async () => {
    //   const data = await apiService.getHeaderMenus();
    //   setMenuItems(data);
    // };
    // fetchMenuItems();
  }, [mainNavItems]);

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search functionality
    console.log('Searching for:', searchQuery);
  };

  // Handle location selection
  const handleLocationSelect = () => {
    if (deliveryAddress.trim()) {
      console.log('Selected delivery address:', deliveryAddress);
      setLocationPopupOpen(false);
    }
  };

  // Handle using current location
  const handleUseCurrentLocation = () => {
    // In a real app, you would use the Geolocation API here
    console.log('Using current location');
    setDeliveryAddress('Current Location');
    setLocationPopupOpen(false);
  };

  return (
    <>

      <header className="floweraura-header bg-dark shadow-sm fixed top-0 left-0 right-0 z-40 w-full">
        {/* Top Bar */}
        <div className="container mx-auto px-4 py-3">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Mobile Header */}
            <div className="flex items-center w-full justify-between md:hidden">
              <button
                className="text-[#ffcc85] flex items-center justify-center"
                onClick={() => setMoreMenuOpen(!moreMenuOpen)}
                aria-label="Open menu"
              >
                <FaBars className="text-xl" />
              </button>

              <Link to="/" className="flex items-center justify-center logo-container">
                <img src="/LOGO.png" alt="Mispri Logo" className="h-10 w-auto" />
              </Link>

              <div className="flex items-center space-x-3">
                <Link to="/cart" className="text-gray-700 relative">
                  <FaShoppingCart className="text-xl" />
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">1</span>
                </Link>
                <Link to="/search" className="text-gray-700">
                  <FaSearch className="text-xl" />
                </Link>
                <div
                  className="relative"
                  ref={mobileDotMenuRef}
                >
                  <button
                    onClick={() => setMobileMoreMenuOpen(!mobileMoreMenuOpen)}
                    className="text-gray-700"
                    aria-label="More options"
                  >
                    <FaEllipsisV className="text-xl" />
                  </button>

                  {/* Mobile Right Sidebar Menu */}
                  {mobileMoreMenuOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
                      <div
                        className="fixed top-0 right-0 h-full w-4/5 max-w-xs bg-[#121212] shadow-lg z-50 overflow-y-auto slide-in-right"
                        ref={mobileDropdownRef}
                        onClick={(e) => e.stopPropagation()}
                      >
                        {/* User Greeting */}
                        <div className="p-4 flex items-center border-b border-[#333333]">
                          <div className="w-12 h-12 rounded-full bg-[#2D7D90] flex items-center justify-center mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                          </div>
                          <div>
                            <p className="text-white font-medium">Hey Guest!</p>
                            <button onClick={() => { setMobileMoreMenuOpen(false); setSignInModalOpen(true); }} className="text-[#ffcc85] text-sm font-medium">Login in Now!</button>
                          </div>
                        </div>

                        {/* Menu Items */}
                        <div>
                          <Link to="/track-order" className="mobile-sidebar-item" onClick={() => setMobileMoreMenuOpen(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-[#ffcc85]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                            </svg>
                            <span>Track Order</span>
                          </Link>

                          <Link to="/favourites" className="mobile-sidebar-item" onClick={() => setMobileMoreMenuOpen(false)}>
                            <FaHeart className="h-5 w-5 mr-3 text-[#ffcc85]" />
                            <span>My Favourites</span>
                          </Link>

                          <Link to="/contact-us" className="mobile-sidebar-item" onClick={() => setMobileMoreMenuOpen(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-[#ffcc85]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            <span>Contact Us</span>
                          </Link>

                          <Link to="/whatsapp" className="mobile-sidebar-item" onClick={() => setMobileMoreMenuOpen(false)}>
                            <FaWhatsapp className="h-5 w-5 mr-3 text-[#ffcc85]" />
                            <span>WhatsApp</span>
                          </Link>
                        </div>

                        {/* Close Button */}
                        <button
                          className="absolute top-4 right-4 text-white"
                          onClick={() => setMobileMoreMenuOpen(false)}
                        >
                          <FaTimes className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Desktop Header */}
            <div className="hidden md:flex items-center w-full justify-between">
              {/* Logo */}
              <Link to="/" className="flex items-center logo-container mr-6">
                <img src="/LOGO.png" alt="Mispri Logo" className="h-12 w-auto" />
              </Link>

              {/* Location Selector */}
              <div
                className="flex items-center bg-[#ffcc8561] rounded-md px-3 py-1.5 mr-4 cursor-pointer transition-colors relative"
                onClick={() => setLocationPopupOpen(true)}
                ref={locationPopupRef}
              >
                <img src="https://cdn-icons-png.flaticon.com/512/3909/3909444.png" alt="India Flag" className="w-6 h-4 mr-2" />
                <span className="text-sm text-gray-700 whitespace-nowrap">Deliver To ?</span>
                <button className="text-[#ffcc85] ml-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
                  </svg>
                </button>
              </div>

              {/* Search Bar */}
              <div className="flex-grow max-w-xl mx-4">
                <form onSubmit={handleSearch} className="flex">
                  <input
                    type="text"
                    placeholder="Search your gifts"
                    className="w-full py-2 px-4 border border-dark rounded-l-md focus:outline-none focus:ring-1 focus:ring-[#ffcc85] focus:border-[#ffcc85] bg-dark-tertiary text-light"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <button
                    type="submit"
                    className="bg-dark-tertiary text-light py-2 px-4 rounded-r-md hover:bg-dark-secondary transition duration-200"
                  >
                    <FaSearch />
                  </button>
                </form>
              </div>

              {/* Right Section - Icons */}
              <div className="flex items-center space-x-6">
                <Link to="/track-order" className="flex flex-col items-center text-light hover:text-[#ffcc85] header-icon-hover">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mb-1 icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  <span className="text-xs text-label">Track Order</span>
                </Link>
                <Link to="/gift-finder" className="flex flex-col items-center text-light hover:text-[#ffcc85] header-icon-hover">
                  <FaGift className="h-5 w-5 mb-1 icon" />
                  <span className="text-xs text-label">Gift Finder</span>
                </Link>
                <Link to="/cart" className="flex flex-col items-center text-light hover:text-[#ffcc85] relative header-icon-hover">
                  <FaShoppingCart className="h-5 w-5 mb-1 icon" />
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">0</span>
                  <span className="text-xs text-label">Cart</span>
                </Link>
                <button
                  onClick={() => setSignInModalOpen(true)}
                  className="flex flex-col items-center text-light hover:text-[#ffcc85] header-icon-hover"
                >
                  <FaUser className="h-5 w-5 mb-1 icon" />
                  <span className="text-xs text-label">Sign In</span>
                </button>
                <div
                  className="relative"
                  ref={moreMenuRef}
                >
                  <button
                    onClick={() => setDesktopMoreMenuOpen(!desktopMoreMenuOpen)}
                    className="flex flex-col items-center text-light hover:text-[#ffcc85] header-icon-hover"
                    aria-label="More options"
                  >
                    <FaEllipsisV className="h-5 w-5 mb-1 icon" />
                    <span className="text-xs text-label">More</span>
                  </button>

                  {/* Desktop Dropdown Menu */}
                  {desktopMoreMenuOpen && (
                    <div
                      className="more-dropdown-desktop absolute right-0 top-12 z-50"
                      ref={desktopDropdownRef}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div
                        className="more-dropdown-content-desktop w-80 bg-dark-tertiary shadow-lg border border-gray-800 overflow-hidden rounded-md"
                        style={{ position: 'fixed', right: '0', top: '60px', width: '300px' }}
                        onMouseLeave={() => setDesktopMoreMenuOpen(false)}
                      >
                        {/* Menu Items */}
                        <div>
                          {moreMenuItems.map((item) => (
                            <Link
                              key={item.id}
                              to={item.url}
                              className="flex items-center py-3 px-4 border-b border-gray-100 hover:bg-black hover:text-white transition-colors"
                              onClick={() => setDesktopMoreMenuOpen(false)}
                            >
                              <div className="w-8 h-8 flex items-center justify-center mr-3">
                                {item.icon}
                              </div>
                              <span className="text-light font-medium">{item.name}</span>
                              {item.badge && (
                                <span className="ml-2 bg-[#ffcc85] text-white text-xs px-2 py-0.5 rounded-full">
                                  {item.badge}
                                </span>
                              )}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Location Selector */}
        <div className="md:hidden bg-[#ffcc8561] py-2 px-4 border-t border-[#ffcc8520]">
          <div className="flex items-center justify-between" onClick={() => setLocationPopupOpen(true)}>
            <div className="flex items-center">
              <img src="https://cdn-icons-png.flaticon.com/512/3909/3909444.png" alt="India Flag" className="w-6 h-4 mr-2" />
              <span className="text-sm text-gray-700">Deliver To ?</span>
            </div>
            <button className="text-[#ffcc85]">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="bg-dark border-t border-[#ffcc8520] hidden md:block">
          <div className="container mx-auto px-4">
            <ul className="flex flex-row justify-center space-x-6 py-2 overflow-x-auto">
              {menuItems.map((item) => (
                <li key={item.id} className="py-2 whitespace-nowrap">
                  <Link
                    to={item.url}
                    className="text-light hover:text-[#ffcc85] text-sm font-medium nav-item"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Mobile Sidebar Menu */}
        {moreMenuOpen && windowWidth < 768 && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
            <div className="fixed top-0 left-0 h-full w-full md:w-4/5 md:max-w-xs bg-[#121212] shadow-lg z-50 overflow-y-auto slide-in-left">
              {/* Header with back button */}
              <div className="p-4 flex items-center border-b border-[#333333]">
                <button
                  className="text-white mr-3"
                  onClick={() => setMoreMenuOpen(false)}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                  </svg>
                </button>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-[#2D7D90] flex items-center justify-center mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white text-sm">Hey Guest!</p>
                    <button onClick={() => { setMoreMenuOpen(false); setSignInModalOpen(true); }} className="text-[#ffcc85] text-xs font-medium">Sign In</button>
                  </div>
                </div>
              </div>

              {/* Menu Items */}
              <div className="py-2">
                <Link to="/express-delivery" className="mobile-sidebar-item flex items-center justify-between" onClick={() => setMoreMenuOpen(false)}>
                  <span>Express Delivery</span>
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>

                <Link to="/flowers" className="mobile-sidebar-item flex items-center justify-between" onClick={() => setMoreMenuOpen(false)}>
                  <span>Flowers</span>
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>

                <Link to="/cakes" className="mobile-sidebar-item flex items-center justify-between" onClick={() => setMoreMenuOpen(false)}>
                  <span>Cakes</span>
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>

                <Link to="/birthday" className="mobile-sidebar-item flex items-center justify-between" onClick={() => setMoreMenuOpen(false)}>
                  <span>Birthday</span>
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>

                <Link to="/anniversary" className="mobile-sidebar-item flex items-center justify-between" onClick={() => setMoreMenuOpen(false)}>
                  <span>Anniversary</span>
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>

                <Link to="/gifts" className="mobile-sidebar-item flex items-center justify-between" onClick={() => setMoreMenuOpen(false)}>
                  <span>Gifts</span>
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>

                <Link to="/personalised" className="mobile-sidebar-item flex items-center justify-between" onClick={() => setMoreMenuOpen(false)}>
                  <span>Personalised</span>
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>

                <Link to="/plants" className="mobile-sidebar-item flex items-center justify-between" onClick={() => setMoreMenuOpen(false)}>
                  <span>Plants</span>
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>

                <Link to="/combos" className="mobile-sidebar-item flex items-center justify-between" onClick={() => setMoreMenuOpen(false)}>
                  <span>Combos</span>
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>

                <Link to="/international" className="mobile-sidebar-item flex items-center justify-between" onClick={() => setMoreMenuOpen(false)}>
                  <span>International</span>
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>

                <Link to="/occasions" className="mobile-sidebar-item flex items-center justify-between" onClick={() => setMoreMenuOpen(false)}>
                  <span>Occasions</span>
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>

              {/* Additional Options */}
              <div className="border-t border-[#333333] mt-4">
                <button className="mobile-sidebar-item w-full text-left" onClick={() => { setMoreMenuOpen(false); setSignInModalOpen(true); }}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-[#ffcc85]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span>Sign In</span>
                </button>

                <Link to="/refer-earn" className="mobile-sidebar-item" onClick={() => setMoreMenuOpen(false)}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-[#ffcc85]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Refer And Earn</span>
                </Link>

                <Link to="/track-order" className="mobile-sidebar-item" onClick={() => setMoreMenuOpen(false)}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-[#ffcc85]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  <span>Track Order</span>
                </Link>

                <Link to="/corporate-gifts" className="mobile-sidebar-item" onClick={() => setMoreMenuOpen(false)}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-[#ffcc85]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>Corporate Gifts</span>
                </Link>

                <Link to="/franchise" className="mobile-sidebar-item" onClick={() => setMoreMenuOpen(false)}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-[#ffcc85]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <span>Franchise Enquiry</span>
                </Link>

                <Link to="/coupons" className="mobile-sidebar-item" onClick={() => setMoreMenuOpen(false)}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-[#ffcc85]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                  </svg>
                  <span>Coupons</span>
                </Link>

                <Link to="/call-us" className="mobile-sidebar-item" onClick={() => setMoreMenuOpen(false)}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-[#ffcc85]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>Call Us</span>
                </Link>

                <Link to="/whatsapp" className="mobile-sidebar-item" onClick={() => setMoreMenuOpen(false)}>
                  <FaWhatsapp className="h-5 w-5 mr-3 text-[#ffcc85]" />
                  <span>WhatsApp</span>
                </Link>

                <Link to="/contact-us" className="mobile-sidebar-item" onClick={() => setMoreMenuOpen(false)}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-[#ffcc85]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                  <span>Contact Us</span>
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Location Popup */}
        {locationPopupOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
            <div className="bg-[#2d2d2d] rounded-lg shadow-xl w-full max-w-md mx-4 overflow-hidden">
              <div className="p-4 bg-[#2d2d2d] border-b border-[#444444]">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium text-white">Enter delivery location</h3>
                  <button
                    className="text-white hover:text-gray-200"
                    onClick={() => setLocationPopupOpen(false)}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                  </button>
                </div>
                <p className="text-sm text-gray-300 mt-1">30-min delivery now live in some areas</p>
              </div>

              <div className="p-4 bg-[#2d2d2d]">
                <div className="flex items-center rounded-md overflow-hidden">
                  <div className="px-3 py-2 bg-[#1e1e1e] border-r border-[#444444]">
                    <img src="https://cdn-icons-png.flaticon.com/512/3909/3909444.png" alt="India Flag" className="w-6 h-4" />
                    <span className="text-xs text-gray-400 block mt-1">Ind</span>
                  </div>
                  <input
                    type="text"
                    placeholder="Enter Address / Location"
                    className="flex-1 p-2 bg-white text-black focus:outline-none focus:ring-1 focus:ring-[#ffcc85]"
                    value={deliveryAddress}
                    onChange={(e) => setDeliveryAddress(e.target.value)}
                  />
                </div>

                <div className="mt-4 flex justify-between items-center">
                  <button
                    className="flex items-center text-[#4299e1] text-sm font-medium hover:text-[#63b3ed]"
                    onClick={handleUseCurrentLocation}
                  >
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    Use Current Location
                  </button>

                  <button
                    className="bg-[#ffcc85] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#e6b876] transition-colors button-hover"
                    onClick={handleLocationSelect}
                    disabled={!deliveryAddress.trim()}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Sign In Modal */}
      <SignInModal
        isOpen={signInModalOpen}
        onClose={() => setSignInModalOpen(false)}
      />
    </>
  );
};

export default Header;
