// import React, { useState, useEffect } from 'react';
// import pdfImage from "../../Assets/pdf.png";
// import { useParams } from 'react-router-dom';
// import {
//   Dialog,
//   DialogActions,
//   DialogContent,
//   DialogContentText,
//   DialogTitle,
//   Button,
// } from '@mui/material';

// const CourseDetails = () => {
//   const { id } = useParams();
//   const [courseContents, setCourseContents] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [editingContent, setEditingContent] = useState(null);
//   const [editedTitle, setEditedTitle] = useState('');
//   const [editedContent, setEditedContent] = useState('');
//   const [open, setOpen] = useState(false);
//   const [contentToDelete, setContentToDelete] = useState(null);

//   useEffect(() => {
//     fetchCourseDetails();
//   }, [id]);

//   const fetchCourseDetails = async () => {
//     setLoading(true);
//     const token = localStorage.getItem('token');

//     try {
//       const response = await fetch(`http://localhost:8081/api/courseContent/${id}`, {
//         method: 'GET',
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }

//       const data = await response.json();
//       setCourseContents(data);
//     } catch (error) {
//       console.error('Error fetching course details:', error);
//       setError('Error fetching course details. Please check the console for more information.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleEditClick = (content) => {
//     setEditingContent(content._id);
//     setEditedTitle(content.title);
//     setEditedContent(content.content);
//   };

//   const handleUpdateCourseContent = async () => {
//     const token = localStorage.getItem('token');
//     try {
//       const response = await fetch(`http://localhost:8081/api/courseContent/${editingContent}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify({
//           title: editedTitle,
//           content: editedContent,
//         }),
//       });

//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }

//       const updatedContent = await response.json();
//       setCourseContents(prevContents =>
//         prevContents.map(content =>
//           content._id === updatedContent.courseContent._id ? updatedContent.courseContent : content
//         )
//       );
//       setEditingContent(null);
//     } catch (error) {
//       console.error('Error updating course content:', error);
//       setError('Error updating course content. Please check the console for more information.');
//     }
//   };

//   const handleDeleteCourseContent = async () => {
//     const token = localStorage.getItem('token');
//     try {
//       const response = await fetch(`http://localhost:8081/api/courseContent/${contentToDelete}`, {
//         method: 'DELETE',
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }

//       setCourseContents(prevContents => prevContents.filter(content => content._id !== contentToDelete));
//       setOpen(false);
//       setContentToDelete(null);
//     } catch (error) {
//       console.error('Error deleting course content:', error);
//       setError('Error deleting course content. Please check the console for more information.');
//       setOpen(false);
//     }
//   };

//   const handleClickOpen = (contentId) => {
//     setContentToDelete(contentId);
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//     setContentToDelete(null);
//   };

//   const handleDownloadPDF = (pdfUrl) => {
//     const link = document.createElement('a');
//     link.href = pdfUrl;
//     link.setAttribute('download', 'download.pdf');
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   if (loading) {
//     return <div className="flex justify-center items-center h-screen"><div>Loading...</div></div>;
//   }

//   if (error) {
//     return <div className="text-red-500 text-center">{error}</div>;
//   }

//   if (courseContents.length === 0) {
//     return <div className="text-center mt-10">No course content available.</div>;
//   }

//   return (
//     <div className="container mx-auto py-10 px-4">
//       <h2 className="text-4xl font-bold mb-8 text-center">Course Content</h2>
//       <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//         {courseContents.map(item => (
//           <div key={item._id} className="bg-white shadow-md rounded-lg p-6 transition transform hover:-translate-y-1 hover:shadow-lg">
//             <div className="flex flex-col h-full">
//               {item.image && (
//                 <div className="flex justify-center mb-4">
//                   <img src={`http://localhost:8081${item.image}`} alt={item.title} className="max-w-full h-32 object-cover rounded-lg" />
//                 </div>
//               )}
//               <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
//               <p className="mb-4 flex-grow">{item.content}</p>
//               {item.pdf && (
//                 <div className="mb-4">
//                   <img
//                     src={pdfImage}
//                     alt="PDF Icon"
//                     className="cursor-pointer mx-auto"
//                     onClick={() => handleDownloadPDF(`http://localhost:8081${item.pdf}`)}
//                   />
//                 </div>
//               )}
//               <div className="flex space-x-4 mt-auto">
//                 <button onClick={() => handleEditClick(item)} className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-700">Edit</button>
//                 <button onClick={() => handleClickOpen(item._id)} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700">Delete</button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       <Dialog
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="alert-dialog-title"
//         aria-describedby="alert-dialog-description"
//       >
//         <DialogTitle id="alert-dialog-title">{"Delete Course Content?"}</DialogTitle>
//         <DialogContent>
//           <DialogContentText id="alert-dialog-description">
//             Are you sure you want to delete this course content? This action cannot be undone.
//           </DialogContentText>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose} color="primary">
//             Cancel
//           </Button>
//           <Button onClick={handleDeleteCourseContent} color="secondary" autoFocus>
//             Delete
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// }

// export default CourseDetails;




import React, { useState, useEffect } from 'react';
import pdfImage from "../../Assets/pdf.png";
import { useParams } from 'react-router-dom';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
  TextField,
} from '@mui/material';

