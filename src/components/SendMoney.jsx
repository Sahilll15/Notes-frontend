import React, { useState } from 'react';

const SendMoneyCard = () => {
  const [recipientName, setRecipientName] = useState('');
  const [amount, setAmount] = useState('');

  const handleSend = () => {
    console.log(`Sending ${amount} to ${recipientName}`);
  }

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="text-center p-4">
        <h2 className="text-2xl font-bold">Send Money</h2>
      </div>
      <div className="p-4">
        <div className="mb-4">
          <label htmlFor="recipientName" className="block text-gray-700 text-sm font-bold mb-2">Recipient Name</label>
          <input
            type="text"
            id="recipientName"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Recipient Name"
            value={recipientName}
            onChange={(e) => setRecipientName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="amount" className="block text-gray-700 text-sm font-bold mb-2">Amount</label>
          <input
            type="number"
            id="amount"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className="text-center">
          <button
            onClick={handleSend}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default SendMoneyCard;
