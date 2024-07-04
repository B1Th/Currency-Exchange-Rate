import React from 'react';
import ExchangeRate from './ExchangeRate';
import Landing from './components/Landing';
import Footer from "./components/Footer"

export default function App() {
  return (
    <>
        <Landing />
        <div id='exRate' className="h-screen overflow-hidden">
          <ExchangeRate />
        </div>
        <Footer />
    </>
  );
}