const CourseDetails = () => {
  const { id } = useParams();
  const [courseContents, setCourseContents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingContent, setEditingContent] = useState(null);
  const [editedTitle, setEditedTitle] = useState('');
  const [editedContent, setEditedContent] = useState('');
  const [open, setOpen] = useState(false);
  const [contentToDelete, setContentToDelete] = useState(null);
  const [practiceQuestions, setPracticeQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState('');

  useEffect(() => {
    fetchCourseDetails();
  }, [id]);

  const fetchCourseDetails = async () => {
    setLoading(true);
    const token = localStorage.getItem('token');

    try {
      const response = await fetch(`http://localhost:8081/api/courseContent/${id}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setCourseContents(data);
    } catch (error) {
      console.error('Error fetching course details:', error);
      setError('Error fetching course details. Please check the console for more information.');
    } finally {
      setLoading(false);
    }
  };

  const handleEditClick = (content) => {
    setEditingContent(content._id);
    setEditedTitle(content.title);
    setEditedContent(content.content);
  };

  const handleUpdateCourseContent = async () => {
    const token = localStorage.getItem('token');
    try {
      const response = await fetch(`http://localhost:8081/api/courseContent/${editingContent}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          title: editedTitle,
          content: editedContent,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const updatedContent = await response.json();
      setCourseContents(prevContents =>
        prevContents.map(content =>
          content._id === updatedContent.courseContent._id ? updatedContent.courseContent : content
        )
      );
      setEditingContent(null);
    } catch (error) {
      console.error('Error updating course content:', error);
      setError('Error updating course content. Please check the console for more information.');
    }
  };

  const handleDeleteCourseContent = async () => {
    const token = localStorage.getItem('token');
    try {
      const response = await fetch(`http://localhost:8081/api/courseContent/${contentToDelete}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      setCourseContents(prevContents => prevContents.filter(content => content._id !== contentToDelete));
      setOpen(false);
      setContentToDelete(null);
    } catch (error) {
      console.error('Error deleting course content:', error);
      setError('Error deleting course content. Please check the console for more information.');
      setOpen(false);
    }
  };

  const handleClickOpen = (contentId) => {
    setContentToDelete(contentId);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setContentToDelete(null);
  };

  const handleDownloadPDF = (pdfUrl) => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.setAttribute('download', 'download.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleAddQuestion = (contentId) => {
    setPracticeQuestions(prevQuestions => [
      ...prevQuestions,
      { contentId, question: newQuestion },
    ]);
    setNewQuestion('');
  };

  const handleDeleteQuestion = (index) => {
    setPracticeQuestions(prevQuestions => prevQuestions.filter((_, i) => i !== index));
  };

  if (loading) {
    return <div className="flex justify-center items-center h-screen"><div>Loading...</div></div>;
  }

  if (error) {
    return <div className="text-red-500 text-center">{error}</div>;
  }

  if (courseContents.length === 0) {
    return <div className="text-center mt-10">No course content available.</div>;
  }

  return (
    <div className="container mx-auto py-10 px-4">
      <h2 className="text-4xl font-bold mb-8 text-center">Course Content</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {courseContents.map(item => (
          <div key={item._id} className="bg-white shadow-md rounded-lg p-6 transition transform hover:-translate-y-1 hover:shadow-lg">
            <div className="flex flex-col h-full">
              {item.image && (
                <div className="flex justify-center mb-4">
                  <img src={`http://localhost:8081${item.image}`} alt={item.title} className="max-w-full h-32 object-cover rounded-lg" />
                </div>
              )}
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="mb-4 flex-grow">{item.content}</p>
              {item.pdf && (
                <div className="mb-4">
                  <img
                    src={pdfImage}
                    alt="PDF Icon"
                    className="cursor-pointer mx-auto"
                    onClick={() => handleDownloadPDF(`http://localhost:8081${item.pdf}`)}
                  />
                </div>
              )}
              <div className="flex space-x-4 mt-auto">
                <button onClick={() => handleEditClick(item)} className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-700">Edit</button>
                <button onClick={() => handleClickOpen(item._id)} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700">Delete</button>
              </div>
              <div className="mt-4">
                <h4 className="text-lg font-semibold mb-2">Practice Questions</h4>
                <ul>
                  {practiceQuestions.filter(q => q.contentId === item._id).map((q, index) => (
                    <li key={index} className="mb-2 flex justify-between items-center">
                      <span>{q.question}</span>
                      <button onClick={() => handleDeleteQuestion(index)} className="text-red-500">Delete</button>
                    </li>
                  ))}
                </ul>
                <div className="flex mt-2">
                  <TextField
                    value={newQuestion}
                    onChange={(e) => setNewQuestion(e.target.value)}
                    placeholder="Add new question"
                    fullWidth
                  />
                  <Button onClick={() => handleAddQuestion(item._id)} csx={{
                    backgroundColor: 'primary.main',
                    color: 'black',
                    '&:hover': {
                      backgroundColor: 'primary.dark',
                    }
                  }}>Add</Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Delete Course Content?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this course content? This action cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDeleteCourseContent} color="secondary" autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default CourseDetails;
