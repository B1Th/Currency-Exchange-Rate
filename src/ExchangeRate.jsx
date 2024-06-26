import React, { useState, useEffect } from 'react';
import './App.css';
import CurrencySelector from './components/CurrencySelector';
import AmountInput from './components/AmountInput';
import ExchangeRateDisplay from './components/ExchangeRateDisplay';

const ExchangeRate = () => {
  const [rates, setRates] = useState({});
  const [baseCurrency, setBaseCurrency] = useState('USD');
  const [targetCurrency, setTargetCurrency] = useState('EUR');
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
        setError('Failed to fetch exchange rates');
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
    <div className="h-screen w-screen flex justify-center items-center gap-24 flex-col p-9 bg-soft-gray text-gray-800">
      <h1 className="text text-5xl text-center uppercase">Your Global Currency Companion</h1>
      <div className="neumorphism p-6 w-full max-w-md">
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
    </div>
  );
};

export default ExchangeRate;
