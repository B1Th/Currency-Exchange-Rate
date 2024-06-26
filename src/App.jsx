import React from 'react';
import ExchangeRate from './ExchangeRate';
import Spline from '@splinetool/react-spline';

export default function App() {
  return (
    <>
      <div className='gradient-to-r'>
        <main className="relative h-screen" id='home'>
          <Spline scene="https://prod.spline.design/Fcx0YjNO2mCBQQNt/scene.splinecode" />
          <div className="absolute bottom-20 px-3 py-2 shadow-xl right-8 bg-gradient-to-t from-fuchsia-500 to-fuchsia-800  rounded border-none ">
            <a href="#exRate" className=' rounded-lg text-white'>Down</a>
          </div> 
        </main>
        <div id='exRate' className="relative overflow-hidden h-screen flex justify-center items-center flex-col">
          <ExchangeRate />
          <div className="absolute bottom-20 px-3 py-2 shadow-xl right-8 bg-gradient-to-t from-fuchsia-500 to-fuchsia-800  rounded border-none ">
            <a href="#home" className=' rounded-lg text-white'>Up</a>
          </div>
        </div>
      </div>
    </>
  );
}
