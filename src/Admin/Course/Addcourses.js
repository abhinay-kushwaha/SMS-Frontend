
// import React, { useState } from 'react';
// import { IoIosAddCircleOutline } from "react-icons/io";
// import { RiArrowDropDownLine } from "react-icons/ri";
// import { RxCross2 } from "react-icons/rx";

// export default function Addcourses({ onClose, onAddCourse }) {
//   const [courseName, setCourseName] = useState('');
//   const [instructorName, setInstructorName] = useState('');
//   const [courseDescription, setCourseDescription] = useState('');
//   const [courseDuration, setCourseDuration] = useState('');
//   const [startDate, setStartDate] = useState('');
//   const [endDate, setEndDate] = useState('');
//   const [courseLevel, setCourseLevel] = useState('');
//   const [courseCategory, setCourseCategory] = useState('');
//   const [coursePrice, setCoursePrice] = useState('');
//   const [courseImage, setCourseImage] = useState(null); // This will store the file object

//   const handleClose = () => {
//     onClose();
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append('title', courseName);
//     formData.append('instructor', instructorName);
//     formData.append('description', courseDescription);
//     formData.append('duration', courseDuration);
//     formData.append('startDate', startDate);
//     formData.append('endDate', endDate);
//     formData.append('level', courseLevel);
//     formData.append('category', courseCategory);
//     formData.append('price', coursePrice);
//     if (courseImage) {
//       formData.append('courseImage', courseImage);
//     }

//     try {
//       const response = await fetch('http://localhost:8081/api/course', {
//         method: 'POST',
//         body: formData,
//       });
//       if (!response.ok) {
//         const text = await response.text();
//         throw new Error(`Network response was not ok: ${text}`);
//       }
//       const newCourse = await response.json();
//       console.log('New course added:', newCourse);
//       onAddCourse(newCourse); 
//       onClose(); 
//     } catch (error) {
//       console.error('Error adding course:', error);
//     }
//   };

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-gray-100 bg-opacity-50 overflow-y-scroll">
//       <div className="bg-white p-4 max-w-xl mx-auto rounded-lg mt-32">
//         <div className='flex justify-end'>
//           <button onClick={handleClose}>
//             <RxCross2 />
//           </button>
//         </div>

//         <h3 className="text-2xl font-bold mb-4">Add Courses</h3>

//         <form onSubmit={handleSubmit} className="space-y-4">

//           <div className='flex space-x-4'>
//             <div className="flex-1">
//               <label className="block mb-1 font-medium"> Courses Name</label>
//               <input
//                 type="text"
//                 className="w-full px-3 py-2 border border-gray-300 rounded"
//                 value={courseName}
//                 onChange={(e) => setCourseName(e.target.value)}
//                 required
//               />
//             </div>
//           </div>

//           <div className='flex space-x-4'>
//             <div className="flex-1">
//               <label className="block mb-1 font-medium"> Instructor Name</label>
//               <input
//                 type="text"
//                 className="w-full px-3 py-2 border border-gray-300 rounded"
//                 value={instructorName}
//                 onChange={(e) => setInstructorName(e.target.value)}
//                 required
//               />
//             </div>
//           </div>

//           <div className='flex space-x-4'>
//             <div className='flex-1'>
//               <label className="block mb-1 font-medium">Course Description</label>
//               <input
//                 type="text"
//                 className="w-full px-3 py-2 border border-gray-300 rounded"
//                 value={courseDescription}
//                 onChange={(e) => setCourseDescription(e.target.value)}
//                 required
//               />
//             </div>

//             <div className="relative flex-1">
//               <RiArrowDropDownLine className='absolute left-14 top-12 transform -translate-y-1/2 text-gray-500' />
//               <label className="block mb-1 font-medium">Course Duration </label>
//               <input
//                 type="text"
//                 className="w-full px-3 py-2 border border-gray-300 rounded"
//                 value={courseDuration}
//                 onChange={(e) => setCourseDuration(e.target.value)}
//                 required
//               />
//             </div>
//           </div>

