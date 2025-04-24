import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
  // Scroll to top when component mounts
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gray-50 py-8 md:py-12">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Terms and Conditions</h1>
          
          <div className="prose prose-sm md:prose-base max-w-none text-gray-700">
            <p className="mb-4">
              Welcome to FlowerAura. These terms and conditions outline the rules and regulations for the use of our website.
            </p>
            
            <p className="mb-4">
              By accessing this website, we assume you accept these terms and conditions in full. Do not continue to use FlowerAura's website if you do not accept all of the terms and conditions stated on this page.
            </p>
            
            <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">1. Definitions</h2>
            <p className="mb-4">
              The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and any or all Agreements: "Client", "You" and "Your" refers to you, the person accessing this website and accepting the Company's terms and conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers to FlowerAura. "Party", "Parties", or "Us", refers to both the Client and ourselves, or either the Client or ourselves.
            </p>
            
            <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">2. License</h2>
            <p className="mb-4">
              Unless otherwise stated, FlowerAura and/or its licensors own the intellectual property rights for all material on FlowerAura. All intellectual property rights are reserved. You may view and/or print pages from the website for your own personal use subject to restrictions set in these terms and conditions.
            </p>
            
            <p className="mb-4">You must not:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Republish material from this website</li>
              <li>Sell, rent or sub-license material from the website</li>
              <li>Reproduce, duplicate or copy material from the website</li>
              <li>Redistribute content from FlowerAura (unless content is specifically made for redistribution)</li>
            </ul>
            
            <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">3. User Comments</h2>
            <p className="mb-4">
              Certain parts of this website offer the opportunity for users to post and exchange opinions, information, material and data. FlowerAura does not screen, edit, publish or review Comments prior to their appearance on the website and Comments do not reflect the views or opinions of FlowerAura, its agents or affiliates. Comments reflect the view and opinion of the person who posts such view or opinion.
            </p>
            
            <p className="mb-4">
              To the extent permitted by applicable laws, FlowerAura shall not be responsible or liable for the Comments or for any loss cost, liability, damages or expenses caused and or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website.
            </p>
            
            <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">4. Orders and Payments</h2>
            <p className="mb-4">
              All orders placed through our website are subject to acceptance and availability. We reserve the right to refuse any order without giving a reason. When you place an order, you will receive an acknowledgment e-mail confirming receipt of your order. This email will only be an acknowledgment and will not constitute acceptance of your order.
            </p>
            
            <p className="mb-4">
              Prices for products are quoted on our website. The website contains a large number of products and it is always possible that some of the prices on the website may be incorrect. We will verify prices as part of our dispatch procedures so that, where a product's correct price is less than our stated price, we will charge the lower amount. If a product's correct price is higher than the price stated on our website, we will normally, at our discretion, either contact you for instructions before dispatching the product, or reject your order and notify you of such rejection.
            </p>
            
            <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">5. Delivery</h2>
            <p className="mb-4">
              We aim to deliver products within the timeframe specified during the checkout process. However, delivery times are approximate and cannot be guaranteed. We are not liable for any delays in delivery caused by circumstances beyond our reasonable control.
            </p>
            
            <p className="mb-4">
              Risk of loss and title for items purchased from our website pass to you upon delivery of the items to the carrier. You are responsible for filing any claims with carriers for damaged and/or lost shipments.
            </p>
            
            <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">6. Cancellation and Returns</h2>
            <p className="mb-4">
              Due to the perishable nature of our products (flowers, cakes, etc.), we generally do not accept returns. However, if you are not completely satisfied with your purchase, please contact our customer service team within 24 hours of delivery.
            </p>
            
            <p className="mb-4">
              For non-perishable items, you have the right to cancel your order within 14 days of receiving the goods. To exercise this right, you must inform us of your decision to cancel by a clear statement.
            </p>
            
            <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">7. Limitation of Liability</h2>
            <p className="mb-4">
              To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website (including, without limitation, any warranties implied by law in respect of satisfactory quality, fitness for purpose and/or the use of reasonable care and skill).
            </p>
            
            <p className="mb-4">
              Nothing in these terms and conditions will:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Limit or exclude our or your liability for death or personal injury resulting from negligence</li>
              <li>Limit or exclude our or your liability for fraud or fraudulent misrepresentation</li>
              <li>Limit any of our or your liabilities in any way that is not permitted under applicable law</li>
              <li>Exclude any of our or your liabilities that may not be excluded under applicable law</li>
            </ul>
            
            <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">8. Indemnity</h2>
            <p className="mb-4">
              You agree to indemnify, defend and hold harmless FlowerAura, its directors, officers, employees, consultants, agents, and affiliates, from any and all third party claims, liability, damages and/or costs (including, but not limited to, legal fees) arising from your use of this website or your breach of these Terms and Conditions.
            </p>
            
            <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">9. Variation of Terms</h2>
            <p className="mb-4">
              FlowerAura is permitted to revise these Terms and Conditions at any time as it sees fit, and by using this website you are expected to review these Terms and Conditions on a regular basis.
            </p>
            
            <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">10. Entire Agreement</h2>
            <p className="mb-4">
              These Terms and Conditions, together with our Privacy Policy, constitute the entire agreement between you and FlowerAura in relation to your use of this website, and supersede all previous agreements in respect of your use of this website.
            </p>
            
            <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">11. Governing Law & Jurisdiction</h2>
            <p className="mb-4">
              These Terms and Conditions will be governed by and construed in accordance with the laws of India, and any disputes relating to these terms and conditions will be subject to the exclusive jurisdiction of the courts of Delhi, India.
            </p>
            
            <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">12. Contact Information</h2>
            <p className="mb-4">
              If you have any questions about these Terms and Conditions, please contact us at:
            </p>
            <p className="mb-4">
              Email: support@floweraura.com<br />
              Phone: +91 9876543210
            </p>
            
            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-600">
                Last updated: June 15, 2023
              </p>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <Link to="/" className="inline-block bg-[#2D7D90] text-white px-6 py-2 rounded-md hover:bg-[#236A7A] transition duration-300">
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
