import React from 'react';

function ReceiveCrypto() {
  const walletAddress = "bitsafe2022020"; // Example wallet address

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold text-center mb-6">Transaction Complete</h2>
      <p className="text-center mb-4">You have successfully sent:</p>

      {/* Information Box */}
      <div className="bg-gray-100 p-4 rounded text-center font-mono text-lg mb-6 shadow-lg">
        <span className="font-semibold">0.0 BTC</span> to <span className="font-semibold">0x123...abc</span>
      </div>

      <p className="text-center mt-4">Share your wallet address to receive more crypto:</p>

      {/* Wallet Address Box */}
      <div className="bg-gray-100 p-4 rounded text-center font-mono text-lg mt-2 shadow-lg">
        {walletAddress}
      </div>

      {/* Copy Wallet Address Button */}
      <div className="text-center mt-4">
        <button 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
        >
          Copy Wallet Address
        </button>
      </div>
    </div>
  );
}

export default ReceiveCrypto;