//           <div className='flex space-x-4'>
//             <div className='flex-1'>
//               <label className="block text-gray-700 mb-2" htmlFor="start-date">Start Date</label>
//               <input
//                 type="date"
//                 id="start-date"
//                 className="w-full px-3 py-2 border rounded"
//                 value={startDate}
//                 onChange={(e) => setStartDate(e.target.value)}
//                 required
//               />
//             </div>

//             <div className='flex-1'>
//               <label className="block text-gray-700 mb-2" htmlFor="end-date">End Date</label>
//               <input
//                 type="date"
//                 id="end-date"
//                 className="w-full px-3 py-2 border rounded"
//                 value={endDate}
//                 onChange={(e) => setEndDate(e.target.value)}
//                 required
//               />
//             </div>
//           </div>

//           <div className="flex space-x-4">
//             <div className='flex-1'>
//               <select
//                 name="level"
//                 className="w-full mt-2 p-2 border border-gray-300 rounded-md"
//                 value={courseLevel}
//                 onChange={(e) => setCourseLevel(e.target.value)}
//                 required
//               >
//                 <option value="">Course Level</option>
//                 <option value="Beginner">Beginner</option>
//                 <option value="Intermediate">Intermediate</option>
//                 <option value="Advanced">Advanced</option>
//               </select>
//             </div>

//             <div className='flex-1'>
//               <select
//                 name="category"
//                 className="w-full mt-2 p-2 border border-gray-300 rounded-md"
//                 value={courseCategory}
//                 onChange={(e) => setCourseCategory(e.target.value)}
//                 required
//               >
//                 <option value="">Course Category</option>
//                 <option value="Programming">Programming</option>
//                 <option value="Design">Design</option>
//                 <option value="Marketing">Marketing</option>
//               </select>
//             </div>
//           </div>

//           <div className='flex space-x-4'>
//             <div className="flex-1">
//               <label className="block mb-2 font-medium">Course Price </label>
//               <input
//                 type="text"
//                 className="w-full px-3 py-2 border border-gray-300 rounded"
//                 value={coursePrice}
//                 onChange={(e) => setCoursePrice(e.target.value)}
//                 required
//               />
//             </div>

//             <div className="mb-4">
//               <label className="block mb-1 font-medium" htmlFor="course-image">Course Image</label>
//               <input
//                 type="file"
//                 id="course-image"
//                 className="w-full px-3 py-2 border rounded"
//                 onChange={(e) => setCourseImage(e.target.files[0])}
//               />
//             </div>
//           </div>

//           <div className='flex items-center gap-24 mb-16'>
//             <div className='flex items-center gap-2 cursor-pointer'>
//               <IoIosAddCircleOutline className='text-gray-700' />
//               <p>Add another</p>
//             </div>
//             <button type="submit" className='bg-blue-300 hover:bg-indigo-100 transition duration-300 ease-out hover:ease-in flex items-center text-gray-700 rounded-md px-6 py-2'>Add Course</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }







// import React, { useState } from 'react';
// import { RiCloseFill } from 'react-icons/ri';

// export default function AddCourses({ onClose, onAddCourse }) {
//   const [courseName, setCourseName] = useState('');
//   const [instructorName, setInstructorName] = useState('');
//   const [courseDescription, setCourseDescription] = useState('');
//   const [courseDuration, setCourseDuration] = useState('');
//   const [startDate, setStartDate] = useState('');
//   const [endDate, setEndDate] = useState('');
//   const [courseLevel, setCourseLevel] = useState('');
//   const [courseCategory, setCourseCategory] = useState('');
//   const [coursePrice, setCoursePrice] = useState('');
//   const [error, setError] = useState(null);

//   const handleClose = () => {
//     onClose();
//   };
  
//   const token = localStorage.getItem('token');
//   // console.log("token",token)

