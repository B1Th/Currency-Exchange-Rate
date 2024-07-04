// src/slices/currencySlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchRates = createAsyncThunk(
  'currency/fetchRates',
  async (baseCurrency) => {
    const response = await fetch(
      `https://api.exchangerate-api.com/v4/latest/${baseCurrency}`
    );
    const data = await response.json();
    return data.rates;
  }
);

export const fetchFlags = createAsyncThunk(
  'currency/fetchFlags',
  async ({ baseCurrency, targetCurrency }) => {
    const response = await fetch(`https://restcountries.com/v3.1/all`);
    const countries = await response.json();
    const baseCountry = countries.find((country) =>
      country.currencies && country.currencies[baseCurrency]
    );
    const targetCountry = countries.find((country) =>
      country.currencies && country.currencies[targetCurrency]
    );
    return {
      baseCurrencyFlag: baseCountry ? baseCountry.flags.svg : '',
      targetCurrencyFlag: targetCountry ? targetCountry.flags.svg : '',
    };
  }
);

const currencySlice = createSlice({
  name: 'currency',
  initialState: {
    isActive: false,
    rates: {},
    baseCurrency: 'AUD',
    targetCurrency: 'NPR',
    exchangeRate: null,
    amount: 1,
    convertedAmount: null,
    loading: false,
    error: null,
    baseCurrencyFlag: '',
    targetCurrencyFlag: '',
  },
  reducers: {
    setBaseCurrency: (state, action) => {
      state.baseCurrency = action.payload;
    },
    setTargetCurrency: (state, action) => {
      state.targetCurrency = action.payload;
    },
    setAmount: (state, action) => {
      state.amount = action.payload;
      state.convertedAmount = state.exchangeRate * action.payload;
    },
    swapCurrencies: (state) => {
      const temp = state.baseCurrency;
      state.baseCurrency = state.targetCurrency;
      state.targetCurrency = temp;
      state.isActive = !state.isActive;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRates.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRates.fulfilled, (state, action) => {
        state.loading = false;
        state.rates = action.payload;
        state.exchangeRate = action.payload[state.targetCurrency];
        state.convertedAmount = action.payload[state.targetCurrency] * state.amount;
      })
      .addCase(fetchRates.rejected, (state, action) => {
        state.loading = false;
        state.error = 'Failed to fetch exchange rates';
      })
      .addCase(fetchFlags.fulfilled, (state, action) => {
        state.baseCurrencyFlag = action.payload.baseCurrencyFlag;
        state.targetCurrencyFlag = action.payload.targetCurrencyFlag;
      });
  },
});

export const { setBaseCurrency, setTargetCurrency, setAmount, swapCurrencies } = currencySlice.actions;

export default currencySlice.reducer;