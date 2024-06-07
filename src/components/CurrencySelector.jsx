import React from "react";

const CurrencySelector = ({ label, currency, handleChange, rates }) => {
  return (
    <div>
      <label className="">
        {label}:
        <select className="text-black" value={currency} onChange={handleChange}>
          {Object.keys(rates).map((currency) => (
            <option  key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default CurrencySelector;