//   const handleSubmit = async (e) => {
//     e.preventDefault();




//     if (!token) {
//       setError('No token found. Please log in.');
//       return;
//     }




//     const requestOptions = {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${token}`,
//       },
//       body: JSON.stringify({
//         title: courseName,
//         instructor: instructorName,
//         description: courseDescription,
//         duration: courseDuration,
//         startDate: startDate,
//         endDate: endDate,
//         level: courseLevel,
//         category: courseCategory,
//         price: coursePrice,
//         userRole: localStorage.getItem('userRole'), 
//       }),
//     };

//     try {
//       const response = await fetch('http://localhost:8081/api/course', requestOptions);
//       if (!response.ok) {
//         const text = await response.text();
//         throw new Error(`Network response was not ok: ${text}`);
//       }

//       const newCourse = await response.json();
//       console.log('New course added:', newCourse);
//       console.log(newCourse.course._id)
//       localStorage.setItem('courseid', newCourse.course._id);
//       onAddCourse(newCourse.course);
//       onClose();
//     } catch (error) {
//       console.error('Error adding course:', error);
//       setError(error.message);
//     }
//   };

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-gray-100 bg-opacity-50 overflow-y-scroll">
//       <div className="bg-white p-4 max-w-xl mx-auto rounded-lg mt-32">
//         <div className="flex justify-end">
//           <button onClick={handleClose}>
//             <RiCloseFill />
//           </button>
//         </div>
//         <h3 className="text-2xl font-bold mb-4">Add Course</h3>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div className="flex space-x-4">
//             <div className="flex-1">
//               <label className="block text-gray-700">Course Name</label>
//               <input
//                 type="text"
//                 value={courseName}
//                 onChange={(e) => setCourseName(e.target.value)}
//                 className="w-full px-3 py-2 border border-gray-300 rounded"
//                 required
//               />
//             </div>
//             <div className="flex-1">
//               <label className="block text-gray-700">Instructor Name</label>
//               <input
//                 type="text"
//                 value={instructorName}
//                 onChange={(e) => setInstructorName(e.target.value)}
//                 className="w-full px-3 py-2 border border-gray-300 rounded"
//                 required
//               />
//             </div>
//           </div>
//           <div className="flex-1">
//             <label className="block text-gray-700">Course Description</label>
//             <textarea
//               value={courseDescription}
//               onChange={(e) => setCourseDescription(e.target.value)}
//               className="w-full px-3 py-2 border border-gray-300 rounded"
//               required
//             />
//           </div>
//           <div className="flex space-x-4">
//             <div className="flex-1">
//               <label className="block text-gray-700">Course Duration</label>
//               <select
//                 value={courseDuration}
//                 onChange={(e) => setCourseDuration(e.target.value)}
//                 className="w-full px-3 py-2 border border-gray-300 rounded"
//                 required
//               >
//                 <option value="">Select Duration</option>
//                 <option value="4 weeks">4 weeks</option>
//                 <option value="6 weeks">6 weeks</option>
//                 <option value="8 weeks">8 weeks</option>
//                 <option value="12 weeks">12 weeks</option>
//               </select>
//             </div>
//             <div className="flex-1">
//               <label className="block text-gray-700">Course Level</label>
//               <select
//                 value={courseLevel}
//                 onChange={(e) => setCourseLevel(e.target.value)}
//                 className="w-full px-3 py-2 border border-gray-300 rounded"
//                 required
//               >
//                 <option value="">Select Level</option>
//                 <option value="Beginner">Beginner</option>
//                 <option value="Intermediate">Intermediate</option>
//                 <option value="Advanced">Advanced</option>
//               </select>
//             </div>
//           </div>
//           <div className="flex space-x-4">
//             <div className="flex-1">
//               <label className="block text-gray-700">Start Date</label>
//               <input
//                 type="date"
//                 value={startDate}
//                 onChange={(e) => setStartDate(e.target.value)}
//                 className="w-full px-3 py-2 border border-gray-300 rounded"
//                 required
//               />
//             </div>
//             <div className="flex-1">
//               <label className="block text-gray-700">End Date</label>
//               <input
//                 type="date"
//                 value={endDate}
//                 onChange={(e) => setEndDate(e.target.value)}
//                 className="w-full px-3 py-2 border border-gray-300 rounded"
//                 required
//               />
//             </div>
//           </div>
//           <div className="flex space-x-4">
//             <div className="flex-1">
//               <label className="block text-gray-700">Category</label>
//               <select
//                 value={courseCategory}
//                 onChange={(e) => setCourseCategory(e.target.value)}
//                 className="w-full px-3 py-2 border border-gray-300 rounded"
//                 required
//               >
//                 <option value="">Select Category</option>
//                 <option value="Technology">Technology</option>
//                 <option value="Business">Business</option>
//                 <option value="Art">Art</option>
//                 <option value="Science">Science</option>
//               </select>
//             </div>
//             <div className="flex-1">
//               <label className="block text-gray-700">Course Price</label>
//               <input
//                 type="text"
//                 value={coursePrice}
//                 onChange={(e) => setCoursePrice(e.target.value)}
//                 className="w-full px-3 py-2 border border-gray-300 rounded"
//                 required
//               />
//             </div>
//           </div>
//           {error && <p className="text-red-500">{error}</p>}
//           <div className="flex justify-center">
//             <button
//               type="submit"
//               className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
//             >
//               Submit
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }


