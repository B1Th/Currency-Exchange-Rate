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
          <a href="#converter" className="bg-yellow-400 text-gray-900 font-bold py-3 px-8 rounded-full text-lg hover:bg-yellow-300 transition-colors transform hover:scale-105 inline-block">
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

        <div id="about" className="mt-24 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">HOW TO USE?</h2>
          <p className="text-gray-200 max-w-2xl mx-auto">
          Start by selecting your base currency from the "From" dropdown, then choose the currency you want to convert to in the "To" menu. Enter the amount you wish to convert, and you'll instantly see the converted amount below, along with the current exchange rate. For quick currency swaps, simply use the swap button.          </p>
        </div>

        {/* <div id="contact" className="mt-24 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Get In Touch</h2>
          <p className="text-gray-200 mb-4">
            Have questions or feedback? We'd love to hear from you!
          </p>
          <a href="mailto:contact@currencypro.com" className="text-yellow-300 hover:underline">
            contact@currencypro.com
          </a>
        </div> */}
      </main>

      {/* <footer className="text-white py-6 mt-24">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 CurrencyPro. All rights reserved.</p>
        </div>
      </footer> */}
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