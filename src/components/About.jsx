import React from 'react';
import { FaShieldAlt, FaPaperPlane, FaDownload, FaHistory, FaPhoneAlt, FaCoins } from 'react-icons/fa';

function About() {
  return (
    <div className="bg-white text-gray-800 min-h-screen p-4 transition duration-300">
      <h2 className="text-3xl font-bold text-center mb-6">About Bitsafe</h2>

      {/* Container for boxes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Secure Wallet Box */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center transform transition-transform duration-300 hover:scale-105">
          <FaShieldAlt className="text-blue-500 mx-auto mb-4" size={40} />
          <h3 className="text-xl font-semibold mb-2">Secure Wallet</h3>
          <p>Bitsafe ensures top-level security for your cryptocurrency, protecting your assets at all times.</p>
        </div>

        {/* Send Crypto Box */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center transform transition-transform duration-300 hover:scale-105">
          <FaPaperPlane className="text-blue-500 mx-auto mb-4" size={40} />
          <h3 className="text-xl font-semibold mb-2">Send Crypto Easily</h3>
          <p>With Bitsafe, sending crypto is as easy as entering an address and amount.</p>
        </div>

        {/* Receive Crypto Box */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center transform transition-transform duration-300 hover:scale-105">
          <FaDownload className="text-green-500 mx-auto mb-4" size={40} />
          <h3 className="text-xl font-semibold mb-2">Receive Crypto Safely</h3>
          <p>Share your wallet address with confidence and start receiving funds in seconds.</p>
        </div>

        {/* Transaction History Box */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center transform transition-transform duration-300 hover:scale-105">
          <FaHistory className="text-yellow-500 mx-auto mb-4" size={40} />
          <h3 className="text-xl font-semibold mb-2">Track Transactions</h3>
          <p>Keep a detailed record of all your transactions and never lose track of your funds.</p>
        </div>

        {/* Customer Support Box */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center transform transition-transform duration-300 hover:scale-105">
          <FaPhoneAlt className="text-purple-500 mx-auto mb-4" size={40} />
          <h3 className="text-xl font-semibold mb-2">24/7 Customer Support</h3>
          <p>Our support team is available around the clock to assist you with any issues or queries.</p>
        </div>

        {/* Multi-Currency Support Box */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center transform transition-transform duration-300 hover:scale-105">
          <FaCoins className="text-indigo-500 mx-auto mb-4" size={40} />
          <h3 className="text-xl font-semibold mb-2">Multi-Currency Support</h3>
          <p>Manage multiple cryptocurrencies effortlessly, all from within the Bitsafe wallet.</p>
        </div>

      </div>

      {/* Final message */}
      <p className="mt-10 text-center text-lg">
        Bitsafe offers a smooth experience for managing your cryptocurrency transactions, wallet security, and more. Get started today!
      </p>
    </div>
  );
}

export default About;
