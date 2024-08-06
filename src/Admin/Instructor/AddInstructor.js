
import React from 'react';
import { IoIosAddCircleOutline } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";


export default function AddInstructor({onClose}) {
  const handleClose = () => {
    onClose();
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-100 bg-opacity-50 overflow-y-scroll mt-5">

    <div className="bg-white p-4 max-w-xl mx-auto  rounded-lg">
    <div className='flex justify-end'> <button onClick={handleClose}> <RxCross2 /></button></div>
      <h3 className="text-2xl font-bold mb-4">Add Instructor</h3>
    
      <div className="space-y-4">

        <div className='flex space-x-4'>
          <div className="flex-1">
            <label className="block mb-1 font-medium"> Full Name</label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded"
            />
          </div>
        </div>

        <div className='flex space-x-4'>
        <div className='flex-1'>
          <label className="block mb-1 font-medium">Email Address</label>
          <input
            type="email"
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
        </div>

       

          {/* <div className="relative flex-1">
          <RiArrowDropDownLine className='absolute left-20 top-12 transform -translate-y-1/2 text-gray-500' />

            <label className="block mb-1 font-medium">Gender</label>
            <input
              type="text"
              placeholder='Gender'
              className="w-full px-3 py-2 border border-gray-300 rounded"
            />
          </div> */}

               <div class="relative  space-x-4 flex-1 mt-5">
                <select name="class" class= "w-full mt-2 p-2 border border-gray-300 rounded-md">
                    <option value="">Gender</option>
                    <option value="class-1">Male</option>
                    <option value="class-2">Female</option>
                </select>

            </div>




        </div>

<div className='flex space-x-4'>
        <div className='flex-1'>
          <label className="block mb-1 font-medium">Password</label>
          <input
            type="email"
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Phone Number</label>
          <input
            type="tel"
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
        </div>
     </div>

            <div class="mb-4">
                
                <select name="class" class= "w-full mt-2 p-2 border border-gray-300 rounded-md">
                    <option value="">Subject</option>
                    <option value="class-1">Subject 1</option>
                    <option value="class-2">Subject 2</option>
                </select>

            </div>

            <div class="mb-4">
        <label class="block mb-1 font-medium" for="course-image">Instructor Profile</label>
        <input type="file" id="course-image" class="w-full px-3 py-2 border rounded"/>
      </div>




      </div>

      <div className='flex items-center gap-24 mb-16'>
        <div className='flex items-center gap-2 cursor-pointer'>
          <IoIosAddCircleOutline className='text-gray-700' />
          <p>Add another </p>
        </div>
        <button className='bg-gray-300 flex items-center text-gray-700 rounded-md mt-4 px-6 py-2 '>Add Instructor</button>
      </div>
    </div>
    </div>
  );
}
