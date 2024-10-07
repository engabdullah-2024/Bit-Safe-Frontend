import React from 'react';
import WalletBalance from '../components/WalletBalance';
import TransactionHistory from '../components/TransactionHistory';

function Home() {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-6 text-center">Welcome to Bitsafe</h2>
      
      {/* Wallet Balance Section */}
      <div className="mb-8">
        <WalletBalance />
      </div>

      {/* Transaction History Section */}
      <div className="mb-8">
        <TransactionHistory />
      </div>

      {/* Send and Receive Buttons */}
      <div className="flex justify-center space-x-4 mt-4">
        <a href="/send" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300">
          Send Crypto
        </a>
        <a href="/receive" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-300">
          Receive Crypto
        </a>
      </div>
    </div>
  );
}

export default Home;
