import React, { useState, useEffect } from 'react';

function WalletBalance() {
  // State to hold the balance and currency data
  const [balance, setBalance] = useState(0);
  const [currency, setCurrency] = useState('BTC');

  // Dummy data fetching function (replace this with real API calls)
  useEffect(() => {
    // Simulate fetching data from an API (e.g., for Bitcoin balance)
    const fetchBalance = async () => {
      // In a real app, you would fetch from a cryptocurrency API here
      const mockBalance = 1.2345;  // Example balance
      setBalance(mockBalance);
    };

    fetchBalance();
  }, []);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <h2 className="text-xl font-bold mb-4">Your Wallet Balance</h2>
      <p className="text-4xl font-semibold">
        {balance} {currency}
      </p>
      <p className="text-gray-500">Current balance in {currency}</p>
    </div>
  );
}

export default WalletBalance;
