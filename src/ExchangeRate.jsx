import React, { useState, useEffect } from "react";
import "./App.css";
import CurrencySelector from "./components/CurrencySelector";
import AmountInput from "./components/AmountInput";
import ExchangeRateDisplay from "./components/ExchangeRateDisplay";

const ExchangeRate = () => {
  const [rates, setRates] = useState({});
  const [baseCurrency, setBaseCurrency] = useState("USD");
  const [targetCurrency, setTargetCurrency] = useState("EUR");
  const [exchangeRate, setExchangeRate] = useState(null);
  const [amount, setAmount] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRates = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `https://api.exchangerate-api.com/v4/latest/${baseCurrency}`
        );
        const data = await response.json();
        setRates(data.rates);
        setExchangeRate(data.rates[targetCurrency]);
        setConvertedAmount(data.rates[targetCurrency] * amount);
      } catch (error) {
        setError("Failed to fetch exchange rates");
      } finally {
        setLoading(false);
      }
    };

    fetchRates();
  }, [baseCurrency, targetCurrency, amount]);

  const handleBaseCurrencyChange = (event) => {
    setBaseCurrency(event.target.value);
  };

  const handleTargetCurrencyChange = (event) => {
    setTargetCurrency(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
    setConvertedAmount(event.target.value * exchangeRate);
  };

  return (
    <div className="rounded shadow-lg shadow-white border-white flex gap-7 flex-col p-9 text-white">
      <h1 className="font-bold text-4xl text-amber-200">Currency Exchange Rate</h1>
      <CurrencySelector
        label="Base Currency"
        currency={baseCurrency}
        handleChange={handleBaseCurrencyChange}
        rates={rates}
      />
      <CurrencySelector
        label="Target Currency"
        currency={targetCurrency}
        handleChange={handleTargetCurrencyChange}
        rates={rates}
      />
      <AmountInput amount={amount} handleAmountChange={handleAmountChange} />
      <ExchangeRateDisplay
        loading={loading}
        error={error}
        amount={amount}
        baseCurrency={baseCurrency}
        convertedAmount={convertedAmount}
        targetCurrency={targetCurrency}
      />
    </div>
  );
};

export default ExchangeRate;
