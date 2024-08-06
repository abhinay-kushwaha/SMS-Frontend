
// import React, { useState, useEffect } from 'react';
// import { CiSearch, CiHeadphones } from 'react-icons/ci';
// import { IoIosArrowDropdown, IoIosArrowDropup } from 'react-icons/io';
// import { FaRegEdit } from "react-icons/fa";
// import { MdDelete } from "react-icons/md";
// import AddInstructor from './AddInstructor';
// import UpdateInstructor from './UpdateIntructor'
// import LeftNavbar from '../students/LeftNavbar';
// import Header from '../students/Header';
// import axios from 'axios';
// import {
//   Button,
//   Dialog,
//   DialogActions,
//   DialogContent,
//   DialogContentText,
//   DialogTitle,
//   CircularProgress,
//   Snackbar
// } from '@mui/material';

// const Instructors = () => {
//   const [filter, setFilter] = useState('');
//   const [search, setSearch] = useState('');
//   const [showAddInstructor, setShowAddInstructor] = useState(false);
//   const [showUpdateInstructor, setShowUpdateInstructor] = useState(false);
//   const [selectedInstructor, setSelectedInstructor] = useState(null);
//   const [instructors, setInstructors] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
//   const [deleteInProgress, setDeleteInProgress] = useState(false);
//   const [deleteError, setDeleteError] = useState(null);
//   const [currentPage, setCurrentPage] = useState(1);
//   const instructorsPerPage = 4;

//   useEffect(() => {
//     fetchInstructors();
//   }, []);

//   const fetchInstructors = async () => {
//     try {
//       const token = localStorage.getItem('token');
//       if (!token) {
//         throw new Error('No token found, please login first.');
//       }

//       const response = await axios.get('http://localhost:8081/api/instructors', {
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${token}`
//         },
//       });

//       setInstructors(response.data);
//       setLoading(false);
//     } catch (error) {
//       console.error('Error fetching instructors:', error);
//       setError('Failed to fetch instructors. Please try again later.');
//       setLoading(false);
//     }
//   };

//   const handleAddInstructor = () => {
//     setShowAddInstructor(true);
//   };

//   const handleDeleteInstructor = async (instructorId) => {
//     try {
//       const token = localStorage.getItem('token');
//       if (!token) {
//         throw new Error('No token found, please login first.');
//       }

//       setDeleteInProgress(true);

//       await axios.delete(`http://localhost:8081/api/instructors/${instructorId}`, {
//         headers: {
//           Authorization: `Bearer ${token}`
//         },
//       });
           
//       setInstructors(instructors.filter(instructor => instructor._id !== instructorId));
//       setDeleteDialogOpen(false);
//       setDeleteInProgress(false);
//     } catch (error) {
//       console.error('Error deleting instructor:', error);
//       setDeleteError('Failed to delete instructor. Please try again later.');
//       setDeleteInProgress(false);
//     }
//   };

//   const handleUpdateInstructor = (instructor) => {
//     setSelectedInstructor(instructor);
//     setShowUpdateInstructor(true);
//   };

//   const handleInstructorUpdate = (updatedInstructor) => {
//     setInstructors(instructors.map(instructor =>
//       instructor._id === updatedInstructor._id ? updatedInstructor : instructor
//     ));
//     setShowUpdateInstructor(false);
//   };

//   const handleDeleteDialogOpen = (instructor) => {
//     setSelectedInstructor(instructor);
//     setDeleteDialogOpen(true);
//   };

//   const handleDeleteDialogClose = () => {
//     setDeleteDialogOpen(false);
//     setDeleteError(null);
//   };

//   const filteredInstructors = instructors.filter(instructor =>
//     instructor.name.toLowerCase().includes(search.toLowerCase()) ||
//     instructor.email.toLowerCase().includes(search.toLowerCase())
//   );

//   // Pagination logic
//   const indexOfLastInstructor = currentPage * instructorsPerPage;
//   const indexOfFirstInstructor = indexOfLastInstructor - instructorsPerPage;
//   const currentInstructors = filteredInstructors.slice(indexOfFirstInstructor, indexOfLastInstructor);
//   const totalPages = Math.ceil(filteredInstructors.length / instructorsPerPage);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div className="flex flex-col md:flex-row">
//       <LeftNavbar />

//       <div className="flex flex-col flex-1 p-4 md:p-6">
//         <Header />

