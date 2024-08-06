import React, {useState} from 'react';
import Carousel from "./Carousel"
import HomeTwo from "./HomeTwo"
import OurCourses from "./OurCourses"
import FullStack from './FullStack';
import WhatOur from './WhatOur';
import WhatOurTwo from './WhatOurTwo';
import Header from '../Header';
import Footer from '../Footer';
import MainContent from './MainContent';
import SuccessStory from './SuccessStory';
import Testimonials from './Testimonial';

const Home = () => {
  return (
    <>
    <Header/>
    <Carousel/>
    <HomeTwo />
    <WhatOur />
    <OurCourses />
    <WhatOurTwo />
    <SuccessStory/>
    <Testimonials/>
    <MainContent/>
   <Footer/>
    </>
  )
}

export default Home
