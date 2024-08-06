
import React, { useState, useEffect } from 'react';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const StudProfile = () => {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    const token = localStorage.getItem('token');

    try {
      const response = await axios.get('http://localhost:8081/api/profile', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.data) {
        throw new Error('Network response was not ok');
      }

      setProfile(response.data);
    } catch (error) {
      console.error('Error fetching profile:', error);
      setError('Error fetching profile. Please check the console for more information.');
    } finally {
      setLoading(false);
    }
  };

  const handleImageClick = () => {
    document.getElementById('imageInput').click();
  };

  const handleFileChange = async (event) => {
    const token = localStorage.getItem('token');
    const formData = new FormData();
    formData.append('image', event.target.files[0]);

    try {
      const response = await axios.post('http://localhost:8081/api/profile/image', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.data) {
        throw new Error('Network response was not ok');
      }

      setProfile(response.data);
      notifySuccess('Profile image updated successfully!');
    } catch (error) {
      console.error('Error updating profile image:', error);
      notifyError('Error updating profile image. Please check the console for more information.');
    }
  };

  const notifySuccess = (message) => toast.success(message);
  const notifyError = (message) => toast.error(message);

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  if (error) {
    return <div className="flex justify-center items-center h-screen">{error}</div>;
  }

  return (
    <>
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
      <div className="flex justify-center items-center">
        <div className="container mx-auto py-10">
          <h2 className="text-3xl font-bold mb-6 text-center">Profile</h2>
          <div className="bg-white shadow-md rounded-lg p-6">
            <div className="flex items-center space-x-6 ">
              <label
                htmlFor="imageInput"
                className="cursor-pointer"
                onClick={handleImageClick}
              >
                <img
                  src={`http://localhost:8081/uploads/profile/${profile.image}`}
                  alt="Profile"
                  className="w-32 h-32 rounded-full"
                />
              </label>
              <div>
                <h4 className="text-xl font-semibold">{profile.name}</h4>
                <p className="text-gray-600">{profile.email}</p>
                <p className="text-gray-600">Role: {profile.role}</p>
                <p className="text-gray-600">Gender: {profile.gender}</p>
                <p className="text-gray-600">Phone: {profile.phone}</p>
              </div>
              <input
                id="imageInput"
                type="file"
                onChange={handleFileChange}
                className="hidden"
                accept="image/*"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudProfile;

