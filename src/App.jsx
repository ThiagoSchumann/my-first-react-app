// src/App.jsx
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import "./index.css"; // Certifique-se de importar o CSS

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Menu aberto por padrão
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    // Garantir que o tema escuro esteja ativado por padrão
    document.documentElement.classList.add("dark");
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleDarkMode = (checked) => {
    setIsDarkMode(checked);
    if (checked) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    }
  };

  return (
    <Router>
      <div className={`App ${isSidebarOpen ? "sidebar-open" : ""}`}>
        <header
          className={`flex justify-between items-center p-4 ${
            isDarkMode
              ? "bg-[#222831] text-[#76ABAE]"
              : "bg-[#BEC6A0] text-[#708871]"
          }`}
        >
          <div className="flex items-center">
            <button className="menu-btn" onClick={toggleSidebar}>
              &#9776;
            </button>
            <span className="ml-4 text-xl font-bold">Nome do Sistema</span>
          </div>
          <div className="flex items-center">
            <DarkModeSwitch
              style={{ marginRight: "1rem" }}
              checked={isDarkMode}
              onChange={toggleDarkMode}
              size={30}
            />
            <span className="text-xl mx-2">|</span>
            <img
              src="/user-photo.png"
              alt="User"
              className="w-8 h-8 rounded-full"
            />
          </div>
        </header>
        <Sidebar isOpen={isSidebarOpen} />
        <div className="content p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
