import React from 'react'
import Task from './components/Tasks/Task'
import { Weekly } from './components/Weekly/Weekly'
import { Nav } from './components/Nav/Nav'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
      {/* <Task /> */}
      <Nav />
      <Routes>
        <Route path='/' element={<Task />} />
        <Route path='/tasks' element={<Weekly />} />

      </Routes>
    </>
  )
}

export default App