import React from 'react';
import TourCard from './TourCard'; 
import imageUrls from '../data/images.json'

const TourOffersSection = ({tours}) => {
 
  //Added public Image urls for tours in a json file and appending the tour object to add image url 
  //field in it which can be used in image card
  tours.forEach((tour, index) => {
    const imageUrlKey = "tour" + (index + 1);
    if (imageUrls[imageUrlKey]) {
      tour.imageUrl = imageUrls[imageUrlKey].imageUrl;
    }
  });

  return (
    <section className="py-8 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Tours</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tours.map(tour => (
            <TourCard key={tour.id} tour={tour}/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TourOffersSection;
