import React from 'react'
// import Task from './components/Tasks/Task'
// import { Weekly } from './components/Weekly/Weekly'
import { Nav } from './components/Nav/Nav'
import { Route, Routes } from 'react-router-dom'
import { DashBoard } from './components/DashBoard/DashBoard'
import { Spacial } from './components/Spacial/Spacial'
import { Author } from './components/Author/Author'
import { Failed } from './components/Failed/Failed'
import { Succes } from './components/Succes/Succes'

const App = () => {


  return (
    <>
      <Nav/>
      {/* <DashBoard/> */}
      <Routes>
        <Route path='/' element={<DashBoard />} />
        <Route path='/spacial' element={<Spacial />} />
        <Route path='/email' element={<Author />} />
        <Route path='/failed' element={<Failed />} />
        <Route path='/succes' element={<Succes />} />
        
      </Routes>
    </>
  )
}

export default App