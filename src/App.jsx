import React from "react";
import { Login, Main, Navbar, Register, Weekly } from "./components";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path='/dashboard' element={<Weekly />} />
      </Routes>
    </>
  );
};

export default App;