// import React, { useState } from 'react';
// import { RiCloseFill } from 'react-icons/ri';

// export default function AddCourses({ onClose, onAddCourse }) {
//   const [courseName, setCourseName] = useState('');
//   const [instructorName, setInstructorName] = useState('');
//   const [courseDescription, setCourseDescription] = useState('');
//   const [courseDuration, setCourseDuration] = useState('');
//   const [startDate, setStartDate] = useState('');
//   const [endDate, setEndDate] = useState('');
//   const [courseLevel, setCourseLevel] = useState('');
//   const [courseCategory, setCourseCategory] = useState('');
//   const [coursePrice, setCoursePrice] = useState('');
//   const [error, setError] = useState(null);

//   const handleClose = () => {
//     onClose();
//   };
  
//   const token = localStorage.getItem('token');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!token) {
//       setError('No token found. Please log in.');
//       return;
//     }

//     const requestOptions = {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${token}`,
//       },
//       body: JSON.stringify({
//         title: courseName,
//         instructor: instructorName,
//         description: courseDescription,
//         duration: courseDuration,
//         startDate: startDate,
//         endDate: endDate,
//         level: courseLevel,
//         category: courseCategory,
//         price: coursePrice,
//         userRole: localStorage.getItem('userRole'),
//       }),
//     };

//     try {
//       const response = await fetch('http://localhost:8081/api/course', requestOptions);
//       if (!response.ok) {
//         const text = await response.text();
//         throw new Error(`Network response was not ok: ${text}`);
//       }

