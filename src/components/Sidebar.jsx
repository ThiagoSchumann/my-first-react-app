// src/components/Sidebar.jsx
import React from "react";
import { FaHome, FaInfo, FaServicestack, FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";

function Sidebar({ isOpen }) {
  return (
    <div
      className={`sidebar ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
    >
      <div className="flex items-center justify-center p-4">
        <img src="/logo.png" alt="Logo" className="w-24 h-24" />
      </div>
      <ul className="mt-16 space-y-4">
        <li className="hover:bg-gray-300 dark:hover:bg-gray-700">
          <Link to="/" className="flex items-center px-4 py-2 w-full">
            <FaHome className="mr-2" />
            Home
          </Link>
        </li>
        <li className="hover:bg-gray-300 dark:hover:bg-gray-700">
          <Link to="/about" className="flex items-center px-4 py-2 w-full">
            <FaInfo className="mr-2" />
            About
          </Link>
        </li>
        <li className="hover:bg-gray-300 dark:hover:bg-gray-700">
          <Link to="/services" className="flex items-center px-4 py-2 w-full">
            <FaServicestack className="mr-2" />
            Services
          </Link>
        </li>
        <li className="hover:bg-gray-300 dark:hover:bg-gray-700">
          <Link to="/contact" className="flex items-center px-4 py-2 w-full">
            <FaPhone className="mr-2" />
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
