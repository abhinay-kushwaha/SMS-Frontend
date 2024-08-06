import React, { useState } from 'react';
import { IoIosAddCircleOutline } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

export default function AddStudent({ onClose, onAddStudent }) {
  const [name, setName] = useState('');
  const [studentClass, setStudentClass] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [profileImage, setProfileImage] = useState(null);

//   const handleSubmit =async (event) => {
//     event.preventDefault();
  
//   try {
//     const formData = new FormData();
//     formData.append('name', name);
//     formData.append('class', studentClass);
//     formData.append('gender', gender);
//     formData.append('email', email);
//     formData.append('phone', phone);
//     formData.append('password', password);
//     formData.append('image', profileImage);

//     await onAddStudent(formData);

//     // Reset form fields
//     setName('');
//     setStudentClass('');
//     setGender('');
//     setEmail('');
//     setPhone('');
//     setPassword('');
//     setProfileImage(null);
//     onClose();
//   } catch (error) {
//     console.error('Error adding student:', error);
//     // Handle error state or display error message to user
//   }
// };





const handleSubmit = async (event) => {
  event.preventDefault();

  try {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('class', studentClass);
    formData.append('gender', gender);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('password', password);
    formData.append('image', profileImage);

    await onAddStudent(formData);

    // Reset form fields
    setName('');
    setStudentClass('');
    setGender('');
    setEmail('');
    setPhone('');
    setPassword('');
    setProfileImage(null);
    onClose();
  } catch (error) {
    console.error('Error adding student:', error);
    // Handle error state or display error message to user
  }
};



  const handleClose = () => {
    onClose();
  };
  
  const handleFileChange = (e) => {
    setProfileImage(e.target.files[0]);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-100 bg-opacity-50 overflow-y-scroll mt-5">
      <div className="bg-white p-4 rounded-lg">
        <div className='flex justify-end'>
          <button onClick={handleClose}> <RxCross2 /></button>
        </div>
        <h3 className="text-2xl font-bold mb-4">Add Student</h3>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div className='flex space-x-10'>
              <div className="flex-1">
                <label className="block mb-1 font-medium">Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="relative flex-1">
                <label className="block mb-1 font-medium">Class</label>
                <select
                  value={studentClass}
                  onChange={(e) => setStudentClass(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                  required
                >
                  <option value="" disabled>Select class</option>
                  <option >MERN </option>
                  <option >Python</option>
                  <option>React</option>
                  <option>Digital Marketing</option>
                </select>
              </div>
              <div className="relative flex-1">
                <label className="block mb-1 font-medium">Gender</label>
                <select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                  required
                >
                  <option value="" disabled>Select gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
            <div className='grid grid-cols-2 gap-y-6 gap-x-6'>
              <div className='flex-1'>
                <label className="block mb-1 font-medium">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Phone Number</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 font-medium">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded mb-16"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1 font-medium" htmlFor="course-image">Student Profile</label>
                <input
                  type="file"
                  onChange={handleFileChange}
                  id="course-image"
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
            </div>
          </div>
          <div className='flex items-center gap-24 mb-16'>
            <div className='flex items-center gap-2 cursor-pointer'>
              <IoIosAddCircleOutline className='text-gray-700' />
              <p>Add another </p>
            </div>
            <button type="submit" className='bg-blue-300 hover:bg-indigo-100 transition duration-300 ease-out hover:ease-in flex items-center text-gray-700 rounded-md px-6 py-2'>Add Student</button>
          </div>
        </form>
      </div>
    </div>
  );
}
