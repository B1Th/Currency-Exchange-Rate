import React from 'react';

const ExchangeRateDisplay = ({
  loading,
  error,
  amount,
  baseCurrency,
  convertedAmount,
  targetCurrency
}) => {
  if (loading) return <p className="text-gray-700">Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="mt-4">
      <p className="text-lg font-semibold">
        {amount} {baseCurrency} is approximately {convertedAmount?.toFixed(2)} {targetCurrency}
      </p>
    </div>
  );
};

export default ExchangeRateDisplay;
