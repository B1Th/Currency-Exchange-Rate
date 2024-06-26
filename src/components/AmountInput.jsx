import React from 'react';

const AmountInput = ({ amount, handleAmountChange }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">Amount:</label>
      <input
        type="number"
        min="0"
        value={amount}
        onChange={handleAmountChange}
        className="neumorphism-input"
      />
    </div>
  );
};

export default AmountInput;