//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-2xl md:text-3xl font-bold">Instructors</h2>
//           <button onClick={handleAddInstructor} className="bg-blue-400 text-white px-4 py-2 rounded-lg">Add Instructor</button>
//         </div>

//         <div className="flex flex-col sm:flex-row mb-4 space-x-2 gap-y-2">
//           <div className="relative flex items-center w-52 md:w-auto">
//             <IoIosArrowDropdown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
//             <input
//               type="text"
//               placeholder="Add Filter"
//               value={filter}
//               onChange={(e) => setFilter(e.target.value)}
//               className="w-full px-3 py-2 border border-gray-300 rounded"
//             />
//           </div>

//           <div className="relative flex items-center justify-center w-full md:flex-1">
//             <CiSearch className="absolute left-3 text-gray-500" />
//             <input
//               type="text"
//               placeholder="Search for an instructor by name or email"
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               className="w-full px-3 py-2 pl-10 border border-gray-300 rounded"
//             />
//           </div>
//         </div>

//         {filteredInstructors.length === 0 ? (
//           <div className="flex flex-col items-center">
//             <h3 className="text-center text-lg md:text-xl">No instructors at this time</h3>
//             <p className="text-center text-sm md:text-base">Instructors will appear here after they are added to your academy</p>
//           </div>
//         ) : (
//           <div className="">
//             <table className="min-w-full bg-white border shadow-md rounded-lg overflow-hidden mb-5">
//               <thead className="bg-gray-200">
//                 <tr className="text-left">
//                   <th className="py-2 px-4 border-b">Name</th>
//                   <th className="py-2 px-4 border-b">Email</th>
//                   <th className="py-2 px-4 border-b">Phone</th>
//                   <th className="py-2 px-4 border-b">Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {currentInstructors.map((instructor, index) => (
//                   <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}>
//                     <td className="py-2 px-4 border-b">{instructor.name}</td>
//                     <td className="py-2 px-4 border-b">{instructor.email}</td>
//                     <td className="py-2 px-4 border-b">{instructor.phone}</td>
//                     <td className="py-2 px-4 border-b">
//                       <button onClick={() => handleUpdateInstructor(instructor)} className="px-2 py-1 text-black rounded hover:bg-gray-400 transform hover:scale-105 transition duration-300 ease-out">
//                         <FaRegEdit className="text-blue" /> Edit
//                       </button>
//                       <button onClick={() => handleDeleteDialogOpen(instructor)} className="px-2 py-1 text-black rounded hover:bg-red-300 transform hover:scale-105 transition duration-300 ease-out">
//                         <MdDelete className="text-blue" /> Delete
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//             <div className="flex justify-between items-center">
//               <button
//                 onClick={() => setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))}
//                 className="bg-gray-300 px-3 py-1 rounded-md shadow-md hover:bg-gray-400"
//                 disabled={currentPage === 1}
//               >
//                 Previous
//               </button>
//               <span className="text-gray-700">
//                 Page {currentPage} of {totalPages}
//               </span>
//               <button
//                 onClick={() => setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages))}
//                 className="bg-gray-300 px-3 py-1 rounded-md shadow-md hover:bg-gray-400"
//                 disabled={currentPage === totalPages}
//               >
//                 Next
//               </button>
//             </div>
//           </div>
//         )}

//         <div className="flex justify-end items-center w-full gap-8 mt-4 md:mt-0 md:float-right mb-4">
//           <div className="flex items-center w-fit gap-2 bg-indigo-600 rounded-lg shadow-md h-10 p-5">
//             <CiHeadphones className="text-white" />
//             <button className="text-white">Support</button>
//             <IoIosArrowDropup className="text-2xl cursor-pointer text-white" />
//           </div>
//         </div>

//         {showAddInstructor && <AddInstructor onClose={() => setShowAddInstructor(false)} />}
//         {showUpdateInstructor && (
//           <UpdateInstructor
//             instructor={selectedInstructor}
//             onClose={() => setShowUpdateInstructor(false)}
//             onUpdate={handleInstructorUpdate}
//           />
//         )}

