import React from "react";

const AmountInput = ({ amount, handleAmountChange }) => {
  return (
    <div>
      <label>
        Amount:
        <input
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
