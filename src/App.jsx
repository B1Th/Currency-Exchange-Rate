import React from 'react';
import ExchangeRate from './ExchangeRate';
import Landing from './components/Landing';
import Footer from "./components/Footer"

export default function App() {
  return (
    <>
      <div className='gradient-to-r'>
        <main className="relative h-screen" id='home'>
          <Landing />
        </main>
        <div id='exRate' className="relative overflow-hidden h-screen flex justify-center items-center flex-col">
          <ExchangeRate />
        </div>
        <Footer />
      </div>
    </>
  );
}
