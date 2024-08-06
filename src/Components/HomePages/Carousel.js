import React  from 'react';
import 'tailwindcss/tailwind.css';
import first from '../../Assets/first.mp4'


const Carousel = () => {
 


  return (
    <div className="relative -top-20 ">
      <video autoPlay loop muted className='w-full h-[700px] object-cover z-0'
        src={first} type="video/mp4">
      </video>
    </div>

  );
};

export default Carousel;
