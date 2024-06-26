import React from 'react';

const CurrencySelector = ({ label, currency, handleChange, rates }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">{label}:</label>
      <select
        value={currency}
        onChange={handleChange}
        className="neumorphism-input"
      >
        {Object.keys(rates).map((rate) => (
          <option key={rate} value={rate}>
            {rate}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CurrencySelector;
