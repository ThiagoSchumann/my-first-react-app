// src/App.jsx
import React, { useState } from "react";
import Sidebar from "./components/Sidebar";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="App">
      <button
        className="text-3xl m-4 p-1 border rounded-lg md:text-2xl md:m-2"
        onClick={toggleSidebar}
      >
        &#9776;
      </button>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="p-4">
        <h1 className="text-2xl">Hello, World!</h1>
        <h1 className="text-2xl">EITA PORRA</h1>
      </div>
    </div>
  );
}

export default App;
