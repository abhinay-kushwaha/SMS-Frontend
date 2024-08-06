
// import React, { useEffect, useState } from 'react';
// import { CiSearch, CiHeadphones } from 'react-icons/ci';
// import { IoIosArrowDropdown, IoIosArrowDropup } from 'react-icons/io';
// import { MdDelete } from "react-icons/md";
// import { FcPaid, FcApproval } from "react-icons/fc";
// import sleep from '../../Assets/sleep.png';
// import AddStudent from './AddStudent';
// import Header from './Header';
// import LeftNavbar from './LeftNavbar';

// export default function Students() {
//   const [filter, setFilter] = useState('');
//   const [search, setSearch] = useState('');
//   const [showAddStud, setShowAddStud] = useState(false);
//   const [students, setStudents] = useState([]);
//   const [loggedInStudent, setLoggedInStudent] = useState(null);
//   const [currentPage, setCurrentPage] = useState(1);
//   const studentsPerPage = 4;

//   useEffect(() => {
//     fetchStudents();
//   }, []);

//   const fetchStudents = async () => {
//     try {
//       const response = await fetch('http://localhost:8081/api/students', {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${localStorage.getItem('token')}`
//         },
//       });

//       if (!response.ok) {
//         const text = await response.text();
//         throw new Error(`Network response was not ok: ${text}`);
//       }

//       const data = await response.json();
//       setStudents(data);

//       const loggedInStudentEmail = localStorage.getItem('email');
//       const loggedInStudent = data.find(student => student.email === loggedInStudentEmail);
//       setLoggedInStudent(loggedInStudent);

//     } catch (error) {
//       console.error('Error fetching students:', error);
//     }
//   };

//   const handleAddStudent = async (formData) => {
//     try {
//       const response = await fetch('http://localhost:8081/api/add', {
//         method: 'POST',
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem('token')}`,
//         },
//         body: formData,
//       });
//       if (!response.ok) {
//         const text = await response.text();
//         throw new Error(`Network response was not ok: ${text}`);
//       }
//       const newStudent = await response.json();
//       setStudents((prevStudents) => [...prevStudents, newStudent]);
//       setShowAddStud(false);
//       fetchStudents();
//     } catch (error) {
//       console.error('Error adding student:', error);
//     }
//   };

//   const handlePromote = async (id) => {
//     try {
//       const response = await fetch(`http://localhost:8081/api/promote/${id}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${localStorage.getItem('token')}`,
//         },
//       });
//       if (!response.ok) {
//         const text = await response.text();
//         throw new Error(`Network response was not ok: ${text}`);
//       }
//       fetchStudents(); // Re-fetch the students to update the list
//       alert('Student promoted successfully!');
//     } catch (error) {
//       console.error('Error promoting student:', error);
//       alert('Failed to promote student. Please try again.');
//     }
//   };

//   const handleSetPaidStatus = async (id) => {
//     try {
//       console.log('Setting paid status for student with ID:', id);
//       const response = await fetch(`http://localhost:8081/api/paid/${id}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${localStorage.getItem('token')}`,
//         },
//       });
//       if (!response.ok) {
//         const text = await response.text();
//         throw new Error(`Network response was not ok: ${text}`);
//       }
//       fetchStudents(); // Re-fetch the students to update the list
//       window.alert('Student payment status updated successfully!');
//     } catch (error) {
//       console.error('Error setting paid status:', error);
//       window.alert('Failed to update payment status. Please try again.');
//     }
//   };

