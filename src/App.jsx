import React from 'react';
import Task from './components/Tasks/Task';
import Monthly from './components/Monthly/Monthly'; // Corrected the component name
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/monthly" element={<Monthly />} />
        <Route path="/task" element={<Task />} />
      </Routes>
    </>
  );
};

export default App;
