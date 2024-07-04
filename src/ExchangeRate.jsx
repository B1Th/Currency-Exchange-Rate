import React, { useState, useEffect } from 'react';
import './App.css';
import CurrencySelector from './components/CurrencySelector';
import AmountInput from './components/AmountInput';
import ExchangeRateDisplay from './components/ExchangeRateDisplay';

const ExchangeRate = () => {
  const [rates, setRates] = useState({});
  const [baseCurrency, setBaseCurrency] = useState('AUD');
  const [targetCurrency, setTargetCurrency] = useState('NPR');
  const [exchangeRate, setExchangeRate] = useState(null);
  const [amount, setAmount] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [baseCurrencyFlag, setBaseCurrencyFlag] = useState('');
  const [targetCurrencyFlag, setTargetCurrencyFlag] = useState('');

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

  useEffect(() => {
    const fetchFlag = async (currency, setFlag) => {
      try {
        const response = await fetch(`https://restcountries.com/v3.1/all`);
        const countries = await response.json();
        const country = countries.find((country) =>
          country.currencies && country.currencies[currency]
        );
        if (country) {
          setFlag(country.flags.svg);
        } else {
          setFlag('');
        }
      } catch (error) {
        console.error('Failed to fetch flag', error);
      }
    };

    fetchFlag(baseCurrency, setBaseCurrencyFlag);
    fetchFlag(targetCurrency, setTargetCurrencyFlag);
  }, [baseCurrency, targetCurrency]);

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

  const swapCurrencies = () => {
    const newBaseCurrency = targetCurrency;
    const newTargetCurrency = baseCurrency;
    setBaseCurrency(newBaseCurrency);
    setTargetCurrency(newTargetCurrency);
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center gap-24 flex-col p-9 bg-soft-gray text-gray-800">
     
      <div className="p-6 w-full max-w-md">
        <CurrencySelector
          label="From"
          currency={baseCurrency}
          flag={baseCurrencyFlag}
          handleChange={handleBaseCurrencyChange}
          rates={rates}
        />
        <div className="w-full flex justify-center">
        <button onClick={swapCurrencies} className="p-2 border-2 border-gray-400 rounded-full">
          <img src="/exchange.png" alt="" className="h-6 w-6 rotate-90 grayscale opacity-50" />
        </button>
        </div>
        <CurrencySelector
          label="To"
          currency={targetCurrency}
          flag={targetCurrencyFlag}
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
