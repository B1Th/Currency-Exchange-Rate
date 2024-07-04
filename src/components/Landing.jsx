import React from 'react';

const Landing = () => {
  return (
    <div className="min-h-screen ">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          CurrencyPro
        </div>
        <nav>
          <ul className="flex space-x-6 text-white">
            <li><a href="#features" className="hover:text-yellow-300 transition-colors">Features</a></li>
            <li><a href="#about" className="hover:text-yellow-300 transition-colors">About</a></li>
            <li><a href="#contact" className="hover:text-yellow-300 transition-colors">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
            Convert Currencies <span className="text-yellow-300">Instantly</span>
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Get real-time exchange rates for over 170 currencies. Fast, accurate, and user-friendly.
          </p>
          <a href="#exRate" className="bg-yellow-400 text-gray-900 font-bold py-3 px-8 rounded-full text-lg hover:bg-yellow-300 transition-colors transform hover:scale-105 inline-block">
            Start Converting
          </a>
        </div>

        <div id="features" className="mt-24 grid md:grid-cols-3 gap-12">
          <FeatureCard 
            title="Real-Time Rates"
            description="Our rates are updated every minute, ensuring you always have the most current information."
          />
          <FeatureCard 
            title="Mobile Friendly"
            description="Convert on-the-go with our fully responsive design that works on any device."
          />
          <FeatureCard 
            title="Secure & Reliable"
            description="Bank-grade encryption and 99.9% uptime guarantee for a service you can trust."
          />
        </div>
      </main>
    </div>
  );
};

const FeatureCard = ({ title, description }) => {
  return (
    <div className="bg-white bg-opacity-10 rounded-lg p-6 text-center transform hover:scale-105 transition-transform">
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

export default Landing;