//       const newCourse = await response.json();
//       localStorage.setItem('courseid', newCourse.course._id);
//       onAddCourse(newCourse.course);
//       onClose();
//     } catch (error) {
//       console.error('Error adding course:', error);
//       setError(error.message);
//     }
//   };

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-gray-100 bg-opacity-50 overflow-y-scroll">
//       <div className="bg-white p-4 max-w-xl mx-auto rounded-lg mt-32">
//         <div className="flex justify-end">
//           <button onClick={handleClose}>
//             <RiCloseFill />
//           </button>
//         </div>
//         <h3 className="text-2xl font-bold mb-4">Add Course</h3>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div className="flex space-x-4">
//             <div className="flex-1">
//               <label className="block text-gray-700">Course Name</label>
//               <input
//                 type="text"
//                 value={courseName}
//                 onChange={(e) => setCourseName(e.target.value)}
//                 className="w-full px-3 py-2 border border-gray-300 rounded"
//                 required
//               />
//             </div>
//             <div className="flex-1">
//               <label className="block text-gray-700">Instructor Name</label>
//               <input
//                 type="text"
//                 value={instructorName}
//                 onChange={(e) => setInstructorName(e.target.value)}
//                 className="w-full px-3 py-2 border border-gray-300 rounded"
//                 required
//               />
//             </div>
//           </div>
//           <div className="flex-1">
//             <label className="block text-gray-700">Course Description</label>
//             <textarea
//               value={courseDescription}
//               onChange={(e) => setCourseDescription(e.target.value)}
//               className="w-full px-3 py-2 border border-gray-300 rounded"
//               required
//             />
//           </div>
//           <div className="flex space-x-4">
//             <div className="flex-1">
//               <label className="block text-gray-700">Course Duration</label>
//               <select
//                 value={courseDuration}
//                 onChange={(e) => setCourseDuration(e.target.value)}
//                 className="w-full px-3 py-2 border border-gray-300 rounded"
//                 required
//               >
//                 <option value="">Select Duration</option>
//                 <option value="4 weeks">4 weeks</option>
//                 <option value="6 weeks">6 weeks</option>
//                 <option value="8 weeks">8 weeks</option>
//                 <option value="12 weeks">12 weeks</option>
//               </select>
//             </div>
//             <div className="flex-1">
//               <label className="block text-gray-700">Course Level</label>
//               <select
//                 value={courseLevel}
//                 onChange={(e) => setCourseLevel(e.target.value)}
//                 className="w-full px-3 py-2 border border-gray-300 rounded"
//                 required
//               >
//                 <option value="">Select Level</option>
//                 <option value="Beginner">Beginner</option>
//                 <option value="Intermediate">Intermediate</option>
//                 <option value="Advanced">Advanced</option>
//               </select>
//             </div>
//           </div>
//           <div className="flex space-x-4">
//             <div className="flex-1">
//               <label className="block text-gray-700">Start Date</label>
//               <input
//                 type="date"
//                 value={startDate}
//                 onChange={(e) => setStartDate(e.target.value)}
//                 className="w-full px-3 py-2 border border-gray-300 rounded"
//                 required
//               />
//             </div>
//             <div className="flex-1">
//               <label className="block text-gray-700">End Date</label>
//               <input
//                 type="date"
//                 value={endDate}
//                 onChange={(e) => setEndDate(e.target.value)}
//                 className="w-full px-3 py-2 border border-gray-300 rounded"
//                 required
//               />
//             </div>
//           </div>
//           <div className="flex space-x-4">
//             <div className="flex-1">
//               <label className="block text-gray-700">Category</label>
//               <select
//                 value={courseCategory}
//                 onChange={(e) => setCourseCategory(e.target.value)}
//                 className="w-full px-3 py-2 border border-gray-300 rounded"
//                 required
//               >
//                 <option value="">Select Category</option>
//                 <option value="Technology">Technology</option>
//                 <option value="Business">Business</option>
//                 <option value="Art">Art</option>
//                 <option value="Science">Science</option>
//               </select>
//             </div>
//             <div className="flex-1">
//               <label className="block text-gray-700">Course Price</label>
//               <input
//                 type="text"
//                 value={coursePrice}
//                 onChange={(e) => setCoursePrice(e.target.value)}
//                 className="w-full px-3 py-2 border border-gray-300 rounded"
//                 required
//               />
//             </div>
//           </div>
//           {error && <p className="text-red-500">{error}</p>}
//           <div className="flex justify-center">
//             <button
//               type="submit"
//               className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
//             >
//               Submit
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }




