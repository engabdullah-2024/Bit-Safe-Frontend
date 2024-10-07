import React from 'react';

function SendCrypto() {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold text-center mb-6">Send Crypto</h2>
      
      {/* Form Container */}
      <div className="max-w-md mx-auto bg-white p-6 rounded shadow-md">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Amount"
            className="border p-2 w-full rounded"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Wallet Address"
            className="border p-2 w-full rounded"
          />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-full rounded transition duration-300"
        >
          Send Crypto
        </button>
      </div>
    </div>
  );
}

export default SendCrypto;
