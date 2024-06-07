import React from "react";

const AmountInput = ({ amount, handleAmountChange }) => {
  return (
    <div>
      <label>
        Amount:
        <input className="text-black py-1 pl-1 rounded focus:ring-2 focus:outline-none"
          type="number"
          value={amount}
          onChange={handleAmountChange}
          min="0"
        />
      </label>
    </div>
  );
};

export default AmountInput;