//   const handleDeleteStudent = async (id) => {
//     try {
//       console.log('Deleting student with ID:', id);
//       const response = await fetch(`http://localhost:8081/api/user/${id}`, {
//         method: 'DELETE',
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${localStorage.getItem('token')}`,
//         },
//       });
//       if (!response.ok) {
//         const text = await response.text();
//         throw new Error(`Network response was not ok: ${text}`);
//       }
//       console.log('Student deleted successfully');
//       fetchStudents(); // Re-fetch the students to update the list
//       window.alert('Student deleted successfully!');
//     } catch (error) {
//       console.error('Error deleting student:', error);
//       window.alert('Failed to delete student. Please try again.');
//     }
//   };

//   // Pagination logic
//   const indexOfLastStudent = currentPage * studentsPerPage;
//   const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
//   const currentStudents = students.slice(indexOfFirstStudent, indexOfLastStudent);
//   const totalPages = Math.ceil(students.length / studentsPerPage);

//   return (
//     <div className="flex flex-col md:flex-row bg-gray-100 min-h-screen">
//       <LeftNavbar />

//       <div className="flex flex-col flex-1 p-4 md:p-6">
//         <Header />
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Students</h2>
//           <button
//             onClick={() => setShowAddStud(true)}
//             className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-out hover:ease-in"
//           >
//             Add Student
//           </button>
//         </div>
//         <div className="flex flex-col md:flex-row mb-4 space-x-0 md:space-x-2 gap-y-2">
//           <div className="relative flex items-center w-52 md:w-auto">
//             <IoIosArrowDropdown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
//             <input
//               type="text"
//               placeholder="Add Filter"
//               value={filter}
//               onChange={(e) => setFilter(e.target.value)}
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
//             />
//           </div>
//           <div className="relative flex items-center justify-center w-full md:w-2/3">
//             <CiSearch className="absolute left-3 text-gray-500" />
//             <input
//               type="text"
//               placeholder="Search for a student by name or email"
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               className="w-full px-3 py-2 pl-10 border  border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
//             />
//           </div>
//         </div>

//         {students.length === 0 ? (
//           <div className="flex flex-col items-center">
//             <img src={sleep} alt="Sleeping" className="md:w-90 md:h-96" />
//             <h3 className="text-center text-lg md:text-xl text-gray-700">No students at this time</h3>
//             <p className="text-center text-sm md:text-base text-gray-500">Students will appear here after they enroll in your academy</p>
//           </div>
//         ) : (
//           <div className="overflow-x-auto">
//             <table className="min-w-full bg-white border shadow-md rounded-lg overflow-hidden mb-5">
//               <thead className="bg-gray-200">
//                 <tr className='text-left'>
//                   <th className="py-2 px-4 border-b">Profile</th>
//                   <th className="py-2 px-4 border-b">Name</th>
//                   <th className="py-2 px-4 border-b">Class</th>
//                   <th className="py-2 px-4 border-b">Gender</th>
//                   <th className="py-2 px-4 border-b">Email</th>
//                   <th className="py-2 px-4 border-b">Phone</th>
//                   <th className="py-2 px-4 border-b">Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {currentStudents.map((student, index) => (
//                   <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-white"}>
//                     <td className="py-2 px-4 border-b">
//                       <img src={`http://localhost:8081${student.image}`} alt="Profile" className="w-10 h-10 rounded-full" />
//                     </td>
//                     <td className="py-2 px-4 border-b">{student.name}</td>
//                     <td className="py-2 px-4 border-b">{student.class}</td>
//                     <td className="py-2 px-4 border-b">{student.gender}</td>
//                     <td className="py-2 px-4 border-b">{student.email}</td>
//                     <td className="py-2 px-4 border-b">{student.phone}</td>
//                     <td className="py-2 px-4 border-b flex space-x-2">
//                       <button
//                         onClick={() => handlePromote(student._id)}
//                         className="text-black px-2 py-1 rounded mr-2 bg-blue-200 hover:bg-blue-500 transition"
//                       >
//                         <FcApproval className="inline-block mr-1" />
//                         Promote
//                       </button>
//                       <button
//                         onClick={() => handleSetPaidStatus(student._id)}
//                         className="text-black px-2 py-1 rounded bg-purple-200 hover:bg-purple-500 transition"
//                       >
//                         <FcPaid className="inline-block mr-1" />
//                         Set Paid
//                       </button>
//                       <button
//                         onClick={() => handleDeleteStudent(student._id)}
//                         className="text-black px-4 py-2 rounded-lg bg-red-400 hover:bg-red-600 transition duration-300 ease-out hover:ease-in"
//                       >
//                         <MdDelete className="inline-block mr-1" />
//                         Delete
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//             <div className="flex justify-center mt-4">
//             <button
//               onClick={() => setCurrentPage(currentPage - 1)}
//               disabled={currentPage === 1}
//               className="px-3 py-1 border rounded-md mr-2"
//             >
//               Previous
//             </button>
//             <span className="px-3 py-1 border rounded-md">
//               Page {currentPage} of {totalPages}
//             </span>
//             <button
//               onClick={() => setCurrentPage(currentPage + 1)}
//               disabled={currentPage === totalPages}
//               className="px-3 py-1 border rounded-md ml-2"
//             >
//               Next
//             </button>
//           </div>
//           </div>
//         )}

