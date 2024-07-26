// src/components/Sidebar.jsx
import React from "react";
import { FaHome, FaInfo, FaServicestack, FaPhone } from "react-icons/fa";

function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <div
      className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out`}
    >
      <button
        className="absolute top-4 right-4 text-2xl"
        onClick={toggleSidebar}
      >
        &times;
      </button>
      <ul className="mt-16 space-y-4">
        <li className="flex items-center px-4 py-2 hover:bg-gray-700">
          <FaHome className="mr-2" />
          Home
        </li>
        <li className="flex items-center px-4 py-2 hover:bg-gray-700">
          <FaInfo className="mr-2" />
          About
        </li>
        <li className="flex items-center px-4 py-2 hover:bg-gray-700">
          <FaServicestack className="mr-2" />
          Services
        </li>
        <li className="flex items-center px-4 py-2 hover:bg-gray-700">
          <FaPhone className="mr-2" />
          Contact
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
