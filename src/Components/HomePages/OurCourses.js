import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { TiTick } from 'react-icons/ti';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField, Typography } from '@mui/material';
import mern from '../../Assets/mernn.jpg';
import python from '../../Assets/pythonn.jpg';
import dm from '../../Assets/dmm.jpg';
import mernStack from '../../Assets/mernstack.jpg';

const OurCourses = () => {
  const [open, setOpen] = useState(false);
  const [password, setPassword] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');
  const [courseDetails, setCourseDetails] = useState({});
  const navigate = useNavigate();

  const courses = {
    fullStack: {
      title: "Full Stack Web Development",
      price: "15000",
      duration: "30 weeks",
      description: "Become job-ready in 30 weeks with opportunities as a Full Stack Developer, Software Engineer & more. 100% live learning with expert instructors. Pay After Placement."
    },
    Python: {
      title: "Python",
      price: "9999",
      duration: "30 weeks",
      description: "Become job-ready in 30 weeks with opportunities as a Full Stack Developer, Software Engineer & more. 100% live learning with expert instructors. Pay After Placement."
    },
    DigitalMar: {
      title: "Digital Marketing",
      price: "7999",
      duration: "30 weeks",
      description: "Become job-ready in 30 weeks with opportunities as a Digital Marketer, SEO Specialist & more. 100% live learning with expert instructors. Pay After Placement."
    },
    mernstack: {
      title: "MERN Stack Developer",
      price: "14999",
      duration: "30 weeks",
      description: "Become job-ready in 30 weeks with opportunities as a MERN Stack Developer, Software Engineer & more. 100% live learning with expert instructors. Pay After Placement."
    }
  };

  const handleClickOpen = (course) => {
    setSelectedCourse(course);
    setCourseDetails(courses[course]);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setPassword('');
  };

  const handleBuyNow = () => {
    if (password === 'paid') {
      navigate(`/courseContent/${selectedCourse}`);
    } else {
      alert('Incorrect password');
    }
    handleClose();
  };

  const handlePayNow = () => {
    // Implement payment logic here
    alert('Payment successful!');
    handleClose();
  };

  // Settings for the carousel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <div className='lg:hidden flex flex-col justify-center items-center w-full bg-blue-200 rounded-s-lg mt-24'>
        <h1 className='text-2xl sm:text-5xl font-bold text-center mb-4'>
          Our Courses
        </h1>
        <p className='text-xl sm:text-2xl font-semibold text-[#4e4c4c] text-center mb-4'>
          Practice-Based Learning Tracks,
          <strong className='text-[#f55454] font-bold'>Supercharged By A.I.</strong>
        </p>
      </div>

      <div className='grid grid-flow-row lg:grid-flow-col grid-cols-4 mb-36 lg:mt-36'>
        {/* Carousel */}
        <Slider {...settings} className='lg:col-span-3 col-span-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-10 sm:px-12 p-5'>
          {/* Course 1: Full Stack Web Development */}
          <div className='flex flex-col font-semibold gap-3 shadow-2xl rounded-md p-2'>
            <img src={mern} alt='mern logo' className='rounded-t-lg m-auto' />
            <h1 className='font-bold text-center sm:text-left'>Full Stack Web Development</h1>
            <h2 className='rounded-full p-2 bg-blue-100 text-blue-800 font-bold'>For: 12th, Diploma & College Graduates (18-28 years)</h2>
            <h2 className='flex items-center'><TiTick className="text-green-600" /> Become job-ready in <strong>30 weeks</strong></h2>
            <h2 className='flex items-center'><TiTick className="text-green-600" /> <p><strong>Opportunities:</strong> Full Stack Developer, Software Engineer & more</p></h2>
            <h2 className='flex items-center'><TiTick className="text-green-600" /> 100% live learning with expert instructors</h2>
            <h2 className='flex items-center'><TiTick className="text-green-600" /> <strong>Pay After Placement</strong></h2>
            <Link to="/ourCourses/fullStack" className='bg-[#4e51f0] p-1 m-auto w-fit px-5 rounded-full text-white'><button>View More</button></Link>
            <button onClick={() => handleClickOpen('fullStack')} className='bg-[#e44141] text-white p-1 w-fit px-4 m-auto rounded-full'>Buy Now</button>
          </div>

          {/* Course 2: Python */}
          <div className='flex flex-col font-semibold gap-3 shadow-2xl rounded-md p-2'>
            <img src={python} alt='python logo' className='rounded-t-lg m-auto' />
            <h1 className='font-bold text-center sm:text-left'>Python</h1>
            <h2 className='rounded-full p-2 bg-blue-100 text-blue-800 font-bold'>For: 12th, Diploma & College Graduates (18-28 years)</h2>
            <h2 className='flex items-center'><TiTick className="text-green-600" /> Become job-ready in <strong>30 weeks</strong></h2>
            <h2 className='flex items-center'><TiTick className="text-green-600" /> <p><strong>Opportunities:</strong> Full Stack Developer, Software Engineer & more</p></h2>
            <h2 className='flex items-center'><TiTick className="text-green-600" /> 100% live learning with expert instructors</h2>
            <h2 className='flex items-center'><TiTick className="text-green-600" /> <strong>Pay After Placement</strong></h2>
            <Link to="/ourCourses/Python" className='bg-[#4e51f0] p-1 m-auto w-fit px-5 rounded-full text-white'><button>View More</button></Link>
            <button onClick={() => handleClickOpen('Python')} className='bg-[#e44141] text-white p-1 w-fit px-4 m-auto rounded-full'>Buy Now</button>
          </div>

          {/* Course 3: Digital Marketing */}
          <div className='flex flex-col font-semibold gap-3 shadow-2xl rounded-md p-2'>
            <img src={dm} alt='digital marketing logo' className='rounded-t-lg m-auto' />
            <h1 className='font-bold text-center sm:text-left'>Digital Marketing</h1>
            <h2 className='rounded-full p-2 bg-blue-100 text-blue-800 font-bold'>For: 12th, Diploma & College Graduates (18-28 years)</h2>
            <h2 className='flex items-center'><TiTick className="text-green-600" /> Become job-ready in <strong>30 weeks</strong></h2>
            <h2 className='flex items-center'><TiTick className="text-green-600" /> <p><strong>Opportunities:</strong> Full Stack Developer, Software Engineer & more</p></h2>
            <h2 className='flex items-center'><TiTick className="text-green-600" /> 100% live learning with expert instructors</h2>
            <h2 className='flex items-center'><TiTick className="text-green-600" /> <strong>Pay After Placement</strong></h2>
            <Link to="/ourCourses/DigitalMar" className='bg-[#4e51f0] p-1 m-auto w-fit px-5 rounded-full text-white'><button>View More</button></Link>
            <button onClick={() => handleClickOpen('DigitalMar')} className='bg-[#e44141] text-white p-1 w-fit px-4 m-auto rounded-full'>Buy Now</button>
          </div>

          {/* Course 4: MERN Stack Developer */}
          <div className='flex flex-col font-semibold gap-3 shadow-2xl rounded-md p-2'>
            <img src={mernStack} alt='mern logo' className='rounded-t-lg m-auto mb-28' />
            <h1 className='font-bold text-center sm:text-left'>MERN Stack Developer</h1>
            <h2 className='rounded-full p-2 bg-blue-100 text-blue-800 font-bold'>For: 12th, Diploma & College Graduates (18-28 years)</h2>
            <h2 className='flex items-center'><TiTick className="text-green-600" /> Become job-ready in <strong>30 weeks</strong></h2>
            <h2 className='flex items-center'><TiTick className="text-green-600" /> <p><strong>Opportunities:</strong> Full Stack Developer, Software Engineer & more</p></h2>
            <h2 className='flex items-center'><TiTick className="text-green-600" /> 100% live learning with expert instructors</h2>
            <h2 className='flex items-center'><TiTick className="text-green-600" /> <strong>Pay After Placement</strong></h2>
            <Link to="/mernstack" className='bg-[#4e51f0] p-1 m-auto w-fit px-5 rounded-full text-white'><button>View More</button></Link>
            <button onClick={() => handleClickOpen('mernstack')} className='bg-[#e44141] text-white p-1 w-fit px-4 m-auto rounded-full'>Buy Now</button>
          </div>
        </Slider>

        {/* Additional content for large screens */}
        <div className='flex flex-col justify-center items-center lg:col-span-1 bg-blue-200 rounded-s-lg'>
          <div className='hidden lg:block'>
            <h1 className='text-2xl sm:text-5xl font-bold text-center mb-4'>
              Our Courses
            </h1>
            <p className='text-xl sm:text-2xl font-semibold text-[#4e4c4c] text-center mb-4'>
              Practice-Based Learning Tracks,
              <strong className='text-[#f55454] font-bold'>Supercharged By A.I.</strong>
            </p>
          </div>
        </div>
      </div>

      {/* Course Details Modal */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle className='text-black font-extrabold'>Course Details</DialogTitle>
        <DialogContent>
          <Typography className='text-xl font-bold' variant="h6">{courseDetails.title}</Typography>
          <Typography variant="body1">{courseDetails.description}</Typography>
          <Typography variant="body1"><strong>Price:</strong> {courseDetails.price}</Typography>
          <Typography variant="body1"><strong>Duration:</strong> {courseDetails.duration}</Typography>
          <TextField
            autoFocus
            margin="dense"
            label="Password"
            type="password"
            fullWidth
            variant="standard"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handlePayNow} color="primary">
            Pay Now
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default OurCourses;
