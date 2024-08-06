import React, { useState } from 'react';
import axios from 'axios';

const UpdateInstructor = ({ instructor, onClose, onUpdate }) => {
  const [name, setName] = useState(instructor.name);
  const [email, setEmail] = useState(instructor.email);
  const [phone, setPhone] = useState(instructor.phone);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleUpdate = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('No token found, please login first.');
      }

      const response = await axios.put(`http://localhost:8081/api/instructors/${instructor._id}`, {
        name,
        email,
        phone
      }, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
      });

      onUpdate(response.data);
    } catch (error) {
      console.error('Error updating instructor:', error);
      setError('Failed to update instructor. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Update Instructor</h2>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Phone</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
        </div>
        <div className="flex justify-end">
          <button onClick={onClose} className="bg-gray-300 text-black px-4 py-2 rounded-lg mr-2">Cancel</button>
          <button onClick={handleUpdate} className="bg-blue-500 text-white px-4 py-2 rounded-lg">
            {loading ? 'Updating...' : 'Update'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateInstructor;
