import React, { useState } from 'react'
import Task from './components/Tasks/Task'
import { Weekly } from './components/Weekly/Weekly'
import { Nav } from './components/Nav/Nav'
import { Route, Routes } from 'react-router-dom'

const App = () => {

  const [navbar, setNavbar] = useState(false)

  return (
    <>
      {/* <Task /> */}
      {/* {navbar && <Nav />}
      
      <button onClick={() => setNavbar(prev => !prev)}>navbar</button> */}
      <Nav/>
      <Routes>
        <Route path='/' element={<Task />} />
        <Route path='/tasks' element={<Weekly />} />

      </Routes>
    </>
  )
}

export default App