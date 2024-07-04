import React from 'react';

const CurrencySelector = ({ label, currency, flag, handleChange, rates }) => {
  return (
    <div className="mb-4">
      <label className="block text-center text-gray-300 text-sm font-bold mb-2">{label}:</label>
      <div className='flex justify-start items-center neumorphism-input'>
        {flag && <img src={flag} alt={`${currency} flag`} className="mr-2" width="20" />}
        <select
        value={currency}
        onChange={handleChange}
        className="bg-transparent w-full border-none outline-none"
        >
        {Object.keys(rates).map((rate) => (
          <option key={rate} value={rate}>
          
            {rate}
          </option>
        ))}
      </select></div>
    </div>
  );
};

export default CurrencySelector;
