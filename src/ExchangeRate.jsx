// src/ExchangeRate.jsx
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import CurrencySelector from './components/CurrencySelector';
import AmountInput from './components/AmountInput';
import ExchangeRateDisplay from './components/ExchangeRateDisplay';
import { 
  fetchRates, 
  fetchFlags, 
  setBaseCurrency, 
  setTargetCurrency, 
  setAmount, 
  swapCurrencies 
} from './slices/currencySlice';

const ExchangeRate = () => {
  const dispatch = useDispatch();
  const { 
    isActive, 
    rates, 
    baseCurrency, 
    targetCurrency, 
    amount, 
    convertedAmount, 
    loading, 
    error, 
    baseCurrencyFlag, 
    targetCurrencyFlag 
  } = useSelector(state => state.currency);

  useEffect(() => {
    dispatch(fetchRates(baseCurrency));
    dispatch(fetchFlags({ baseCurrency, targetCurrency }));
  }, [dispatch, baseCurrency, targetCurrency]);

  const handleBaseCurrencyChange = (event) => {
    dispatch(setBaseCurrency(event.target.value));
  };

  const handleTargetCurrencyChange = (event) => {
    dispatch(setTargetCurrency(event.target.value));
  };

  const handleAmountChange = (event) => {
    dispatch(setAmount(event.target.value));
  };

  const handleSwapCurrencies = () => {
    dispatch(swapCurrencies());
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center gap-10 flex-col p-9 bg-soft-gray text-gray-800">
      <div id="about" className="mt-24 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">HOW TO USE?</h2>
        <p className="text-gray-200 max-w-2xl mx-auto">
        Start by selecting your base currency from the "From" dropdown, then choose the currency you want to convert to in the "To" menu. Enter the amount you wish to convert, and you'll instantly see the converted amount below, along with the current exchange rate. For quick currency swaps, simply use the swap button.          </p>
      </div>
      
      <div className="p-6 w-full max-w-md">
        <CurrencySelector
          label="From"
          currency={baseCurrency}
          flag={baseCurrencyFlag}
          handleChange={handleBaseCurrencyChange}
          rates={rates}
        />
        <div className="w-full flex justify-center">
          <button onClick={handleSwapCurrencies} className="p-2 border-2 border-gray-400 rounded-full">
            <img src="/exchange.png" alt="" className={`h-6 w-6 rotate-90 opacity-80 ${isActive ? 'swap' : ''}`} />
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