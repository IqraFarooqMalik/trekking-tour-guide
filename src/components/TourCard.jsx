import React from 'react';
import { useNavigate } from 'react-router-dom';


const TourCard = ({ tour }) => {
  const navigate = useNavigate();

  function handleClick() {
    navigate(tour.moreInfoUrl); 
  }
  

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden py-8">
      <img src={tour.imageUrl} alt={tour.title} className="w-full h-48 px-5 object-cover object-center" />
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2">{tour.title}</h3>
        <p className="text-sm text-gray-700 mb-4">{tour.description}</p>
        <div className="mb-4">
          <p className="text-md font-bold">Highlights:</p>
          <ul className="list-disc list-inside">
            {tour.highlights.map((highlight, index) => (
              <li key={index} className="text-sm text-gray-700">{highlight}</li>
            ))}
          </ul>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <p className="text-md font-bold">Duration:</p>
            <p className="text-sm text-gray-700">{tour.duration}</p>
          </div>
          <div>
            <p className="text-md font-bold">Price:</p>
            <p className="text-sm text-gray-700">{tour.price}</p>
          </div>
        </div>
        <button 
          className="text-md block w-full mt-6 bg-teal-700 text-white px-4 py-2 rounded hover:bg-teal-800 transition duration-300" 
          onClick={handleClick}
        >
          Learn More
        </button>      
      </div>
    </div>
  );
};

export default TourCard;
