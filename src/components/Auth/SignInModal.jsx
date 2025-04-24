import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignInModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would handle authentication here
    console.log('Signing in with email:', email);
    // For now, just close the modal
    onClose();
  };

  const handleGoogleSignIn = () => {
    // In a real app, you would handle Google authentication here
    console.log('Signing in with Google');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg overflow-hidden max-w-2xl w-full mx-4 flex">

        {/* Left side - Image */}
        <div className="hidden md:block w-3/5 bg-cover bg-center" style={{ backgroundImage: "url('/flower-bouquet.webp')" }}>
        </div>

        {/* Right side - Form */}
        <div className="w-full md:w-2/5 p-8 relative">
          {/* Close button */}
          <button
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
            onClick={onClose}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>

          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Hello!</h2>
            <p className="text-base text-gray-600 mt-2">Please enter your email</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg className="h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full pl-12 pr-4 py-3 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#ffcc85] focus:border-[#ffcc85]"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gray-300 text-black py-3 px-4 rounded-md hover:bg-[#ffcc85] hover:text-white transition duration-200 mb-6 uppercase font-medium text-base"
            >
              Continue
            </button>
          </form>

          <div className="text-center text-sm text-gray-500 mb-4">Or Login with</div>

          <button
            onClick={handleGoogleSignIn}
            className="w-full flex items-center justify-center border border-gray-300 rounded-md py-3 px-4 hover:bg-gray-50 transition duration-200"
          >
            <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="w-6 h-6 mr-3" />
            <span className="text-base">Google</span>
          </button>

          <div className="text-center text-sm text-gray-500 mt-8 mb-4">
            <p>By continuing I agree to Mispri's <Link to="/terms" className="text-[#ffcc85]">Terms & Conditions</Link> and <Link to="/privacy" className="text-[#ffcc85]">Privacy Policy</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInModal;
