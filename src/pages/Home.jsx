import React, { useEffect, useState } from 'react';
import HeroSection from '../components/HeroSection';
import TourOffersSection from '../components/TourOffersSection';
import AboutGuideSection from '../components/AboutGuideSection';


const Home = () => {
  const [data, setData] = useState(null);
  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL

  //fetching data once form backend and then passing as props
  useEffect(() => {
    fetch(BACKEND_URL)
      .then(response => response.json())
      .then(data => setData(data));
  }, [BACKEND_URL]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <HeroSection heroSection={data.heroSection} />
      <TourOffersSection  tours={data.tours} />
      <AboutGuideSection guide={data.guide}/>
    </div>
  );
};

export default Home;