//         <div className="flex justify-end items-center w-full gap-8 mt-4 md:mt-0 md:float-right mb-4">
//           <div className="flex items-center w-fit gap-2 bg-indigo-600 rounded-lg shadow-md h-10 p-5">
//             <CiHeadphones className="text-white" />
//             <button className="text-white">Support</button>
//             <IoIosArrowDropup className="text-2xl cursor-pointer text-white" />
//           </div>
//         </div>

//         {showAddStud && (
//           <AddStudent onClose={() => setShowAddStud(false)} onAddStudent={handleAddStudent} />
//         )}
//       </div>
//     </div>
//   );
// }



import React, { useEffect, useState } from 'react';
import { CiSearch, CiHeadphones } from 'react-icons/ci';
import { IoIosArrowDropdown, IoIosArrowDropup } from 'react-icons/io';
import { MdDelete } from "react-icons/md";
import { FcPaid, FcApproval } from "react-icons/fc";
import sleep from '../../Assets/sleep.png';
import AddStudent from './AddStudent';
import Header from './Header';
import LeftNavbar from './LeftNavbar';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Students() {
  const [filter, setFilter] = useState('');
  const [search, setSearch] = useState('');
  const [showAddStud, setShowAddStud] = useState(false);
  const [students, setStudents] = useState([]);
  const [loggedInStudent, setLoggedInStudent] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const studentsPerPage = 4;

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await fetch('http://localhost:8081/api/students', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`
        },
      });

      if (!response.ok) {
        const text = await response.text();
        throw new Error(`Network response was not ok: ${text}`);
      }

      const data = await response.json();
      setStudents(data);

      const loggedInStudentEmail = localStorage.getItem('email');
      const loggedInStudent = data.find(student => student.email === loggedInStudentEmail);
      setLoggedInStudent(loggedInStudent);

    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };

  const handleAddStudent = async (formData) => {
    try {
      const response = await fetch('http://localhost:8081/api/add', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: formData,
      });
      if (!response.ok) {
        const text = await response.text();
        throw new Error(`Network response was not ok: ${text}`);
      }
      const newStudent = await response.json();
      setStudents((prevStudents) => [...prevStudents, newStudent]);
      setShowAddStud(false);
      fetchStudents();
      toast.success('Student added successfully!');
    } catch (error) {
      console.error('Error adding student:', error);
      toast.error('Failed to add student. Please check the console for more information.');
    }
  };

  const handlePromote = async (id) => {
    try {
      const response = await fetch(`http://localhost:8081/api/promote/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      if (!response.ok) {
        const text = await response.text();
        throw new Error(`Network response was not ok: ${text}`);
      }
      fetchStudents(); // Re-fetch the students to update the list
      toast.success('Student promoted successfully!');
    } catch (error) {
      console.error('Error promoting student:', error);
      toast.error('Failed to promote student. Please try again.');
    }
  };

  const handleSetPaidStatus = async (id) => {
    try {
      const response = await fetch(`http://localhost:8081/api/paid/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      if (!response.ok) {
        const text = await response.text();
        throw new Error(`Network response was not ok: ${text}`);
      }
      fetchStudents(); // Re-fetch the students to update the list
      toast.success('Student payment status updated successfully!');
    } catch (error) {
      console.error('Error setting paid status:', error);
      toast.error('Failed to update payment status. Please try again.');
    }
  };

  const handleDeleteStudent = async (id) => {
    try {
      const response = await fetch(`http://localhost:8081/api/user/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      if (!response.ok) {
        const text = await response.text();
        throw new Error(`Network response was not ok: ${text}`);
      }
      fetchStudents(); // Re-fetch the students to update the list
      toast.success('Student deleted successfully!');
    } catch (error) {
      console.error('Error deleting student:', error);
      toast.error('Failed to delete student. Please try again.');
    }
  };

  // Pagination logic
  const indexOfLastStudent = currentPage * studentsPerPage;
  const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
  const currentStudents = students.slice(indexOfFirstStudent, indexOfLastStudent);
  const totalPages = Math.ceil(students.length / studentsPerPage);

  return (
    <div className="flex flex-col md:flex-row bg-gray-100 min-h-screen">
      <LeftNavbar />

      <div className="flex flex-col flex-1 p-4 md:p-6">
        <Header />
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Students</h2>
          <button
            onClick={() => setShowAddStud(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-out hover:ease-in"
          >
            Add Student
          </button>
        </div>
        <div className="flex flex-col md:flex-row mb-4 space-x-0 md:space-x-2 gap-y-2">
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
          <div className="relative flex items-center justify-center w-full md:w-2/3">
            <CiSearch className="absolute left-3 text-gray-500" />
            <input
              type="text"
              placeholder="Search for a student by name or email"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-3 py-2 pl-10 border  border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
            />
          </div>
        </div>

        {students.length === 0 ? (
          <div className="flex flex-col items-center">
            <img src={sleep} alt="Sleeping" className="md:w-90 md:h-96" />
            <h3 className="text-center text-lg md:text-xl text-gray-700">No students at this time</h3>
            <p className="text-center text-sm md:text-base text-gray-500">Students will appear here after they enroll in your academy</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border shadow-md rounded-lg overflow-hidden mb-5">
              <thead className="bg-gray-200">
                <tr className='text-left'>
                  <th className="py-2 px-4 border-b">Profile</th>
                  <th className="py-2 px-4 border-b">Name</th>
                  <th className="py-2 px-4 border-b">Class</th>
                  <th className="py-2 px-4 border-b">Gender</th>
                  <th className="py-2 px-4 border-b">Email</th>
                  <th className="py-2 px-4 border-b">Phone</th>
                  <th className="py-2 px-4 border-b">Actions</th>
                </tr>
              </thead>
              <tbody>
                {currentStudents.map((student, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-white"}>
                    <td className="py-2 px-4 border-b">
                      <img src={`http://localhost:8081${student.image}`} alt="Profile" className="w-10 h-10 rounded-full" />
                    </td>
                    <td className="py-2 px-4 border-b">{student.name}</td>
                    <td className="py-2 px-4 border-b">{student.class}</td>
                    <td className="py-2 px-4 border-b">{student.gender}</td>
                    <td className="py-2 px-4 border-b">{student.email}</td>
                    <td className="py-2 px-4 border-b">{student.phone}</td>
                    <td className="py-2 px-4 border-b flex space-x-2">
                      <button
                        onClick={() => handlePromote(student._id)}
                        className="text-black px-2 py-1 rounded mr-2 bg-blue-200 hover:bg-blue-500 transition"
                      >
                        <FcApproval className="inline-block mr-1" />
                        Promote
                      </button>
                      <button
                        onClick={() => handleSetPaidStatus(student._id)}
                        className="text-black px-2 py-1 rounded bg-purple-200 hover:bg-purple-500 transition"
                      >
                        <FcPaid className="inline-block mr-1" />
                        Set Paid
                      </button>
                      <button
                        onClick={() => handleDeleteStudent(student._id)}
                        className="text-black px-4 py-2 rounded-lg bg-red-400 hover:bg-red-600 transition duration-300 ease-out hover:ease-in"
                      >
                        <MdDelete className="inline-block mr-1" />
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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
          </div>
        )}

        <div className="flex justify-end items-center w-full gap-8 mt-4 md:mt-0 md:float-right mb-4">
          <div className="flex items-center w-fit gap-2 bg-indigo-600 rounded-lg shadow-md h-10 p-5">
            <CiHeadphones className="text-white" />
            <button className="text-white">Support</button>
            <IoIosArrowDropup className="text-2xl cursor-pointer text-white" />
          </div>
        </div>

        {showAddStud && (
          <AddStudent onClose={() => setShowAddStud(false)} onAddStudent={handleAddStudent} />
        )}
      </div>
    </div>
  );
}
