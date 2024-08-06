
// import axios from 'axios';
// import React, { useState } from 'react';
// import { RxCross2 } from "react-icons/rx";

// const Addoncourse = ({ courseId, onAddContent, onClose }) => {
//   const [title, setTitle] = useState('');
//   const [content, setContent] = useState('');
//   const [image, setImage] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);

//     const formData = new FormData();
//     formData.append('title', title);
//     formData.append('content', content);
//     formData.append('courseId', courseId);

//     if (image) {
//       formData.append('image', image);
//     }

//     try {
//       const token = localStorage.getItem('token');

//       const response = await axios.post('http://localhost:8081/api/courseContent', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       if (response.status === 200) {
//         onAddContent(response.data);
//         console.log('Course Content Added Successfully!');
//         console.log('Closing form');
//         onClose(); // Close the form after successful submission
//       } else {
//         console.error('Unexpected response status:', response.status);
//       }
//     } catch (error) {
//       console.error('Error adding content:', error);
//       setError('Error adding content. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
//       <div className="bg-white p-6 rounded-lg shadow-lg">
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-xl font-semibold mb-4">Add Content to Course</h2>
//           <button onClick={() => {
//             console.log('Close button clicked');
//             onClose();
//           }} className="text-gray-500 hover:text-gray-700">
//             <RxCross2 
//             className="w-6 h-6 text-black" />
//           </button>
//         </div>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label className="block text-gray-700 mb-2">Title</label>
//             <input
//               type="text"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700 mb-2">Content</label>
//             <textarea
//               value={content}
//               onChange={(e) => setContent(e.target.value)}
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700 mb-2">Image</label>
//             <input
//               type="file"
//               onChange={(e) => setImage(e.target.files[0])}
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
//             />
//           </div>
//           {error && <div className="text-red-500 mb-4">{error}</div>}
//           <div className="flex justify-end space-x-2">
//             <button
//               type="button"
//               onClick={() => {
//                 console.log('Cancel button clicked');
//                 onClose();
//               }}
//               className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold px-4 py-2 rounded-lg"
//               disabled={loading}
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg"
//               disabled={loading}
//             >
//               {loading ? 'Adding...' : 'Add'}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Addoncourse;
import axios from 'axios';
import React, { useState } from 'react';
import { RxCross2 } from 'react-icons/rx';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Addoncourse = ({ courseId, onAddContent, onClose }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [pdfFile, setPdfFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('courseId', courseId);

    if (image) {
      formData.append('image', image);
    }

    if (pdfFile) {
      formData.append('pdfFile', pdfFile); // Append PDF file to formData
    }

    try {
      const token = localStorage.getItem('token');

      const response = await axios.post(
        'http://localhost:8081/api/courseContent',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response)

      if (response.status === 201) {
        onClose();
        toast.success("Course Content Added Successfully!")
        onAddContent(response.data);
        console.log('Course Content Added Successfully!');
      } else {
        console.error('Unexpected response status:', response.status);
      }
    } catch (error) {
      console.error('Error adding content:', error);
      setError('Error adding content. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold mb-4">Add Content to Course</h2>
          <button
            onClick={() => {
              console.log('Close button clicked');
              onClose();
            }}
            className="text-gray-500 hover:text-gray-700"
          >
            <RxCross2 className="w-6 h-6 text-black" />
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Content</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Image</label>
            <input
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">PDF File</label>
            <input
              type="file"
              accept=".pdf"
              onChange={(e) => setPdfFile(e.target.files[0])}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
            />
          </div>
          {error && <div className="text-red-500 mb-4">{error}</div>}
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={() => {
                console.log('Cancel button clicked');
                onClose();
              }}
              className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold px-4 py-2 rounded-lg"
              disabled={loading}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg"
              disabled={loading}
            >
              {loading ? 'Adding...' : 'Add'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Addoncourse;
