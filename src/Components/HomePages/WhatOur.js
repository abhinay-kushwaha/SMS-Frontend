import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import pooja from "../../Assets/PoojaVishwakarma.png"
import ajeet from "../../Assets/AjeetSaroj.png"
import abhinay from "../../Assets/abhinay.jpeg"
import sejal from "../../Assets/sejal-Jain.png"

const WhatOur = () => {
  // Settings for the carousel
  const settings = {
    dots: true,
    arrows:false,
    autoplay:true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className='grid grid-flow-row 2xl:grid-flow-col grid-cols-1 lg:grid-cols-4 items-center'>
      <div className='col-span-1 bg-orange-200 h-full w-full flex flex-col justify-center items-center lg:py-10 rounded-e-xl'>
        <h1 className='text-2xl sm:text-5xl font-bold text-center mb-4'>What Our Learners Say</h1>
        <p className='text-xl sm:text-2xl font-semibold text-[#4e4c4c] text-center mb-4'>100+ thousand people have already joined FutureEdge</p>
      </div>

      {/* Carousel */}
      <Slider {...settings} className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 m-4 p-4 col-span-1 sm:col-span-2 md:col-span-3'>
        <div className='relative'>
          <div className='flex h-full flex-col justify-center items-center gap-2 m-2 p-2 shadow-2xl bg-white rounded-xl'>
            <h1 className='font-bold text-center text-xl'>Pooja Vishwkarma</h1>
            <img className='w-44 h-44 rounded-full object-cover' src={pooja} alt='profile' />
            <p className='text-center'>Their teaching style and course structure makes web development easy and enjoyable. The hands-on approach and collaborative projects helped me grasp concepts effectively. I feel confident to apply my skills in real-world projects. Looking forward to more learning opportunities.</p>
            <h2 className='font-bold text-center text-md'>Currently Researching</h2>
          </div>
        </div>
        <div className='relative'>
          <div className='flex flex-col justify-center items-center gap-2 m-2 p-2 shadow-2xl bg-white rounded-xl'>
            <h1 className='font-bold text-center text-xl'>Ajeet Saroj</h1>
            <img className='w-44 h-44 rounded-full object-cover' src={ajeet} alt='profile' />
            <p className='text-center'>Company Name internship has been an amazing learning experience! Hands-on projects with MERN stack technologies (MongoDB, Express.js, React, Node.js) deepened my understanding . The supportive culture and mentorship fostered significant growth.</p>
            <h2 className='font-bold text-center text-md'>Currently Researching</h2>
          </div>
        </div>
        <div className='relative'>
          <div className='flex flex-col justify-center items-center gap-2 m-2 p-2 shadow-2xl bg-white rounded-xl'>
            <h1 className='font-bold text-center text-xl'>Abhinay Kushwaha</h1>
            <img className='w-44 h-44 rounded-full object-cover' src={abhinay} alt='profile' />
            <p className='text-center'>Thank you for the valuable content in the MERN Developer training program at Company Name. While the materials have been informative, I've noticed that the learning environment lacks energy. I appreciate the effort put into organizing the program and look forward to contributing to its success.</p>
            <h2 className='font-bold text-center text-md'>Currently Researching</h2>
          </div>
        </div>
        <div className='relative'>
          <div className='flex flex-col justify-center items-center gap-2 m-2 p-2 shadow-2xl bg-white rounded-xl'>
            <h1 className='font-bold text-center text-xl'>Sejal Jain</h1>
            <img className='w-44 h-44 rounded-full object-cover' src={sejal} alt='profile' />
            <p className='text-center'>This place is really very good It was my pleasure to work with such a wonderful organization like Company Name LLP. Earlier I was not able to crack interviews now I am able to crack Interviews. On the other hand the environment is also very good and everyone has a helping nature.</p>
            <h2 className='font-bold text-center text-md'>Currently Researching</h2>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default WhatOur;
