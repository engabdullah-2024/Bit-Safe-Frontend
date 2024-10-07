import React from 'react';

function TransactionHistory() {
  // Sample transaction data
  const transactions = [
    { id: 1, type: 'Sent', amount: '0.5 BTC', date: '2024-10-01' },
    { id: 2, type: 'Received', amount: '1.0 ETH', date: '2024-09-30' },
  ];

  return (
    <div className="mt-4 p-4">
      <h2 className="text-xl font-bold">Transaction History</h2>
      <div className="overflow-x-auto mt-2">
        <table className="min-w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-200 p-2">Date</th>
              <th className="border border-gray-200 p-2">Type</th>
              <th className="border border-gray-200 p-2">Amount</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id} className="hover:bg-gray-100">
                <td className="border border-gray-200 p-2">{transaction.date}</td>
                <td className="border border-gray-200 p-2">{transaction.type}</td>
                <td className="border border-gray-200 p-2">{transaction.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TransactionHistory;
