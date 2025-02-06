 
import React, { useEffect, useState, useRef } from 'react';
import { FaUserCircle } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { MdLogout } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const storedName = localStorage.getItem('name');
    setUserName(storedName || 'Abhinay');

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('name');
    navigate('/login');
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="flex justify-end mb-1 px-6 py-3 top-0 relative">
      <div className="flex text-right gap-3 items-center">
        <div className="relative" ref={dropdownRef}>
          <div className="flex items-center cursor-pointer" onClick={toggleDropdown}>
            <FaUserCircle className="text-4xl" />
            <p className="ml-2">{userName}</p>
            <RiArrowDropDownLine className="text-xl ml-1" />
          </div>
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-50">
              <ul className="py-1">
                <li
                  className="hover:bg-gray-100 px-4 py-2 cursor-pointer flex items-center"
                  onClick={() => {
                    navigate('/profile');
                    setDropdownOpen(false);
                  }}
                >
                  <CgProfile className="mr-2" /> Profile
                </li>
                <li
                  className="hover:bg-gray-100 px-4 py-2 cursor-pointer flex items-center"
                  onClick={() => {
                    navigate('/settings');
                    setDropdownOpen(false);
                  }}
                >
                  <IoSettingsOutline className="mr-2" /> Settings
                </li>
                <li
                  className="hover:bg-gray-100 px-4 py-2 cursor-pointer flex items-center"
                  onClick={handleLogout}
                >
                  <MdLogout className="mr-2" /> Logout
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;

