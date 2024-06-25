import React from 'react';
import ExchangeRate from './ExchangeRate';
import Spline from '@splinetool/react-spline';

export default function App() {
  return (
    <>
      <div className='bg-gradient-to-br from-green-700 to-slate-500'>
      <main className="relative" id='home'>
     
        <Spline scene="https://prod.spline.design/Fcx0YjNO2mCBQQNt/scene.splinecode" />
        <div className="absolute bottom-20 right-8">
          <a href="#exRate" className='border-2 rounded-lg text-white border-white p-2'>Down</a>
        </div>
      </main>
      <div id='exRate' className="relative overflow-hidden h-screen flex justify-center items-center flex-col">
        <ExchangeRate />
        <div className="absolute bottom-8 right-8">
          <a href="#home" className='border-2 rounded-lg text-white border-white p-2'>Up</a>
        </div>
      </div>
      </div>
    </>
  );
}
