import React from "react";

const AmountInput = ({ amount, handleAmountChange }) => {
  return (
    <div>
        <input className="text-black py-1 pl-1 rounded focus:ring-2 focus:outline-none"
        class="rounded-full bg-violet-100 text-xl border-2 border-blue-500 p-4 placeholder-black-400 focus:text-violet-950 focus:border--700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter amount"
          type="number"
          value={amount}
          onChange={handleAmountChange}
          min="0"
        />

    </div>
  );
};

export default AmountInput;
