import React from "react";

const CurrencySelector = ({ label, currency, handleChange, rates }) => {
  return (
    <div className="flex items-center space-x-4">
      <label className="text-gray-600">{label}:</label>
      <div className="relative">
        <select
          className="block appearance-none w-full bg-white border border-gray-300 text-gray-800 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-blue-500"
          value={currency}
          onChange={handleChange}
        >
          {Object.keys(rates).map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-800">
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M9.293 12.95l5.293-5.293a1 1 0 0 1 1.414 1.414l-6 6a1 1 0 0 1-1.414 0l-6-6a1 1 0 0 1 1.414-1.414l5.293 5.293a1 1 0 0 0 1.414 0z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default CurrencySelector;
