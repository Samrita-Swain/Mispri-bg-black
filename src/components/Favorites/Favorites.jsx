import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaHeart } from 'react-icons/fa';
import SignInModal from '../Auth/SignInModal';
import './Favorites.css';

const Favorites = () => {
  const [signInModalOpen, setSignInModalOpen] = useState(false);

  return (
    <div className="favorites-container">
      <div className="not-logged-in-container">
        <div className="illustration-container">
          <img src="/my-fvt-img.avif" alt="" />
        </div>

        <h2 className="message-title">Hey traveler looks like you are not Logged in</h2>

        <div className="action-buttons">
          <button
            onClick={() => setSignInModalOpen(true)}
            className="login-button transition-colors duration-300"
          >
            Log in
          </button>

          <Link to="/" className="continue-button transition-colors duration-300">
            Continue Shopping
          </Link>
        </div>

        {/* Sign In Modal */}
        <SignInModal
          isOpen={signInModalOpen}
          onClose={() => setSignInModalOpen(false)}
        />
      </div>
    </div>
  );
};

export default Favorites;
