import React from 'react';
import { useNavigate } from 'react-router-dom';

const HeroSection = ({ heroSection }) => {
  const navigate = useNavigate();

  //for redirection to booking url
  const handleBooking = () => {
    navigate(heroSection.bookingButton.url); 
  };

  return (
    <section className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://t3.ftcdn.net/jpg/01/94/98/50/360_F_194985020_58xcG7TCsA9ehVi0dDdi62aS7VQsFp7A.jpg')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
        <h1 className="text-white text-4xl md:text-6xl font-bold mb-4 mx-4 text-center">{heroSection.welcomeMessage}</h1>
        <h2 className="text-white text-lg md:text-xl mb-8">{heroSection.callToAction}</h2>
        <button className="bg-teal-700 text-white px-4 py-2 rounded hover:bg-teal-800 transition duration-300" onClick={handleBooking}>{heroSection.bookingButton.text}</button>
        <div className="mt-10 pt-10 text-white text-center text-xs">
          <p className="mb-2">Contact us:</p>
          <p>Email: {heroSection.contactInfo.email}</p>
          <p>Phone: {heroSection.contactInfo.phone}</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
