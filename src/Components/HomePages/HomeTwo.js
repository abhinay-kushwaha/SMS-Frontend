import React from 'react';
import 'tailwindcss/tailwind.css';
import team from "../../Assets/Team.gif"



const HomeTwo = () => {


  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5 sm:px-10 p-4 my-24">
      <div className="flex flex-col justify-center">
        <h1 className="text-2xl sm:text-4xl font-bold mb-4">
          Realise Your Potential With Assured Outcomes Delivered.
        </h1>
        <p className="text-xl sm:text-2xl mb-4">
          India’s only outcome-based career institute. Enter the tech workforce industry-ready.
        </p>
        <button className="sm:p-2 p-1 w-40 sm:w-fit   font-semibold sm:text-xl mb-4
        bg-blue-300 text-black rounded shadow-md hover:bg-indigo-200 transition duration-300 ease-out hover:ease-in">
          START LEARNING
        </button>
        <h6 className="text-sm">
          Awarded with the Excellent Training and Placements Award 2023
        </h6>
      </div>

      <div className="relative w-full h-96 mx-auto overflow-hidden">
        <img src={team} alt='gif' />
      </div>
    </div>
  );
};

export default HomeTwo;
