// import React, { useState } from 'react';
// import axios from 'axios';
// import { Link ,useNavigate} from 'react-router-dom';
// import { FaGoogle } from "react-icons/fa";
// import { FaApple } from "react-icons/fa";
// import { MdEmail } from "react-icons/md";
// import logo from '../Assets/logo1.png';

// const SignUp = ({ onClose }) => {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     confirmPassword: '',

//     gender: '',
//     phone: '',
//     subject: ''
//   });

//   const [errorMessage, setErrorMessage] = useState('');

//   const { name, email, password, confirmPassword,  gender, phone, subject } = formData;

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSignUp = async (e) => {
//     e.preventDefault();

//     if (password !== confirmPassword) {
//       setErrorMessage('Passwords do not match');
//       return;
//     }

//     try {
//       const response = await axios.post('http://localhost:8081/api/register', {
//         name,
//         email,
//         password,

//         gender,
//         phone,
//         subject
//       });

//       console.log('Registration successful:', response.data);
//       navigate('/login');
//       // Handle success (e.g., show a success message, redirect to login)
//     } catch (error) {
//       console.error('Registration failed:', error.message);
//       if (error.response) {
//         // Server responded with a status other than 200 range
//         setErrorMessage(error.response.data.message || 'Registration failed. Please try again.');
//       } else if (error.request) {
//         // Request was made but no response received
//         setErrorMessage('No response from server. Please try again later.');
//       } else {
//         // Something else happened
//         setErrorMessage('An error occurred. Please try again.');
//       }
//     }
//   };

//   return (
//     <div className='flex flex-col md:flex-row justify-evenly items-center md:h-full mt-16 m-8'>
//       <div className='shadow-2xl p-2 flex flex-col gap-3 justify-center w-full max-w-80'>
//         <p className='text-3xl ml-auto text-black cursor-pointer' onClick={onClose}>x</p>
//         <h1 className='font-bold font-serif text-xl sm:text-2xl text-center'>Create account</h1>
//         {errorMessage && <p className='text-red-500 text-center'>{errorMessage}</p>}
//         <form onSubmit={handleSignUp} className='flex flex-col justify-center gap-3'>
//           <input
//             className='border-2 pl-2 rounded'
//             type="text"
//             placeholder='Name'
//             name='name'
//             value={name}
//             onChange={handleChange}
//             required
//           />
//           <input
//             className='border-2 pl-2 rounded'
//             type="email"
//             placeholder='Email Address'
//             name='email'
//             value={email}
//             onChange={handleChange}
//             required
//           />
//           <input
//             className='border-2 pl-2 rounded'
//             type="password"
//             placeholder='Password'
//             name='password'
//             value={password}
//             onChange={handleChange}
//             required
//           />
//           <input
//             className='border-2 pl-2 rounded'
//             type="password"
//             placeholder='Confirm Password'
//             name='confirmPassword'
//             value={confirmPassword}
//             onChange={handleChange}
//             required
//           />
//           {/* <input
//             className='border-2 pl-2 rounded'
//             type="text"
//             placeholder='Gender'
//             name='gender'
//             value={gender}
//             onChange={handleChange}
//           /> */}

// <select
//             className='border-2 pl-2 rounded'
//             name='gender'
//             value={gender}
//             onChange={handleChange}
//             required
//           >
//             <option value="">Select Gender</option>
//             <option value="male">Male</option>
//             <option value="female">Female</option>
//             <option value="other">Other</option>
//           </select>
//           <input
//             className='border-2 pl-2 rounded'
//             type="text"
//             placeholder='Phone'
//             name='phone'
//             value={phone}
//             onChange={handleChange}
//           />
//           <input
//             className='border-2 pl-2 rounded'
//             type="text"
//             placeholder='Subject'
//             name='subject'
//             value={subject}
//             onChange={handleChange}
//           />
//           <button
//             type='submit'
//             className='bg-[#101735] text-white font-semibold font-serif rounded-full h-8'
//           >
//             Create Account
//           </button>
//         </form>
//         <div className='mt-4'>
//           <hr />
//           <p className='text-xs font-serif relative bottom-2 left-32'>Or with</p>
//         </div>
//         <div className='grid grid-cols-2 gap-2'>
//           <FaGoogle className='border rounded w-full h-8 p-1 col-span-2 bg-red-500 text-white' />
//           <FaApple className='border rounded w-full h-8 p-1 col-span-1 bg-blue-800 text-white' />
//           <MdEmail className='border rounded w-full h-8 p-1 col-span-1 bg-blue-500 text-white' />
//         </div>
//         <div className='flex justify-between text-xs font-serif p-2'>
//           <p>Already have an account?</p>
//           <Link to="/login"><a href='#' className='font-semibold text-blue-400'>Log in</a></Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sign




import React, { useState } from "react";
import axios from "axios";
import {message} from "antd"
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle, FaApple } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const SignUp = ({ onClose }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
    phone: "",
    subject: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const { name, email, password, confirmPassword, gender, phone, subject } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8081/api/register", {
        name,
        email,
        password,
        gender,
        phone,
        subject,
      });

      // console.log("Registration successful:", response.data);
      message.success("Registration successful:")
      navigate("/login");
      // Handle success (e.g., show a success message, redirect to login)
    } catch (error) {
      message.error("Registration failed:", error.message);
      if (error.response) {
        // Server responded with a status other than 200 range
        setErrorMessage(error.response.data.message || "Registration failed. Please try again.");
      } else if (error.request) {
        // Request was made but no response received
        setErrorMessage("No response from server. Please try again later.");
      } else {
        // Something else happened
        setErrorMessage("An error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-center h-screen" style={{ backgroundImage: "linear-gradient(to top, #d9afd9 0%, #97d9e1 100%)" }}>
      <div className="bg-white shadow-2xl p-4 rounded-lg max-w-md w-full">
        <div className="flex justify-center items-center w-full mb-3">
          <h1 className="font-bold mx-auto font-serif text-2xl text-center  ">Create Account</h1>
          <button className="text-3xl   text-black cursor-pointer relative -top-4">
            <Link to="/">x</Link>
          </button>
        </div>
        {errorMessage && <p className="text-red-500 text-center mb-4">{errorMessage}</p>}
        <form onSubmit={handleSignUp} className="flex flex-col gap-4">
          <input className="border-2 p-2 rounded focus:outline-none focus:border-purple-500" type="text" placeholder="Name" name="name" value={name} onChange={handleChange} required />
          <input className="border-2 p-2 rounded focus:outline-none focus:border-purple-500" type="email" placeholder="Email Address" name="email" value={email} onChange={handleChange} required />
          <input className="border-2 p-2 rounded focus:outline-none focus:border-purple-500" type="password" placeholder="Password" name="password" value={password} onChange={handleChange} required />
          <input
            className="border-2 p-2 rounded focus:outline-none focus:border-purple-500"
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleChange}
            required
          />
          <select className="border-2 p-2 rounded focus:outline-none focus:border-purple-500" name="gender" value={gender} onChange={handleChange} required>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <input className="border-2 p-2 rounded focus:outline-none focus:border-purple-500" type="text" placeholder="Phone" name="phone" value={phone} onChange={handleChange} />
          <input className="border-2 p-2 rounded focus:outline-none focus:border-purple-500" type="text" placeholder="Subject" name="subject" value={subject} onChange={handleChange} />
          <button type="submit" className="bg-purple-600 text-white font-semibold rounded-full py-2 mt-4 hover:bg-purple-700 transition-colors duration-300 focus:outline-none">
            Create Account
          </button>
        </form>
        <div className="mt-6">
          <hr className="border-gray-300" />
          <p className="text-sm text-center mt-4">Or continue with</p>
          <div className="flex justify-center gap-2 mt-2">
            {/* Example of correct usage of icons */}
            <FaGoogle className="border rounded-full p-2 bg-red-500 text-white cursor-pointer hover:bg-red-600 transition-colors duration-300" />
            <FaApple className="border rounded-full p-2 bg-blue-800 text-white cursor-pointer hover:bg-blue-900 transition-colors duration-300" />
            <MdEmail className="border rounded-full p-2 bg-blue-500 text-white cursor-pointer hover:bg-blue-600 transition-colors duration-300" />
          </div>
        </div>
        <div className="flex justify-center mt-4 text-sm">
          <p>
            Already have an account?{" "}
            <Link to="/login" className="text-blue-400 font-semibold ml-1 hover:text-blue-600 transition-colors duration-300">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
