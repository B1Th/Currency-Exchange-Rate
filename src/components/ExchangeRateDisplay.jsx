import React from 'react';

const ExchangeRateDisplay = ({
  loading,
  error,
  amount,
  baseCurrency,
  convertedAmount,
  targetCurrency
}) => {
  if (loading) return <p className="text-gray-300 text-center">Loading...</p>;
  if (error) return <p className="text-red-500 text-center">{error}</p>;

  return (
    <div className="mt-4 w-full text-center">
      <p className="text-lg font-semibold text-gray-300">
        {amount} {baseCurrency} = <span className="text-green-600">{convertedAmount?.toFixed(2)}</span> {targetCurrency}
      </p>
    </div>
  );
};

export default ExchangeRateDisplay;
