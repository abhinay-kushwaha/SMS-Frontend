// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import { FaGoogle, FaApple } from 'react-icons/fa';
// import { MdEmail } from 'react-icons/md';


// const Login = ({ onClose }) => {
//   const [formData, setFormData] = useState({ email: '', password: '' });
//   const navigate = useNavigate();
//   const { email, password } = formData;

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post('http://localhost:8081/api/login', { email, password });
//       const { token, role, id } = response.data;
    
 
     

//       localStorage.setItem('token', token);
//       localStorage.setItem('role', role);
//       localStorage.setItem('studentId', id);

//       if (role === 'Admin' || role === 'Instructor') {
//         navigate('/dashboard');
//       } else if (role === 'Student') {
//         navigate('/home');
//       } else {
//         console.error('Unknown role:', role);
//       }
//     } catch (error) {
//       console.error('Login failed:', error.response ? error.response.data : error.message);
//     }
//   };

//   return (
//     <div className='flex flex-col md:flex-row justify-center items-center h-screen' style={{ backgroundImage: 'linear-gradient(to top, #d9afd9 0%, #97d9e1 100%)' }}>
//       <div className='bg-white shadow-2xl p-8 rounded-lg max-w-md w-full transform transition-transform duration-300 hover:scale-105'>
//         <button className='text-2xl ml-auto text-black' onClick={onClose}>&times;</button>
//         <h1 className='font-bold font-serif text-2xl text-center mb-6'>Hi, Welcome!👋</h1>
//         <form onSubmit={handleLogin} className='flex flex-col gap-4'>
//           <div className='flex flex-col'>
//             <label className='text-sm'>Email Address</label>
//             <input
//               className='border-2 p-2 rounded focus:outline-none focus:border-purple-500'
//               type='email'
//               placeholder='Email Address'
//               name='email'
//               value={email}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className='flex flex-col'>
//             <label className='text-sm'>Password</label>
//             <input
//               className='border-2 p-2 rounded focus:outline-none focus:border-purple-500'
//               type='password'
//               placeholder='Password'
//               name='password'
//               value={password}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className='flex justify-between items-center text-sm'>
//             <div className='flex items-center'>
//               <input type='checkbox' id='remember' />
//               <label htmlFor='remember' className='ml-2'>Remember me</label>
//             </div>
//             <a href='#' className='text-purple-600 font-semibold'>Forgot password?</a>
//           </div>
//           <button type='submit' className='bg-purple-600 text-white font-semibold rounded-full py-2 mt-4 hover:bg-purple-700 transition-colors duration-300'>Log in</button>
//         </form>
//         <div className='mt-6 text-center'>
//           <hr className='border-gray-300 mb-4' />
//           <p className='text-sm'>Or with</p>
//           <div className='flex justify-center gap-4 mt-4'>
//             <FaGoogle className='text-red-500 w-8 h-8 cursor-pointer transform hover:scale-110 transition-transform duration-300' />
//             <FaApple className='text-gray-800 w-8 h-8 cursor-pointer transform hover:scale-110 transition-transform duration-300' />
//             <MdEmail className='text-blue-500 w-8 h-8 cursor-pointer transform hover:scale-110 transition-transform duration-300' />
//           </div>
//         </div>
//         <div className='mt-6 text-center text-sm'>
//           <span>Don't have an account? </span>
//           <Link to='/signUp' className='text-purple-600 font-semibold hover:text-purple-800 transition-colors duration-300'>Sign Up</Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;



import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FaGoogle, FaApple } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Login = ({ onClose }) => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();
  const { email, password } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8081/api/login', { email, password });
      const { token, role, id } = response.data;

      localStorage.setItem('token', token);
      localStorage.setItem('role', role);
      localStorage.setItem('studentId', id);

      if (role === 'Admin' || role === 'Instructor') {
        navigate('/dashboard');
      } else if (role === 'Student') {
        navigate('/home');
      } else {
        console.error('Unknown role:', role);
      }
    } catch (error) {
      console.error('Login failed:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className='flex flex-col md:flex-row justify-center items-center h-screen' style={{ backgroundImage: 'linear-gradient(to top, #d9afd9 0%, #97d9e1 100%)' }}>
      <div className='bg-white shadow-2xl p-8 rounded-lg max-w-md w-full transform transition-transform duration-300 hover:scale-105'>
        <button className='text-2xl ml-auto text-black' onClick={onClose}>&times;</button>
        <h1 className='font-bold font-serif text-2xl text-center mb-6'>Hi, Welcome!👋</h1>
        <form onSubmit={handleLogin} className='flex flex-col gap-4'>
          <div className='flex flex-col'>
            <label className='text-sm'>Email Address</label>
            <input
              className='border-2 p-2 rounded focus:outline-none focus:border-purple-500'
              type='email'
              placeholder='Email Address'
              name='email'
              value={email}
              onChange={handleChange}
              required
            />
          </div>
          <div className='flex flex-col'>
            <label className='text-sm'>Password</label>
            <input
              className='border-2 p-2 rounded focus:outline-none focus:border-purple-500'
              type='password'
              placeholder='Password'
              name='password'
              value={password}
              onChange={handleChange}
              required
            />
          </div>
          <div className='flex justify-between items-center text-sm'>
            <div className='flex items-center'>
              <input type='checkbox' id='remember' />
              <label htmlFor='remember' className='ml-2'>Remember me</label>
            </div>
            <a href='#' className='text-purple-600 font-semibold'>Forgot password?</a>
          </div>
          <button type='submit' className='bg-purple-600 text-white font-semibold rounded-full py-2 mt-4 hover:bg-purple-700 transition-colors duration-300'>Log in</button>
        </form>
        <div className='mt-6 text-center'>
          <hr className='border-gray-300 mb-4' />
          <p className='text-sm'>Or with</p>
          <div className='flex justify-center gap-4 mt-4'>
            <FaGoogle className='text-red-500 w-8 h-8 cursor-pointer transform hover:scale-110 transition-transform duration-300' />
            <FaApple className='text-gray-800 w-8 h-8 cursor-pointer transform hover:scale-110 transition-transform duration-300' />
            <MdEmail className='text-blue-500 w-8 h-8 cursor-pointer transform hover:scale-110 transition-transform duration-300' />
          </div>
        </div>
        <div className='mt-6 text-center text-sm'>
          <span>Don't have an account? </span>
          <Link to='/signUp' className='text-purple-600 font-semibold hover:text-purple-800 transition-colors duration-300'>Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
