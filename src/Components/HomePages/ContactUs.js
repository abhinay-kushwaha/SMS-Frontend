// import React, { useState } from 'react';
// import contact from '../../Assets/contact.jpg'; // Assuming contact.jpg is in the correct directory
// import contactt from '../../Assets/contactt.gif';
// const ContactUs = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: ''
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission, e.g., send data to the backend
//     console.log(formData);
//   };

//   return (
//     <div className="relative flex justify-center items-center min-h-screen bg-gray-100 overflow-hidden">
//       {/* Background Image */}
//       <div
//         className="absolute inset-0 bg-cover bg-center"
//         style={{
//           backgroundImage: `url(${contact})`,
//         }}
//       />
      
//       {/* Content */}
//       <div className="relative bg-white p-8 rounded-lg shadow-md w-full max-w-lg z-20">
//         <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label className="block text-gray-700">Name</label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Email</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Subject</label>
//             <input
//               type="text"
//               name="subject"
//               value={formData.subject}
//               onChange={handleChange}
//               className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Message</label>
//             <textarea
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
//               rows="4"
//               required
//             ></textarea>
//           </div>
//           <div className="text-center">
//             <button
//               type="submit"
//               className="bg-blue-500 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring focus:border-blue-300 hover:bg-indigo-900 transition duration-300 ease-out hover:ease-in"
//             >
//               Submit
//             </button>
//           </div>
//         </form>
//       </div>
//        {/* GIF */}
//        <div className="absolute right-0 top-0 h-full flex justify-end items-center rounded-2xl">
//         <img src={contactt} alt="Contact GIF" className="max-h-96 rounded-2xl" />
//       </div>
//     </div>
    
//   );
// };
// export default ContactUs;




import React, { useState } from 'react';
import contact from '../../Assets/contact.jpg';
import contactt from '../../Assets/contactt.gif';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:8081/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Optionally handle success response
      console.log('Form submitted successfully:', formData);
      // Reset form after submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

    } catch (error) {
      console.error('Error submitting form:', error.message);
      // Handle error (e.g., show error message to user)
    }
  };

  return (
    <div className="relative flex justify-center items-center min-h-screen bg-gray-100 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${contact})`,
        }}
      />
      
     
      <div className="relative bg-white p-8 rounded-lg shadow-md w-full max-w-lg z-20">
        <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Subject</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              rows="4"
              required
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring focus:border-blue-300 hover:bg-indigo-900 transition duration-300 ease-out hover:ease-in"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      
  
      <div className="absolute right-0 top-0 h-full flex justify-end items-center rounded-2xl">
        <img src={contactt} alt="Contact GIF" className="max-h-96 rounded-2xl" />
      </div>
    </div>
  );
};

export default ContactUs;
