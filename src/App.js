import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Components/UI/Dashboard";
import Header from "./Components/UI/Header";
import ShowMore from "./Components/UI/ShowMore";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/*" element={<Dashboard />} />
        <Route path="/">
          <Route path="/" element={<Dashboard />} />
          <Route path="showMore" element={<ShowMore />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
