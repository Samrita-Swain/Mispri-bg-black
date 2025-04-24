import React from 'react';
import { FaLeaf, FaShippingFast, FaSmile, FaHeart, FaUsers, FaGlobe } from 'react-icons/fa';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      {/* Hero Section */}
      <div className="hero-section">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Us</h1>
        <p className="text-xl text-white max-w-2xl mx-auto text-center">
          Bringing joy and happiness through beautiful flowers and thoughtful gifts<br />
          since 2020.
        </p>
      </div>

      {/* Our Story Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2020, Mispri started with a simple mission: to make gifting easy,
              personal, and memorable. What began as a small online flower shop has grown
              into a comprehensive gifting platform that helps people celebrate special
              moments and strengthen relationships.
            </p>
            <p className="text-gray-600 mb-4">
              Our journey has been guided by our passion for creating beautiful experiences
              and our commitment to quality. We believe that every gift tells a story, and
              we're here to help you tell yours in the most meaningful way possible.
            </p>
            <p className="text-gray-600">
              Today, we serve customers across India, delivering not just products but
              emotions, connections, and memories that last a lifetime.
            </p>
          </div>
          <div className="about-image-container">
            <img
              src="/about-us-flower.webp"
              alt="Our Story"
              className="rounded-lg shadow-lg"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zmxvd2VyJTIwc2hvcHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60';
              }}
            />
          </div>
        </div>
      </div>

      {/* Mission & Values Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission & Values</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              At Mispri, we're driven by our mission to connect people through meaningful gifts
              and guided by values that shape everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="inline-block p-4 bg-[#ffcc85] bg-opacity-10 rounded-full mb-4">
                <FaHeart className="text-3xl text-[#ffcc85]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Passion</h3>
              <p className="text-gray-600">
                We're passionate about creating beautiful experiences and helping people express their emotions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="inline-block p-4 bg-[#ffcc85] bg-opacity-10 rounded-full mb-4">
                <FaLeaf className="text-3xl text-[#ffcc85]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Quality</h3>
              <p className="text-gray-600">
                We're committed to sourcing the freshest flowers and finest gifts to ensure your satisfaction.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="inline-block p-4 bg-[#ffcc85] bg-opacity-10 rounded-full mb-4">
                <FaSmile className="text-3xl text-[#ffcc85]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Customer Happiness</h3>
              <p className="text-gray-600">
                Your satisfaction is our priority. We go above and beyond to make your gifting experience perfect.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Mispri?</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We strive to provide the best gifting experience with our commitment to quality,
            convenience, and customer satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="feature-card">
            <div className="feature-icon">
              <FaShippingFast />
            </div>
            <h3>Same Day Delivery</h3>
            <p>
              We understand the importance of timely delivery, especially for last-minute gifts.
              That's why we offer same-day delivery across major cities in India.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <FaLeaf />
            </div>
            <h3>Fresh & Premium Quality</h3>
            <p>
              We source our flowers directly from trusted farms and ensure that all our products
              meet the highest quality standards.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <FaGlobe />
            </div>
            <h3>Wide Delivery Network</h3>
            <p>
              With our extensive delivery network, we can deliver your gifts to over 600+ cities
              across India and even internationally.
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Behind every beautiful bouquet and perfect gift is our dedicated team of professionals
              who work tirelessly to bring joy to your special moments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="team-member">
              <div className="team-image-container">
                <img
                  src="/team-member-1.jpg"
                  alt="Team Member"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://randomuser.me/api/portraits/men/32.jpg';
                  }}
                />
              </div>
              <h3>Rajesh Kumar</h3>
              <p className="role">Founder & CEO</p>
              <p className="bio">
                With over 15 years of experience in the gifting industry, Rajesh leads our team with
                passion and vision.
              </p>
            </div>

            <div className="team-member">
              <div className="team-image-container">
                <img
                  src="/team-member-2.jpg"
                  alt="Team Member"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://randomuser.me/api/portraits/women/44.jpg';
                  }}
                />
              </div>
              <h3>Priya Sharma</h3>
              <p className="role">Creative Director</p>
              <p className="bio">
                Priya brings creativity and innovation to our floral designs and gift collections.
              </p>
            </div>

            <div className="team-member">
              <div className="team-image-container">
                <img
                  src="/team-member-3.jpg"
                  alt="Team Member"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://randomuser.me/api/portraits/men/67.jpg';
                  }}
                />
              </div>
              <h3>Vikram Singh</h3>
              <p className="role">Operations Manager</p>
              <p className="bio">
                Vikram ensures smooth operations and timely delivery of all orders.
              </p>
            </div>

            <div className="team-member">
              <div className="team-image-container">
                <img
                  src="/team-member-4.jpg"
                  alt="Team Member"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://randomuser.me/api/portraits/women/63.jpg';
                  }}
                />
              </div>
              <h3>Ananya Patel</h3>
              <p className="role">Customer Experience</p>
              <p className="bio">
                Ananya leads our customer service team, ensuring every customer has a delightful experience.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="cta-section">
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Send a Gift?</h2>
          <p className="text-white text-xl mb-8 max-w-2xl mx-auto">
            Browse our collection of flowers, cakes, and gifts to find the perfect way to express your feelings.
          </p>
          <a href="/" className="cta-button">
            Shop Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
