import axios from 'axios';

// Base URL for your API
const API_URL = 'http://localhost:3001'; // This would be your actual API endpoint

// Mock data for development (until you connect to a real database)
const mockHeaderMenus = [
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
];

// Mock data for categories with images
const mockCategoriesWithImages = [
  { id: 1, name: 'Flowers', url: '/flowers', image: 'https://www.floweraura.com/sites/default/files/styles/200x200/public/flowers.jpg' },
  { id: 2, name: 'Cakes', url: '/cakes', image: 'https://www.floweraura.com/sites/default/files/styles/200x200/public/cakes.jpg' },
  { id: 3, name: 'Gifts', url: '/gifts', image: 'https://www.floweraura.com/sites/default/files/styles/200x200/public/gifts.jpg' },
  { id: 4, name: 'Combos', url: '/combos', image: 'https://www.floweraura.com/sites/default/files/styles/200x200/public/combos.jpg' },
  { id: 5, name: 'Personalized Gifts', url: '/personalized', image: 'https://www.floweraura.com/sites/default/files/styles/200x200/public/personalized-gifts.jpg' },
  { id: 6, name: 'Plants', url: '/plants', image: 'https://www.floweraura.com/sites/default/files/styles/200x200/public/plants.jpg' },
];

const mockFooterMenus = {
  company: [
    { id: 1, name: 'About Us', url: '/about-us' },
    { id: 2, name: 'Sell With Us', url: '/sell-with-us' },
    { id: 3, name: 'Coupons & Deals', url: '/coupons-deals' },
    { id: 4, name: 'Cancellation & Refund', url: '/cancellation-refund' },
    { id: 5, name: 'Terms and Conditions', url: '/terms-conditions' },
    { id: 6, name: 'Retails Stores', url: '/retail-stores' },
    { id: 7, name: 'Career', url: '/career' },
  ],
  resources: [
    { id: 1, name: 'Media', url: '/media' },
    { id: 2, name: 'Privacy Policy', url: '/privacy-policy' },
    { id: 3, name: 'Reviews', url: '/reviews' },
    { id: 4, name: 'Blog', url: '/blog' },
    { id: 5, name: 'Sitemap', url: '/sitemap' },
    { id: 6, name: 'Quotes', url: '/quotes' },
    { id: 7, name: 'Corporate Gifts', url: '/corporate-gifts' },
  ],
  support: [
    { id: 1, name: 'Franchise', url: '/franchise' },
    { id: 2, name: 'FAQ', url: '/faq' },
    { id: 3, name: 'Contact Us', url: '/contact-us' },
    { id: 4, name: 'WhatsApp', url: '/whatsapp' },
    { id: 5, name: 'Download App', url: '/download-app' },
  ],
};

// API service functions
const apiService = {
  // Function to get header menu items
  getHeaderMenus: async () => {
    try {
      // In a real application, you would fetch from your API
      // const response = await axios.get(`${API_URL}/header-menus`);
      // return response.data;

      // For now, return mock data
      return mockHeaderMenus;
    } catch (error) {
      console.error('Error fetching header menus:', error);
      return [];
    }
  },

  // Function to get footer menu items
  getFooterMenus: async () => {
    try {
      // In a real application, you would fetch from your API
      // const response = await axios.get(`${API_URL}/footer-menus`);
      // return response.data;

      // For now, return mock data
      return mockFooterMenus;
    } catch (error) {
      console.error('Error fetching footer menus:', error);
      return { company: [], resources: [], support: [] };
    }
  },

  // Function to get categories with images for the empty cart page
  getCategoriesWithImages: async () => {
    try {
      // In a real application, you would fetch from your API
      // const response = await axios.get(`${API_URL}/categories-with-images`);
      // return response.data;

      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 300));

      // For now, return mock data
      return mockCategoriesWithImages;
    } catch (error) {
      console.error('Error fetching categories with images:', error);
      return [];
    }
  }
};

export default apiService;
