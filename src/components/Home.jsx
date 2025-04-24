import ImageCarousel from './common/ImageCarousel';
import { carouselImages } from '../data/carouselData';
import { Link } from 'react-router-dom';
import './styles/CategoryScroll.css';

const Home = () => {
  // Category data
  const categories = [
    { name: 'Mothers Day', image: '/mothers-day.jpeg', url: '/mothers-day' },
    { name: 'Flowers', image: '/flower-1.webp', url: '/flowers' },
    { name: 'Cakes', image: '/cake.jpeg', url: '/cakes' },
    { name: 'Combos', image: '/combo.jpeg', url: '/combos' },
    { name: 'Plants', image: '/plant.avif', url: '/plants' },
    { name: 'Personalised', image: '/gift.webp', url: '/personalised' },
  ];

  return (
    <div className="w-full">
      {/* Mobile Categories Section - Shown only on mobile */}
      <div className="md:hidden container mx-auto px-4 py-4">
        <h2 className="text-xl font-semibold text-light mb-3 px-1">Shop By Category</h2>
        <div className="flex overflow-x-auto pb-4 gap-4 px-1 hide-scrollbar">
          {categories.map((category, index) => (
            <Link to={category.url} key={index} className="flex-shrink-0 w-20 flex flex-col items-center group">
              <div className="w-16 h-16 rounded-full overflow-hidden border border-gray-200 mb-2 shadow-sm">
                <img src={category.image} alt={category.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <h3 className="text-xs font-medium text-light text-center">{category.name}</h3>
            </Link>
          ))}
        </div>
      </div>

      {/* Image Carousel */}
      <div className="w-full">
        <ImageCarousel images={carouselImages} />
      </div>

      {/* Desktop Categories Section - Hidden on mobile */}
      <div className="hidden md:block container mx-auto px-4 mb-12 mt-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category, index) => (
            <Link to={category.url} key={index} className="bg-dark-tertiary rounded-lg overflow-hidden shadow-sm hover:shadow-md transition duration-300 group">
              <div className="h-40 overflow-hidden">
                <img src={category.image} alt={category.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-3 text-center">
                <h3 className="font-medium text-light">{category.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Shop By Occasions & Relations */}
      <div className="container mx-auto px-4 py-10 md:py-16">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-light">Shop By Occasions & Relations</h2>
          <p className="text-light-tertiary mt-2">Surprise Your Loved Ones</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8 max-w-6xl mx-auto px-2 md:px-4">
          {[
            { name: 'Birthday Gifts', image: '/cake-couple.jpg', url: '/birthday-gifts' },
            { name: 'Anniversary Gifts', image: '/couple.jpg', url: '/anniversary-gifts' },
            { name: 'Gifts for Him', image: '/man-gift.webp', url: '/gifts-for-him' },
            { name: 'Gifts for Her', image: '/women-gift.jpg', url: '/gifts-for-her' },
          ].map((category, index) => (
            <div key={index} className="flex flex-col group">
              <Link to={category.url} className="block shadow-sm hover:shadow-md transition-all duration-300">
                <div className="overflow-hidden w-full aspect-square mb-0 rounded-t-2xl">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-medium text-light text-center text-sm md:text-base py-3 border border-t-0 border-dark rounded-b-md bg-dark-tertiary">{category.name}</h3>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Products */}
      <div className="bg-dark-secondary py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8 text-light">Bestselling Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { name: 'Mixed Roses Bouquet', price: '₹599', image: '/MIXED ROSES BOUQUET.jpeg' },
              { name: 'Chocolate Truffle Cake', price: '₹749', image: '/Chocolate Truffle Cake.jpeg' },
              { name: 'Money Plant', price: '₹499', image: '/money-plant.jpeg' },
              { name: 'Personalized Mug', price: '₹399', image: '/Personalized Mug.jpg' },
            ].map((product, index) => (
              <div key={index} className="bg-dark-tertiary rounded-lg overflow-hidden shadow-sm hover:shadow-md transition duration-300 group">
                <div className="h-48 overflow-hidden">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-light mb-2">{product.name}</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-[#ffcc85] font-bold">{product.price}</span>
                    <button className="bg-[#ffcc85] text-white px-3 py-1 rounded text-sm hover:bg-[#e6b876] transition duration-300">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Info Banner */}
      <div className="container mx-auto px-4 py-12">
        <div className="bg-[#ffcc85] text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">REFER & EARN</h2>
          <div className="max-w-xl mx-auto bg-dark-tertiary text-light p-4 rounded-md">
            <p className="text-3xl">
              20% OFF
            </p>
          </div>
          <p className="text-lg mb-6">
            FOR YOU,FOR THEM!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
