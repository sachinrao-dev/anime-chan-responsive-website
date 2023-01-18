import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Components/UI/Dashboard";
import Header from "./Components/UI/Header";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/*" element={<Dashboard />} />
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
