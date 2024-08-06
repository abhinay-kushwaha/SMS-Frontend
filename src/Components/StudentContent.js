import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';

const StudentContent = () => {
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState(null);

  const fetchCourseData = async () => {
    try {
      const courseIds = ["6676d905fcc47773312eeedc", "6676d999fcc47773312ef7df"];

      const response = await axios.get('http://localhost:8081/api/get-subscribed-courses', {
        params: {
          courseIds: courseIds
        },
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });

      if (response.data && response.data.courses) {
        setCourses(response.data.courses);
      } else {
        setError(new Error("No courses found"));
      }
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    fetchCourseData();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {error && <div>Error: {error.message}</div>}
      {courses.map(course => (
        <div key={course._id} className="bg-white shadow-md rounded-md p-4">
          <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
          <p className="text-gray-600 mb-2">{course.description}</p>
          <p className="text-gray-700">Instructor: {course.instructor}</p>
          <p className="text-gray-700">Duration: {course.duration}</p>
          <p className="text-gray-700">Start Date: {new Date(course.startDate).toLocaleDateString()}</p>
          <p className="text-gray-700">End Date: {new Date(course.endDate).toLocaleDateString()}</p>
          <p className="text-gray-700">Level: {course.level}</p>
          <p className="text-gray-700">Category: {course.category}</p>
          <p className="text-gray-700">Price: ${course.price}</p>
          <div className="mt-4">
            <Button variant="contained" color="primary" href={`/courses/${course._id}`}>
              View Course
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StudentContent;