//         {/* Delete Confirmation Dialog */}
//         <Dialog
//           open={deleteDialogOpen}
//           onClose={handleDeleteDialogClose}
//           aria-labelledby="alert-dialog-title"
//           aria-describedby="alert-dialog-description"
//         >
//           <DialogTitle id="alert-dialog-title">{"Confirm Delete"}</DialogTitle>
//           <DialogContent>
//             <DialogContentText id="alert-dialog-description">
//               Are you sure you want to delete {selectedInstructor?.name}? This action cannot be undone.
//             </DialogContentText>
//           </DialogContent>
//           <DialogActions>
//             <Button onClick={handleDeleteDialogClose} color="primary">
//               Cancel
//             </Button>
//             <Button onClick={() => handleDeleteInstructor(selectedInstructor?._id)} color="primary" autoFocus disabled={deleteInProgress}>
//               {deleteInProgress ? <CircularProgress size={24} /> : "Delete"}
//             </Button>
//           </DialogActions>
//         </Dialog>

//         {/* Snackbar for Delete Error */}
//         <Snackbar
//           open={!!deleteError}
//           autoHideDuration={6000}
//           onClose={() => setDeleteError(null)}
//           message={deleteError}
//           anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
//         />
//       </div>
//     </div>
//   );
// }
// export default Instructors;




