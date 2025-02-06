import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Carousel from "./Carousel";
import HomeTwo from "./HomeTwo";
import OurCourses from "./OurCourses";
import FullStack from "./FullStack";
import WhatOur from "./WhatOur";
import WhatOurTwo from "./WhatOurTwo";
import Header from "../Header";
import Footer from "../Footer";
import MainContent from "./MainContent";
import SuccessStory from "./SuccessStory";
import Testimonials from "./Testimonial";

const Home = () => {
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
    <>
    {!isLoggedIn && <Header />}

      {/* <Header /> */}
      <Carousel />
      <HomeTwo />
      <WhatOur />
      <OurCourses />
      <WhatOurTwo />
      <SuccessStory />
      <Testimonials />
      <MainContent />
      {!isLoggedIn && <Footer />}
      {/* <Footer /> */}
    </>
  );
};

export default Home;
