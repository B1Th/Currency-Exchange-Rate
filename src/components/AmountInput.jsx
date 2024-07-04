import React from 'react';

const AmountInput = ({ amount, handleAmountChange }) => {
  return (
    <div className="mb-4 mt-8">
      <label className="block text-center text-gray-300 text-sm font-bold mb-2">Amount:</label>
      <div className='w-full flex justify-end'>
      <input
        type="number"
        min="0"
        value={amount}
        onChange={handleAmountChange}
        className="neumorphism-input"
      />
      </div>
    </div>
  );
};

export default AmountInput;
