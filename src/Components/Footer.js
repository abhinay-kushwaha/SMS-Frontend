// import React from 'react'
// import { FaLinkedin } from "react-icons/fa";
// import { FaFacebookSquare } from "react-icons/fa";
// import { FaSquareInstagram } from "react-icons/fa6";
// import { FaYoutube } from "react-icons/fa";
// import logo from '../Assets/logo4.png'


// const Footer = () => {
//   return (
//     <>
//       <div className='grid grid-cols-1 sm:grid-cols-2   md:grid-cols-4 font-serif bg-black text-white p-4 space-y-4'>
        
//         <div className='flex justify-center  items-center  '>
//           <img src={logo} className='w-60' />
//         </div>

//           <div className='flex justify-center  items-center      text-sm '>
//             <div className='flex flex-col gap-4 items-center sm:items-start'>
//             <h1 className='font-semibold'>Explore</h1>
//             <a href="#">Home</a>
//             <a href="#">Courses</a>
//             <a href="#">Fee</a>
//             <a href="#">About Us</a>
//             </div>
//           </div>
//           <div className='flex justify-center  items-center      text-sm'>
//           <div className='flex flex-col gap-4 items-center sm:items-start'>
//             <h1 className='font-semibold'>Company</h1>
//             <a href="#">Terms & Conditions</a>
//             <a href="#">Privacy Policy</a>
//             <a href="#">Contact Us</a>
//             <a href="#">Features</a>
//           </div>
//           </div>

//           <div className='flex justify-center  items-center      text-sm'>
//           <div className='flex flex-col gap-4 items-center sm:items-start'>
//             <h1 className='font-semibold'>Get in Touch</h1>
//             <p >Plort no 70, 1st & 3rd floor, PU4, scheme no.54, Behind C21 Mall, Indore - 452010</p>
//             <a href="#">+91-8815531673 <br/> +91-8827631146</a>
//             <a href="#">training@shantiinfosoft.com</a>
//           </div>
//           </div>
//       </div>


//      <div className='flex flex-col sm:flex-row justify-evenly items-center text-white bg-black p-2'>
//        <h3 className='text-sm text-center font-semibold w-full'>
//         2024 Future Edge. All rights reserved.
//        </h3>
//       <div className='flex  justify-center sm:justify-evenly w-full items-center gap-3 text-3xl  '>
//           <FaLinkedin/>
//           <FaFacebookSquare/>
//           <FaSquareInstagram/>
//           <FaYoutube className='text-4xl'/>
//         </div>
//      </div>
//     </>
//   )
// }

// export default Footer



import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-8">
            <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-between items-center">
                <div className="mb-8 lg:mb-0">
                    <h1 className="text-3xl font-bold">Company Name</h1>
                    <ul className="mt-4 space-y-2">
                        <li className="flex items-center">
                            <FaPhoneAlt className="mr-2" /> +91 9109039050
                        </li>
                        <li className="flex items-center">
                            <FaEnvelope className="mr-2" /> info@Company Name.in
                        </li>
                        <li className="flex items-center">
                            <FaMapMarkerAlt className="mr-2" />   Vijay Nagar Square,  Indore, Madhya Pradesh 452011
                        </li>
                    </ul>
                </div>
                <div >
                    <iframe
                        title="  Academy  "
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.476565737473!2d75.89328371451197!3d22.753407731746993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962e309c2e7110f%3A0xe97d8143b7e93a84!2sC21%20Mall!5e0!3m2!1sen!2sin!4v1654707762923!5m2!1sen!2sin"
                        width="300"
                        height="200"
                        className="border-0 w-96"
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
            <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-between items-center mt-8">
                <div className="flex space-x-4 mb-4 lg:mb-0">
                    <FaFacebook className="text-xl" />
                    <FaTwitter className="text-xl" />
                    <FaInstagram className="text-xl" />
                    <FaLinkedin className="text-xl" />
                </div>
                <p className="text-sm">&copy; 2024 Company Name. All Rights Reserved</p>
            </div>
        </footer>
    );
};

export default Footer;

