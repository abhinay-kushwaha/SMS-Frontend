import React from 'react'
import { TiTick } from "react-icons/ti";
import { MdComputer } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { ImPower } from "react-icons/im";
import { HiMiniUserGroup } from "react-icons/hi2";
import { RiMedal2Fill } from "react-icons/ri";
import { IoMdPerson } from "react-icons/io";
import { FaRegAddressCard } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";
import { GiPublicSpeaker } from "react-icons/gi";
import { RiContactsFill } from "react-icons/ri";
import { IoVideocam } from "react-icons/io5";
import full from '../../Assets/full.mp4';

const FullStack = () => {
  return (
    <>
      <div className='relative flex flex-col justify-center items-center p-3 mt-2' style={{ height: "400px", width: "100%" }}>
        <video autoPlay loop muted playsInline className='absolute top-0 left-0 w-full h-full object-cover'>
          <source src={full} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className='relative z-10 text-black text-center'>
          <h1 id ="typewriter" className='sm:text-5xl text-3xl font-bold mb-6'>Become a Full Stack Web Developer</h1>
          <p className='font-bold text-lg flex justify-center items-center gap-2'><TiTick className='text-green-500'/> No prior coding experience required</p>
          <p className='font-bold text-lg flex justify-center items-center gap-2'><TiTick className='text-green-500'/> 30 weeks full-time program with live classes</p>
          <p className='font-bold text-lg flex justify-center items-center gap-2'><TiTick className='text-green-500'/> Top recruiters from PayTM, Walmart, Amazon</p>
          <button className='bg-indigo-600 text-white p-2 px-8 rounded-full mt-4 hover:scale-110 hover:bg-indigo-800 transition duration-300 ease-out hover:ease-in'>DOWNLOAD BROCHURE</button>
        </div>
      </div>

      <div className='grid grid-cols-2 sm:grid-cols-4 p-10 gap-6'>
        <div className='flex flex-col gap-3 items-center p-4 rounded-lg shadow-xl border-2'>
          <MdComputer className='text-4xl text-indigo-600'/>
          <h2 className='font-semibold text-xl'>Batch Starting</h2>
          <p className='text-gray-700'>17 June, 2024</p>
        </div>
        <div className='flex flex-col gap-3 items-center p-4 rounded-lg shadow-xl border-2'>
          <SlCalender className='text-4xl text-indigo-600'/>
          <h2 className='font-semibold text-xl'>Duration</h2>
          <p className='text-gray-700'>30 weeks</p>
        </div>
        <div className='flex flex-col gap-3 items-center p-4 rounded-lg shadow-xl border-2'>
          <ImPower className='text-4xl text-indigo-600'/>
          <h2 className='font-semibold text-xl'>Timings</h2>
          <p className='text-gray-700'>11 am to 11 pm<br/>Monday to Saturday</p>
        </div>
        <div className='flex flex-col gap-3 items-center p-4 rounded-lg shadow-xl border-2'>
          <HiMiniUserGroup className='text-4xl text-indigo-600'/>
          <h2 className='font-semibold text-xl'>Eligibility</h2>
          <p className='text-gray-700'>12th Pass, Diploma & College Graduates,<br/>18 - 28 years</p>
        </div>
      </div>

      <div className='flex flex-col items-center gap-4 py-10'>
        <h1 className='sm:text-4xl text-2xl font-bold'>Minimum Criteria</h1>
        <h2 className='sm:text-2xl text-xl font-semibold'>for Full Stack Web Development Program</h2>
        <p className='sm:text-xl text-lg text-center text-gray-700'>You should meet the following requirements to be eligible for this course.</p>
        <div className='grid grid-cols-2 sm:grid-cols-3 gap-6 p-6 border-2 border-blue-500 rounded-lg'>
          <div className='flex flex-col items-center p-4 shadow-xl transform transition-transform duration-300 hover:scale-105'>
            <RiMedal2Fill className='text-4xl text-indigo-600'/>
            <h3 className='font-semibold text-xl'>Qualification</h3>
            <p className='text-gray-700'>12th Pass, Diploma & College Graduates</p>
          </div>
          <div className='flex flex-col items-center p-4 shadow-xl transform transition-transform duration-300 hover:scale-105'>
            <IoMdPerson className='text-4xl text-indigo-600'/>
            <h3 className='font-semibold text-xl'>Age</h3>
            <p className='text-gray-700'>18 - 28 years</p>
          </div>
          <div className='flex flex-col items-center p-4 shadow-xl transform transition-transform duration-300 hover:scale-105'>
            <FaRegAddressCard className='text-4xl text-indigo-600'/>
            <h3 className='font-semibold text-xl'>ID</h3>
            <p className='text-gray-700'>Valid Aadhaar Card</p>
          </div>
          <div className='flex flex-col items-center p-4 shadow-xl transform transition-transform duration-300 hover:scale-105'>
            <TbWorld className='text-4xl text-indigo-600'/>
            <h3 className='font-semibold text-xl'>Internet</h3>
            <p className='text-gray-700'>A desktop or laptop with an uninterrupted service connection.</p>
          </div>
          <div className='flex flex-col items-center p-4 shadow-xl transform transition-transform duration-300 hover:scale-105'>
            <GiPublicSpeaker className='text-4xl text-indigo-600'/>
            <h3 className='font-semibold text-xl'>Communication Skills</h3>
            <p className='text-gray-700'>Basic English - speaking, reading and writing</p>
          </div>
          <div className='flex flex-col items-center p-4 shadow-xl transform transition-transform duration-300 hover:scale-105'>
            <h3 className='text-4xl font-bold text-indigo-600'>+1</h3>
            <h3 className='font-semibold text-xl'>CIBIL Score</h3>
            <p className='text-gray-700'>650+</p>
          </div>
        </div>
      </div>

      <div className='flex flex-col items-center gap-4 py-10'>
        <h1 className='sm:text-4xl text-2xl font-bold'>Admission Process for Full Stack Web Development Program</h1>
        <div className='grid grid-cols-2 sm:grid-cols-4 gap-6 p-6'>
          <div className='flex flex-col items-center p-4 shadow-xl'>
            <RiContactsFill className='text-4xl text-indigo-600'/>
            <h3 className='font-semibold text-xl'>Crack the Admissions Test (MSAT)</h3>
          </div>
          <div className='flex flex-col items-center p-4 shadow-xl'>
            <MdComputer className='text-4xl text-indigo-600'/>
            <h3 className='font-semibold text-xl'>Choose a course</h3>
          </div>
          <div className='flex flex-col items-center p-4 shadow-xl'>
            <TiTick className='text-4xl text-indigo-600'/>
            <h3 className='font-semibold text-xl'>Complete KYC</h3>
          </div>
          <div className='flex flex-col items-center p-4 shadow-xl'>
            <IoVideocam className='text-4xl text-indigo-600'/>
            <h3 className='font-semibold text-xl'>You are ready to join the batch</h3>
          </div>
        </div>
        <button className='bg-orange-500 text-white text-xl p-2 px-8 rounded-md mt-4 transform transition-transform duration-300 hover:bg-orange-700 hover:scale-110'>Buy Now</button>
      </div>
    </>
  )
}

export default FullStack