import React, { useState } from 'react';
import { RiCloseFill } from 'react-icons/ri';
import LoadingButton from '../LoadingButton';
export default function AddCourses({ onClose, onAddCourse }) {
  const [courseName, setCourseName] = useState('');
  const [instructorName, setInstructorName] = useState('');
  const [courseDescription, setCourseDescription] = useState('');
  const [courseDuration, setCourseDuration] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [courseLevel, setCourseLevel] = useState('');
  const [courseCategory, setCourseCategory] = useState('');
  const [coursePrice, setCoursePrice] = useState('');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleClose = () => {
    onClose();
  };
  
  const token = localStorage.getItem('token');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (!token) {
      setError('No token found. Please log in.');
      setIsLoading(false);
      return;
    }

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        title: courseName,
        instructor: instructorName,
        description: courseDescription,
        duration: courseDuration,
        startDate: startDate,
        endDate: endDate,
        level: courseLevel,
        category: courseCategory,
        price: coursePrice,
        userRole: localStorage.getItem('userRole'),
      }),
    };

    try {
      const response = await fetch('http://localhost:8081/api/course', requestOptions);
      if (!response.ok) {
        const text = await response.text();
        throw new Error(`Network response was not ok: ${text}`);
      }

      const newCourse = await response.json();
      localStorage.setItem('courseid', newCourse.course._id);
      onAddCourse(newCourse.course);
      onClose();
    } catch (error) {
      console.error('Error adding course:', error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-100 bg-opacity-50 overflow-y-scroll">
      <div className="bg-white p-4 max-w-xl mx-auto rounded-lg mt-32">
        <div className="flex justify-end">
          <button onClick={handleClose}>
            <RiCloseFill />
          </button>
        </div>
        <h3 className="text-2xl font-bold mb-4">Add Course</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex space-x-4">
            <div className="flex-1">
              <label className="block text-gray-700">Course Name</label>
              <input
                type="text"
                value={courseName}
                onChange={(e) => setCourseName(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="flex-1">
              <label className="block text-gray-700">Instructor Name</label>
              <input
                type="text"
                value={instructorName}
                onChange={(e) => setInstructorName(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded"
                required
              />
            </div>
          </div>
          <div className="flex-1">
            <label className="block text-gray-700">Course Description</label>
            <textarea
              value={courseDescription}
              onChange={(e) => setCourseDescription(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="flex space-x-4">
            <div className="flex-1">
              <label className="block text-gray-700">Course Duration</label>
              <select
                value={courseDuration}
                onChange={(e) => setCourseDuration(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded"
                required
              >
                <option value="">Select Duration</option>
                <option value="4 weeks">4 weeks</option>
                <option value="6 weeks">6 weeks</option>
                <option value="8 weeks">8 weeks</option>
                <option value="12 weeks">12 weeks</option>
              </select>
            </div>
            <div className="flex-1">
              <label className="block text-gray-700">Course Level</label>
              <select
                value={courseLevel}
                onChange={(e) => setCourseLevel(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded"
                required
              >
                <option value="">Select Level</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
            </div>
          </div>
          <div className="flex space-x-4">
            <div className="flex-1">
              <label className="block text-gray-700">Start Date</label>
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="flex-1">
              <label className="block text-gray-700">End Date</label>
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded"
                required
              />
            </div>
          </div>
          <div className="flex space-x-4">
            <div className="flex-1">
              <label className="block text-gray-700">Category</label>
              <select
                value={courseCategory}
                onChange={(e) => setCourseCategory(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded"
                required
              >
                <option value="">Select Category</option>
                <option value="Technology">Technology</option>
                <option value="Business">Business</option>
                <option value="Art">Art</option>
                <option value="Science">Science</option>
              </select>
            </div>
            <div className="flex-1">
              <label className="block text-gray-700">Course Price</label>
              <input
                type="text"
                value={coursePrice}
                onChange={(e) => setCoursePrice(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded"
                required
              />
            </div>
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <div className="flex justify-center">
            <LoadingButton isLoading={isLoading} variant="primary" type="submit">
              Submit
            </LoadingButton>
          </div>
        </form>
      </div>
    </div>
  );
}
