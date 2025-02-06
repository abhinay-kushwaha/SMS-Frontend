import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Students from '../Admin/students/Students';
import Instructors from '../Admin/Instructor/Instructors';
import Dashboard from '../Admin/Dashboard';
import Courses from "../Admin/Course/Courses";
import CourseDetails from '../Admin/Course/CourseDetails';
import Addoncourse from '../Admin/Course/Addoncourse';
import Profile from '../Admin/Profile';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AdminRoutes() {
  return (
    <>
    <ToastContainer />
    <Routes>
      <Route path='/students' element={<Students />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/instructor' element={<Instructors />} />
      <Route path='/course' element={<Courses />} />
      <Route path='/addoncourse' element={<Addoncourse />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/courseDetails/:id' element={<CourseDetails />} />  
      <Route path='/courseContent/:id' element={<CourseDetails />} />  
      <Route path="*" element={<Navigate to="/dashboard" />} />  
    </Routes>
    </>
  );
}
