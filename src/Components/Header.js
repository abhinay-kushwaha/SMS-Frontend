// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { MdOutlineMenuBook } from 'react-icons/md';
// import logo from '../Assets/logo1.png';
// import '../index.css';

// const Header = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [navbar, setNavbar] = useState(false);
//   const navigate = useNavigate();

//   const [dropdown, setDropdown] = useState(false);

//   const toggleMenu = () => setMenuOpen(!menuOpen);
//   const closeMenu = () => setMenuOpen(false);
//   const handleResize = () => {
//     if (window.innerWidth >= 768) {
//       setMenuOpen(false);
//     }
//   };
//   const handleScroll = () => {
//     setNavbar(window.scrollY > 50);
//   };
//   const logout = () => {
//     localStorage.removeItem('token');
//     setIsLoggedIn(false);
//     navigate('/login');
//   };

//   useEffect(() => {
//     window.addEventListener('resize', handleResize);
//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('resize', handleResize);
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   let studentId = "";

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     studentId = localStorage.getItem('studentId');

//     if (token) {
//       setIsLoggedIn(true);
//     }
//   }, []);

//   return (
//     <div className={`flex justify-between items-center sticky top-0 w-full h-16 shadow-md z-10 mt-2 mb-2 transition-colors duration-300 ${navbar ? 'bg-indigo-100 text-black' : 'bg-transparent text-black'}`}>
//       <img src={logo} alt="Website Logo" className='w-32 m-6' />
//       <div className='md:hidden'>
//         <MdOutlineMenuBook className='text-3xl absolute md:static right-3 md:right-0 top-3' onClick={toggleMenu} />
//       </div>
//       <div className={`md:block ${menuOpen ? 'block' : 'hidden'}`}>
//         <div className='flex flex-col md:flex-row mt-80 md:m-0 p-3 md:p-0 items-center w-full md:gap-9 gap-2 md:font-normal'>
//           <Link className='hover:border-black hover:border-b-2 font-bold' to="/home" onClick={closeMenu}>Home</Link>
//           <Link className='hover:border-black hover:border-b-2 font-bold' to="/ourCourses" onClick={closeMenu}>Courses</Link>
//           <Link to="/about" className='hover:border-black hover:border-b-2 font-bold' onClick={closeMenu}>About Us</Link>
//           <Link to='contact'><button className='hover:border-black hover:border-b-2 font-bold'>Contact Us</button></Link>

//           {isLoggedIn ? (
//             <div className="relative inline-block text-left mr-11">
//               <button onClick={() => { alert("Hello"); setDropdown(true) }} className=" text-black font-bold py-2 px-4 rounded focus:outline-none">
//                 Profile
//               </button>

//               {
//                 dropdown &&

//                 (<div className="dropdown-content absolute hidden text-left text-black bg-white shadow-lg min-w-[160px] rounded-md mt-2">
//                   <Link to="/studprofile" className="block px-4 py-2 hover:bg-gray-200" onClick={closeMenu}>Profile</Link>
//                   <Link to={`/my-content/${studentId}`} className="block px-4 py-2 hover:bg-gray-200" onClick={closeMenu}>My Content</Link>
//                   <button className="block w-full text-left px-4 py-2 hover:bg-gray-200" onClick={() => { closeMenu(); logout(); }}>Logout</button>
//                 </div>)

//               }

//             </div>
//           ) : (
//             <>
//               <Link to="/login"><button className='border-2 px-2 border-indigo-900 rounded-md'>Login</button></Link>
//               <Link to="/signUp"><button className='border-2 px-2 border-indigo-900 rounded-md'>Sign Up</button></Link>
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;
// import React, { useState, useEffect, useRef } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { MdOutlineMenuBook } from 'react-icons/md';
// import logo from '../Assets/logo1.png';
// import '../index.css';

// const Header = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [navbar, setNavbar] = useState(false);
//   const [dropdown, setDropdown] = useState(false);
//   const dropdownRef = useRef(null);
//   const navigate = useNavigate();

//   const toggleMenu = () => setMenuOpen(!menuOpen);
//   const closeMenu = () => setMenuOpen(false);
//   const handleResize = () => {
//     if (window.innerWidth >= 768) {
//       setMenuOpen(false);
//     }
//   };
//   const handleScroll = () => {
//     setNavbar(window.scrollY > 50);
//   };
//   const logout = () => {
//     localStorage.removeItem('token');
//     setIsLoggedIn(false);
//     navigate('/login');
//   };

