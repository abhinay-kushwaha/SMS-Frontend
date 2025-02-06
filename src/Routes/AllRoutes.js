
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../Components/Header';
// import Footer from '../Components/Footer';
import Home from '../Components/HomePages/Home';
import FullStack from '../Components/HomePages/FullStack';
import Python from '../Components/HomePages/Python';
import DigitalMar from '../Components/HomePages/DigitalMar';
import OurCourses from '../Components/HomePages/OurCourses';
import Login from '../Components/Login';
import SignUp from '../Components/SignUp';
import Footer from '../Components/Footer';
import MernStack from '../Components/HomePages/Mern';
import ContactUs from '../Components/HomePages/ContactUs';
import StudentContent from '../Components/StudentContent';
import StudProfile from '../Components/HomePages/StudProfile';
import AboutUs from '../Components/HomePages/AboutUs';

const AllRoutes = () => {
  return (
    <div className='flex flex-col justify-between h-screen'>
      <div><Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/ourCourses" element={<OurCourses />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/ourCourses/fullStack" element={<FullStack />} />
        <Route path="/ourCourses/python" element={<Python />} />
        <Route path="/ourCourses/digitalMar" element={<DigitalMar />} />
        <Route path="/mernstack" element={<MernStack />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/my-content/:studentId" element={<StudentContent />} />
        <Route path="/studprofile" element={<StudProfile />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes></div>
      <Footer />
    </div>
  );
};

export default AllRoutes;