import React, { useState, useEffect } from 'react';
import { CiSearch, CiHeadphones } from 'react-icons/ci';
import { IoIosArrowDropdown, IoIosArrowDropup } from 'react-icons/io';
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import AddInstructor from './AddInstructor';
// import UpdateInstructor from './UpdateInstructor';
import UpdateInstructor from './UpdateIntructor';
import LeftNavbar from '../students/LeftNavbar';
import Header from '../students/Header';
import axios from 'axios';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  CircularProgress,
  Snackbar
} from '@mui/material';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Instructors = () => {
  const [filter, setFilter] = useState('');
  const [search, setSearch] = useState('');
  const [showAddInstructor, setShowAddInstructor] = useState(false);
  const [showUpdateInstructor, setShowUpdateInstructor] = useState(false);
  const [selectedInstructor, setSelectedInstructor] = useState(null);
  const [instructors, setInstructors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [deleteInProgress, setDeleteInProgress] = useState(false);
  const [deleteError, setDeleteError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const instructorsPerPage = 4;

  useEffect(() => {
    fetchInstructors();
  }, []);

  const fetchInstructors = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('No token found, please login first.');
      }

      const response = await axios.get('http://localhost:8081/api/instructors', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
      });

      setInstructors(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching instructors:', error);
      setError('Failed to fetch instructors. Please try again later.');
      setLoading(false);
    }
  };

  const handleAddInstructor = () => {
    setShowAddInstructor(true);
  };

  const handleDeleteInstructor = async (instructorId) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('No token found, please login first.');
      }

      setDeleteInProgress(true);

      await axios.delete(`http://localhost:8081/api/instructors/${instructorId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        },
      });

      setInstructors(instructors.filter(instructor => instructor._id !== instructorId));
      setDeleteDialogOpen(false);
      setDeleteInProgress(false);
      notifySuccess('Instructor deleted successfully!');
    } catch (error) {
      console.error('Error deleting instructor:', error);
      setDeleteError('Failed to delete instructor. Please try again later.');
      setDeleteInProgress(false);
      notifyError('Error deleting instructor. Please try again later.');
    }
  };

  const handleUpdateInstructor = (instructor) => {
    setSelectedInstructor(instructor);
    setShowUpdateInstructor(true);
  };

  const handleInstructorUpdate = (updatedInstructor) => {
    setInstructors(instructors.map(instructor =>
      instructor._id === updatedInstructor._id ? updatedInstructor : instructor
    ));
    setShowUpdateInstructor(false);
    notifySuccess('Instructor updated successfully!');
  };

  const handleDeleteDialogOpen = (instructor) => {
    setSelectedInstructor(instructor);
    setDeleteDialogOpen(true);
  };

  const handleDeleteDialogClose = () => {
    setDeleteDialogOpen(false);
    setDeleteError(null);
  };

  const filteredInstructors = instructors.filter(instructor =>
    instructor.name.toLowerCase().includes(search.toLowerCase()) ||
    instructor.email.toLowerCase().includes(search.toLowerCase())
  );

  // Pagination logic
  const indexOfLastInstructor = currentPage * instructorsPerPage;
  const indexOfFirstInstructor = indexOfLastInstructor - instructorsPerPage;
  const currentInstructors = filteredInstructors.slice(indexOfFirstInstructor, indexOfLastInstructor);
  const totalPages = Math.ceil(filteredInstructors.length / instructorsPerPage);

  const handlePaginationPrev = () => {
    setCurrentPage(currentPage - 1);
  };

  const handlePaginationNext = () => {
    setCurrentPage(currentPage + 1);
  };

  const notifySuccess = (message) => toast.success(message, {
    style: {
      color: '#ffffff', // Text color
      fontFamily: 'Arial, sans-serif', // Font family
    },
  });

  const notifyError = (message) => toast.error(message, {
    style: {
      color: '#ffffff', // Text color
      fontFamily: 'Arial, sans-serif', // Font family
    },
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="flex flex-col md:flex-row">
      <LeftNavbar />

      <div className="flex flex-col flex-1 p-4 md:p-6">
        <Header />

        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl md:text-3xl font-bold">Instructors</h2>
          <button onClick={handleAddInstructor} className="bg-blue-400 text-white px-4 py-2 rounded-lg">Add Instructor</button>
        </div>

        <div className="flex flex-col sm:flex-row mb-4 space-x-2 gap-y-2">
          <div className="relative flex items-center w-52 md:w-auto">
            <IoIosArrowDropdown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              placeholder="Add Filter"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded"
            />
          </div>

          <div className="relative flex items-center justify-center w-full md:flex-1">
            <CiSearch className="absolute left-3 text-gray-500" />
            <input
              type="text"
              placeholder="Search for an instructor by name or email"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-3 py-2 pl-10 border border-gray-300 rounded"
            />
          </div>
        </div>

        {filteredInstructors.length === 0 ? (
          <div className="flex flex-col items-center">
            <h3 className="text-center text-lg md:text-xl">No instructors at this time</h3>
            <p className="text-center text-sm md:text-base">Instructors will appear here after they are added to your academy</p>
          </div>
        ) : (
          <div className="">
            <table className="min-w-full bg-white border shadow-md rounded-lg overflow-hidden mb-5">
              <thead className="bg-gray-200">
                <tr className="text-left">
                  <th className="py-2 px-4 border-b">Name</th>
                  <th className="py-2 px-4 border-b">Email</th>
                  <th className="py-2 px-4 border-b">Phone</th>
                  <th className="py-2 px-4 border-b">Actions</th>
                </tr>
              </thead>
              <tbody>
                {currentInstructors.map((instructor, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}>
                    <td className="py-2 px-4 border-b">{instructor.name}</td>
                    <td className="py-2 px-4 border-b">{instructor.email}</td>
                    <td className="py-2 px-4 border-b">{instructor.phone}</td>
                    <td className="py-2 px-4 border-b">
                      <button onClick={() => handleUpdateInstructor(instructor)} className="px-2 py-1 text-black rounded hover:bg-gray-400 transform hover:scale-105 transition duration-300 ease-out">
                        <FaRegEdit className="text-blue" /> Edit
                      </button>
                      <button onClick={() => handleDeleteDialogOpen(instructor)} className="px-2 py-1 text-black rounded hover:bg-red-300 transform hover:scale-105 transition duration-300 ease-out">
                        <MdDelete className="text-blue" /> Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex justify-center mt-4">
              <button
                onClick={handlePaginationPrev}
                disabled={currentPage === 1}
                className="px-3 py-1 border rounded-md mr-2"
              >
                Prev
              </button>
              <span className="font-medium">{currentPage}</span>
              <button
                onClick={handlePaginationNext}
                disabled={currentPage === totalPages}
                className="px-3 py-1 border rounded-md ml-2"
              >
                Next
              </button>
            </div>
          </div>
        )}

        <Dialog open={deleteDialogOpen} onClose={handleDeleteDialogClose}>
          <DialogTitle>Delete Instructor</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Are you sure you want to delete {selectedInstructor?.name}?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleDeleteDialogClose} color="primary" disabled={deleteInProgress}>
              Cancel
            </Button>
            <Button onClick={() => handleDeleteInstructor(selectedInstructor?._id)} color="secondary" disabled={deleteInProgress}>
              {deleteInProgress ? <CircularProgress size={24} /> : 'Delete'}
            </Button>
          </DialogActions>
        </Dialog>

        {showAddInstructor && <AddInstructor onClose={() => setShowAddInstructor(false)} onAdd={fetchInstructors} />}
        {showUpdateInstructor && <UpdateInstructor instructor={selectedInstructor} onClose={() => setShowUpdateInstructor(false)} onUpdate={handleInstructorUpdate} />}

        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
        />
      </div>
    </div>
  );
};

export default Instructors;