//   useEffect(() => {
//     window.addEventListener('resize', handleResize);
//     window.addEventListener('scroll', handleScroll);
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       window.removeEventListener('resize', handleResize);
//       window.removeEventListener('scroll', handleScroll);
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   const handleClickOutside = (event) => {
//     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//       setDropdown(false);
//     }
//   };

//   let studentId = "";

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     studentId = localStorage.getItem('studentId');
//     alert(studentId)

//     if (token) {
//       setIsLoggedIn(true);
//     }
//   }, []);

//   return (
//     <div className={`flex justify-between items-center sticky top-0 w-full h-16 shadow-md z-10 mt-2 mb-2 transition-colors duration-300 ${navbar ? 'bg-indigo-100 text-black' : 'bg-transparent text-black'}`}>
//       <img src={logo} alt="Website Logo" className='w-32 m-6' />
//       <div className='md:hidden'>
//         <MdOutlineMenuBook className='text-3xl absolute md:static right-3 md:right-0 top-3' onClick={toggleMenu} />
//       </div>
//       <div className={`md:block ${menuOpen ? 'block' : 'hidden'}`}>
//         <div className='flex flex-col md:flex-row mt-80 md:m-0 p-3 md:p-0 items-center w-full md:gap-9 gap-2 md:font-normal'>
//           <Link className='hover:border-black hover:border-b-2 font-bold' to="/home" onClick={closeMenu}>Home</Link>
//           <Link className='hover:border-black hover:border-b-2 font-bold' to="/ourCourses" onClick={closeMenu}>Courses</Link>
//           <Link to="/about" className='hover:border-black hover:border-b-2 font-bold' onClick={closeMenu}>About Us</Link>
//           <Link to='/contact'><button className='hover:border-black hover:border-b-2 font-bold'>Contact Us</button></Link>

//           {isLoggedIn ? (
//             <div className="relative inline-block text-left mr-11" ref={dropdownRef}>
//               <button onClick={() => setDropdown(!dropdown)} className=" text-black font-bold py-2 px-4 rounded focus:outline-none">
//                 Profile
//               </button>

//               {dropdown && (
//                 <div className="dropdown-content absolute text-left text-black bg-white shadow-lg min-w-[160px] rounded-md mt-2">
//                   <Link to="/studprofile" className="block px-4 py-2 hover:bg-gray-200" onClick={closeMenu}>Profile</Link>
//                   <Link to={`/my-content/${studentId}`} className="block px-4 py-2 hover:bg-gray-200" onClick={closeMenu}>My Content</Link>
//                   <button className="block w-full text-left px-4 py-2 hover:bg-gray-200" onClick={() => { closeMenu(); logout(); }}>Logout</button>
//                 </div>
//               )}
//             </div>
//           ) : (
//             <>
//               <Link to="/login"><button className='border-2 px-2 border-indigo-900 rounded-md'>Login</button></Link>
//               <Link to="/signUp"><button className='border-2 px-2 border-indigo-900 rounded-md'>Sign Up</button></Link>
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;



import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MdOutlineMenuBook } from 'react-icons/md';
import logo from '../Assets/logo1.png';
import '../index.css';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [studentId, setStudentId] = useState('');
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);
  const handleResize = () => {
    if (window.innerWidth >= 768) {
      setMenuOpen(false);
    }
  };
  const handleScroll = () => {
    setNavbar(window.scrollY > 50);
  };
  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('studentId');
    setIsLoggedIn(false);
    navigate('/login');
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdown(false);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    const storedStudentId = localStorage.getItem('studentId');

    if (token) {
      setIsLoggedIn(true);
      setStudentId(storedStudentId);
    }
  }, []);

  return (
    <div className={`flex justify-between items-center sticky top-0 w-full h-16 shadow-md z-10 mt-2 mb-2 transition-colors duration-300 ${navbar ? 'bg-indigo-100 text-black' : 'bg-transparent text-black'}`}>
      <img src={logo} alt="Website Logo" className='w-32 m-6' />
      <div className='md:hidden'>
        <MdOutlineMenuBook className='text-3xl absolute md:static right-3 md:right-0 top-3' onClick={toggleMenu} />
      </div>
      <div className={`md:block ${menuOpen ? 'block' : 'hidden'}`}>
        <div className='flex flex-col md:flex-row mt-80 md:m-0 p-3 md:p-0 items-center w-full md:gap-9 gap-2 md:font-normal'>
          <Link className='hover:border-black hover:border-b-2 font-bold' to="/home" onClick={closeMenu}>Home</Link>
          <Link className='hover:border-black hover:border-b-2 font-bold' to="/ourCourses" onClick={closeMenu}>Courses</Link>
          <Link to="/about" className='hover:border-black hover:border-b-2 font-bold' onClick={closeMenu}>About Us</Link>
          <Link to='/contact'><button className='hover:border-black hover:border-b-2 font-bold'>Contact Us</button></Link>

          {isLoggedIn ? (
            <div className="relative inline-block text-left mr-11" ref={dropdownRef}>
              <button onClick={() => setDropdown(!dropdown)} className=" text-black font-bold py-2 px-4 rounded focus:outline-none">
                Profile
              </button>

              {dropdown && (
                <div className="dropdown-content absolute text-left text-black bg-white shadow-lg min-w-[160px] rounded-md mt-2">
                  <Link to="/studprofile" className="block px-4 py-2 hover:bg-gray-200" onClick={closeMenu}>Profile</Link>
                  <Link to={`/my-content/${studentId}`} className="block px-4 py-2 hover:bg-gray-200" onClick={closeMenu}>My Content</Link>
                  <button className="block w-full text-left px-4 py-2 hover:bg-gray-200" onClick={() => { closeMenu(); logout(); }}>Logout</button>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link to="/login"><button className='border-2 px-2 border-indigo-900 rounded-md'>Login</button></Link>
              <Link to="/signUp"><button className='border-2 px-2 border-indigo-900 rounded-md'>Sign Up</button></Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;

