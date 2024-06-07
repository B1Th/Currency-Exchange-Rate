import React from "react";

const CurrencySelector = ({ label, currency, handleChange, rates }) => {
  return (
    <div>
      <label>
        {label}:
        <select value={currency} onChange={handleChange}>
          {Object.keys(rates).map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default CurrencySelector;
