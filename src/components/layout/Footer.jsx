import { Link, useNavigate } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaYoutube, FaPinterestP, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import '../styles/HoverEffects.css';

const Footer = ({ isMobileMenuOpen }) => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <footer className="pt-8 pb-6 bg-dark">
      <div className="container mx-auto px-4">
        {/* Footer Links Section */}
        <div className="bg-dark-secondary py-6 mb-8 rounded-lg">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* First Column */}
              <div>
                <div className="mb-3">
                  <Link to="/about-us" className="text-light hover:text-[#ffcc85] text-base footer-link">
                    About Us
                  </Link>
                </div>

                <div className="mb-3">
                  <Link to="/coupons-deals" className="text-light hover:text-[#ffcc85] footer-link">
                    Coupons & Deals
                  </Link>
                </div>
                <div className="mb-3">
                  <Link to="/cancellation-refund" className="text-light hover:text-[#ffcc85] footer-link">
                    Cancellation & Refund
                  </Link>
                </div>
                <div className="mb-3">
                  <Link to="/terms-and-conditions" className="text-light hover:text-[#ffcc85] footer-link">
                    Terms and Conditions
                  </Link>
                </div>


              </div>

              {/* Second Column */}
              <div>
                <div className="mb-3">
                  <Link to="/media" className="text-light hover:text-[#ffcc85] text-base footer-link">
                    Media
                  </Link>
                </div>
                <div className="mb-3">
                  <Link to="/privacy-policy" className="text-light hover:text-[#ffcc85] footer-link">
                    Privacy Policy
                  </Link>
                </div>
                <div className="mb-3">
                  <Link to="/reviews" className="text-light hover:text-[#ffcc85] footer-link">
                    Reviews
                  </Link>
                </div>
                <div className="mb-3">
                  <Link to="/blog" className="text-light hover:text-[#ffcc85] footer-link">
                    Blog
                  </Link>
                </div>
                <div className="mb-3">
                  <Link to="/sitemap" className="text-light hover:text-[#ffcc85] footer-link">
                    Sitemap
                  </Link>
                </div>
                <div className="mb-3">
                  <Link to="/quotes" className="text-light hover:text-[#ffcc85] footer-link">
                    Quotes
                  </Link>
                </div>
                <div className="mb-3">
                  <Link to="/corporate-gifts" className="text-light hover:text-[#ffcc85] footer-link">
                    Corporate Gifts
                  </Link>
                </div>
              </div>

              {/* Third Column */}
              <div>

                <div className="mb-3">
                  <Link to="/faq" className="text-light hover:text-[#ffcc85] footer-link">
                    FAQ
                  </Link>
                </div>
                <div className="mb-3">
                  <Link to="/contact-us" className="text-light hover:text-[#ffcc85] footer-link">
                    Contact Us
                  </Link>
                </div>
                <div className="mb-3">
                  <Link to="/whatsapp" className="text-light hover:text-[#ffcc85] footer-link">
                    WhatsApp
                  </Link>
                </div>
              </div>


            </div>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="bg-dark-secondary py-4 mb-8 rounded-lg">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <p className="text-light font-medium text-base">Spread The Love On Social Media</p>
              </div>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white transition-all duration-300 social-icon">
                  <FaFacebookF className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white transition-all duration-300 social-icon">
                  <FaTwitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-white transition-all duration-300 social-icon">
                  <FaYoutube className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center text-white transition-all duration-300 social-icon">
                  <FaPinterestP className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-pink-600 flex items-center justify-center text-white transition-all duration-300 social-icon">
                  <FaInstagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center text-white transition-all duration-300 social-icon">
                  <FaLinkedinIn className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="border-t border-dark pt-6 mb-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div onClick={handleLogoClick} className="flex items-center cursor-pointer">
                <img src="/LOGO.png" alt="Mispri Logo" className="h-10 w-auto mb-2" />
              </div>
              <p className="text-xs text-light-tertiary mt-2">© 2025 Mispri. All rights reserved by <a href="https://www.wipstertechnologies.com/" target="_blank" className="hover:text-[#dc2626] font-bold transition duration-500">Wipster Technologies Private Limited</a>
              </p>
            </div>
            {/* <div>
              <p className="text-xs text-gray-600 mb-2">We Accept:</p>
              <div className="flex flex-wrap justify-center gap-2">
                <img src="https://www.floweraura.com/sites/default/files/visa.png" alt="Visa" className="h-5" />
                <img src="https://www.floweraura.com/sites/default/files/mastercard.png" alt="Mastercard" className="h-5" />
                <img src="https://www.floweraura.com/sites/default/files/rupay.png" alt="RuPay" className="h-5" />
                <img src="https://www.floweraura.com/sites/default/files/american-express.png" alt="American Express" className="h-5" />
                <img src="https://www.floweraura.com/sites/default/files/paypal.png" alt="PayPal" className="h-5" />
                <img src="https://www.floweraura.com/sites/default/files/razorpay.png" alt="Razorpay" className="h-5" />
                <img src="https://www.floweraura.com/sites/default/files/paytm.png" alt="Paytm" className="h-5" />
                <img src="https://www.floweraura.com/sites/default/files/phonepe.png" alt="PhonePe" className="h-5" />
                <img src="https://www.floweraura.com/sites/default/files/simpl.png" alt="Simpl" className="h-5" />
              </div>
            </div> */}
          </div>
        </div>

        {/* WhatsApp Button */}
        {!isMobileMenuOpen && (
          <div className="fixed bottom-6 right-6 z-50">
            <a
              href="#"
              className="w-12 h-12 rounded-full bg-[#ffcc85] flex items-center justify-center text-white shadow-lg hover:bg-[#e6b876] hover:-translate-y-1 transition-all duration-300 button-hover"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-6 h-6 fill-current">
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
              </svg>
            </a>
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;
