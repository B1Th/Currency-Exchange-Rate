import React from "react";

const ExchangeRateDisplay = ({
  loading,
  error,
  amount,
  baseCurrency,
  convertedAmount,
  targetCurrency,
}) => {
  return (
    <div>
      {loading ? (
        <p className="loading">Loading...</p>
      ) : error ? (
        <p className="error">{error}</p>
      ) : (
        <p className="text-emerald-600 font-bold">
          {amount} {baseCurrency} ={" "}
          {convertedAmount ? convertedAmount.toFixed(2) : "..."}{" "}
          {targetCurrency}
        </p>
      )}
    </div>
  );
};

export default ExchangeRateDisplay;
