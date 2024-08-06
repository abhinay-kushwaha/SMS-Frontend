import React, { useState, useEffect } from 'react';
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDropdown } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Button, Menu, MenuItem } from '@mui/material';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LeftNavbar from '../students/LeftNavbar';
import Header from '../students/Header';
import Addcourses from './Addcourses';
import Addoncourse from './Addoncourse';
import CourseForm from './CourseForm';
import { Link } from 'react-router-dom';

export default function Courses() {
  const [filter, setFilter] = useState('');
  const [search, setSearch] = useState('');
  const [showAddCourses, setShowAddCourses] = useState(false);
  const [showAddCourse, setShowAddCourse] = useState(false);
  const [showEditCourse, setShowEditCourse] = useState(false);
  const [courses, setCourses] = useState([]);
  const [editingCourse, setEditingCourse] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 4;
  const open = Boolean(anchorEl);

  useEffect(() => {
    fetchCourses();
  }, [courses]);

  const token = localStorage.getItem('token');

  const fetchCourses = async () => {
    try {
      const response = await fetch('http://localhost:8081/api/course', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setCourses(data);
    } catch (error) {
      console.error('Error fetching courses:', error);
      notifyError('Error fetching courses. Please check the console for more information.');
    }
  };

  const handleAddCourse = async (course) => {
    try {
      const response = await fetch('http://localhost:8081/api/course', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(course),
      });
      if (!response.ok) {
        const text = await response.text();
        throw new Error(`Network response was not ok: ${text}`);
      }
      const newCourse = await response.json();
      setCourses(prevCourses => [...prevCourses, newCourse]);
      setShowAddCourses(false);
      notifySuccess('Course added successfully!');
    } catch (error) {
      console.error('Error adding course:', error);
      notifyError('Error adding course. Please check the console for more information.');
    }
  };

  const handleDeleteCourse = async (courseId) => {
    try {
      const response = await fetch(`http://localhost:8081/api/course/${courseId}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        const text = await response.text();
        throw new Error(`Network response was not ok: ${text}`);
      }
      setCourses(prevCourses => prevCourses.filter(course => course._id !== courseId));
      notifySuccess('Course deleted successfully!');
    } catch (error) {
      console.error('Error deleting course:', error);
      notifyError('Error deleting course. Please check the console for more information.');
    }
  };

  const handleEditCourse = (course) => {
    setEditingCourse(course);
    setShowEditCourse(true);
  };

  const handleUpdateCourse = async (updatedCourse) => {
    try {
      const response = await fetch(`http://localhost:8081/api/course/${updatedCourse._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(updatedCourse),
      });
      if (!response.ok) {
        const text = await response.text();
        throw new Error(`Network response was not ok: ${text}`);
      }
      const updatedData = await response.json();
      setCourses(prevCourses =>
        prevCourses.map(course => course._id === updatedData._id ? updatedData : course)
      );
      setShowEditCourse(false);
      notifySuccess('Course updated successfully!');
    } catch (error) {
      console.error('Error updating course:', error);
      notifyError('Error updating course. Please check the console for more information.');
    }
  };

  const [courseId, setCourseId] = useState();

  const handleAddContent = (courseId) => {
    let id = "";
    id = courseId;
    setCourseId(courseId)

    localStorage.setItem("cid", id);
    
    console.log(courseId);
  };

  const handleEllipsisClick = (event, course) => {
    setSelectedCourse(course);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOptionSelect = (option) => {
    setAnchorEl(null);
    switch (option) {
      case 'view':
        window.location.href = `/courseContent/${selectedCourse._id}`;
        break;
      case 'edit':
        handleEditCourse(selectedCourse);
        break;
      case 'delete':
        handleDeleteCourse(selectedCourse._id);
        break;
      case 'addContent':
        alert(selectedCourse._id)
        setShowAddCourse(true);
        handleAddContent(selectedCourse._id);
        break;
      default:
        break;
    }
  };

  const filteredCourses = courses.filter(course => {
    return course.title.toLowerCase().includes(search.toLowerCase());
  });

  const notifySuccess = (message) => toast.success(message);
  const notifyError = (message) => toast.error(message);

  // Pagination logic
  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = filteredCourses.slice(indexOfFirstCourse, indexOfLastCourse);
  const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);

  return (
    <div className="flex flex-col md:flex-row bg-gray-50 min-h-screen">
      <LeftNavbar />
      <div className="flex flex-col flex-1 p-4 md:p-6 space-y-6">
        <Header />
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-3xl font-semibold text-gray-800">Courses</h2>
          <button onClick={() => setShowAddCourses(true)} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg shadow">Add Courses</button>
        </div>
        <div className="flex flex-col sm:flex-row mb-4 space-x-2 gap-y-2">
          <div className="relative flex items-center w-52 md:w-auto">
            <IoIosArrowDropdown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              placeholder="Add Filter"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
            />
          </div>
          <div className="relative flex items-center justify-center w-full md:flex-1">
            <CiSearch className="absolute left-3 text-gray-500" />
            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-3 py-2 pl-10 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
            />
          </div>
        </div>
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <table className="w-full border-collapse">
            <thead className="bg-gray-200">
              <tr className='text-left'>
                <th className="p-3 border-b-2">Title</th>
                <th className="p-3 border-b-2">Description</th>
                <th className="p-3 border-b-2">Instructor</th>
                <th className="p-3 border-b-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentCourses.map((course) => (
                <tr key={course._id} className="hover:bg-gray-100">
                  <td className="p-3 border-b">{course.title}</td>
                  <td className="p-3 border-b">{course.description}</td>
                  <td className="p-3 border-b">{course.instructor}</td>
                  <td className="p-3 border-b flex justify-center space-x-2">
                    <Button
                      id="basic-button"
                      aria-controls={open ? 'basic-menu' : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? 'true' : undefined}
                      onClick={(event) => handleEllipsisClick(event, course)}
                    >
                      <BsThreeDotsVertical />
                    </Button>
                    <Menu
                      id="basic-menu"
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      MenuListProps={{
                        'aria-labelledby': 'basic-button',
                      }}
                    >
                      <MenuItem onClick={() => handleOptionSelect('view')}>View</MenuItem>
                      <MenuItem onClick={() => handleOptionSelect('edit')}>Edit</MenuItem>
                      <MenuItem onClick={() => handleOptionSelect('delete')}>Delete</MenuItem>
                      <MenuItem onClick={() => handleOptionSelect('addContent')}>Add Content</MenuItem>
                    </Menu>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* Pagination Controls */}
          
        </div>
        <div className="flex justify-center mt-4">
            <button
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-3 py-1 border rounded-md mr-2"
            >
              Previous
            </button>
            <span className="px-3 py-1 border rounded-md">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-3 py-1 border rounded-md ml-2"
            >
              Next
            </button>
          </div>
        {showAddCourses && (
          <Addcourses onClose={() => setShowAddCourses(false)} onAddCourse={handleAddCourse} />
        )}
        {showAddCourse && (
          <Addoncourse courseId={courseId} onClose={() => setShowAddCourse(false)} onAddContent={handleAddContent} />
        )}
        {showEditCourse && (
          <CourseForm
            onClose={() => setShowEditCourse(false)}
            course={editingCourse}
            onUpdateCourse={handleUpdateCourse}
          />
        )}
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          transition={Bounce}
        />
      </div>
    </div>
  );
}
