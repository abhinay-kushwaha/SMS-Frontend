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

const MernStack = () => {
  return (
    <>
      <div className='flex flex-col justify-center items-center p-3 mt-16' style={{ backgroundImage: "url(https://i.pinimg.com/564x/c9/e1/86/c9e1865fc12448afb7f25a355dd7169b.jpg)", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
        <div className='flex flex-col justify-center items-center gap-2 mt-6 mb-6'>
          <p id ="typewriter" className='sm:text-4xl text-2xl font-bold mb-6'>Become a MERN Stack Developer</p>
          <p className='font-bold text-md flex justify-center items-center gap-2'><TiTick className='text-green-500 border border-black rounded-full' /> No prior coding experience required</p>
          <p className='font-bold text-md flex justify-center items-center gap-2'><TiTick className='text-green-500 border border-black rounded-full' /> 30 weeks full-time program with live classes</p>
          <p className='font-bold text-md flex justify-center items-center gap-2'><TiTick className='text-green-500 border border-black rounded-full' /> Top recruiters from PayTM, Walmart, Amazon</p>
          <button className='bg-indigo-300 text-white p-1 w-56 rounded-full hover:scale-110 hover:bg-indigo-700 transition duration-300 ease-out hover:ease-in'>DOWNLOAD BROCHURE</button>
        </div>
      </div>

      <div className='grid grid-cols-2 sm:grid-cols-4 p-10'>
        <div className='flex flex-col gap-3 items-center p-4 m-4 rounded-lg shadow-2xl border-2'>
          <MdComputer className='text-3xl' />
          <h1>Batch Starting</h1>
          <p>17 June, 2024</p>
        </div>
        <div className='flex flex-col gap-3 items-center p-4 m-4 rounded-lg shadow-2xl border-2'>
          <SlCalender className='text-3xl' />
          <h1>Duration</h1>
          <p>30 weeks</p>
        </div>
        <div className='flex flex-col gap-3 items-center p-4 m-4 rounded-lg shadow-2xl border-2'>
          <ImPower className='text-3xl' />
          <h1>Timings</h1>
          <p>*11 am to 11 pm Monday to Saturday</p>
        </div>
        <div className='flex flex-col gap-3 items-center p-4 m-4 rounded-lg shadow-2xl border-2'>
          <HiMiniUserGroup className='text-3xl' />
          <h1>Eligibility</h1>
          <p>12th Pass, Diploma & College Graduates, 18 - 28 years</p>
        </div>
      </div>

      <div className='flex flex-col items-center gap-2'>
        <h1 className='sm:text-4xl text-2xl font-bold'>Minimum criteria</h1>
        <h1 className='sm:text-4xl text-2xl font-bold'>for MERN Stack Program</h1>
        <p className='sm:text-2xl text-xl'>You should meet the following requirements to be eligible for this course.</p>
        <div className='grid grid-cols-2 sm:grid-cols-3 m-5 p-4 gap-4 border-2 border-blue-500 rounded-lg'>
          <div className='flex flex-col justify-center items-center m-3 p-3 shadow-2xl transform transition-transform duration-300 hover:scale-110'>
            <RiMedal2Fill className='text-3xl' />
            <h1>Qualification</h1>
            <p>12th Pass, Diploma & College Graduates</p>
          </div>
          <div className='flex flex-col justify-center items-center m-3 p-3 shadow-2xl transform transition-transform duration-300 hover:scale-110'>
            <IoMdPerson className='text-3xl' />
            <h1>Age</h1>
            <p>18 - 28 years</p>
          </div>
          <div className='flex flex-col justify-center items-center m-3 p-3 shadow-2xl transform transition-transform duration-300 hover:scale-110'>
            <FaRegAddressCard className='text-3xl' />
            <h1>ID</h1>
            <p>Valid Aadhaar Card</p>
          </div>
          <div className='flex flex-col justify-center items-center m-3 p-3 shadow-2xl transform transition-transform duration-300 hover:scale-110'>
            <TbWorld className='text-3xl' />
            <h1>Internet</h1>
            <p>A desktop or laptop with an uninterrupted service connection.</p>
          </div>
          <div className='flex flex-col justify-center items-center m-3 p-3 shadow-2xl transform transition-transform duration-300 hover:scale-110'>
            <GiPublicSpeaker className='text-3xl' />
            <h1>Communication Skills</h1>
            <p>Basic English - speaking, reading and writing</p>
          </div>
          <div className='flex flex-col justify-center items-center m-3 p-3 shadow-2xl transform transition-transform duration-300 hover:scale-110'>
            <h1 className='text-3xl font-bold'>+1</h1>
            <h1>CIBIL Score</h1>
            <p>650+</p>
          </div>
        </div>
      </div>

      <div className='flex flex-col items-center gap-2 m-4'>
        <h1 className='sm:text-4xl text-2xl font-bold'>Admission Process for MERN Stack Program</h1>
        <div className='grid grid-cols-2 sm:grid-cols-4 m-5 p-4 gap-4'>
          <div className='flex flex-col justify-center items-center m-3 p-3 shadow-2xl transform transition-transform duration-300 hover:scale-110'>
            <RiContactsFill className='text-3xl' />
            <h1>Crack the Admissions Test (MSAT)</h1>
          </div>
          <div className='flex flex-col justify-center items-center m-3 p-3 shadow-2xl transform transition-transform duration-300 hover:scale-110'>
            <MdComputer className='text-3xl' />
            <h1>Choose a course</h1>
          </div>
          <div className='flex flex-col justify-center items-center m-3 p-3 shadow-2xl transform transition-transform duration-300 hover:scale-110'>
            <TiTick className='text-3xl' />
            <h1>Complete KYC</h1>
          </div>
          <div className='flex flex-col justify-center items-center m-3 p-3 shadow-2xl transform transition-transform duration-300 hover:scale-110'>
            <IoVideocam className='text-3xl' />
            <h1>You are ready to join the batch</h1>
          </div>
        </div>
        <button className='bg-orange-200 text-xl p-1 w-44 transform transition-transform duration-300 hover:bg-orange-600 ease-out hover:ease-in rounded-md hover:scale-125'>Buy Now</button>
      </div>
    </>
  )
}

export default MernStack
