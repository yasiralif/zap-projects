import React, { use } from 'react';

import HomeSlider from '../Slider/HomeSlider';
import Reviews from '../Reviews/Reviews';
import HomeServices from '../HomeServices/HomeServices';
import FQAQuestion from './FQA/FQAQuestion';


const Home = () => {

  return (
    <div className='gap-y-6'>
      <HomeSlider></HomeSlider>
      <Reviews ></Reviews>
      <HomeServices></HomeServices>

      <FQAQuestion></FQAQuestion>




    </div>
  );
};

export default Home;