import React from 'react'

const Footer = () => {
  return (
    <>
        <div id="contact" className="mt-24 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Get In Touch</h2>
          <p className="text-gray-200 mb-4">
            Have questions or feedback? We'd love to hear from you!
          </p>
          <a href="mailto:contact@currencypro.com" className="text-yellow-300 hover:underline">
            contact@currencypro.com
          </a>
        </div>

         <footer className="text-white py-6 mt-10">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; 2024 CurrencyPro. All rights reserved.</p>
          </div>
        </footer> 
    </>
  )
}

export default Footer