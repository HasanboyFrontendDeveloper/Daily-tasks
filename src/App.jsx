import React from 'react'
import Task from './components/Tasks/Task'
import { Weekly } from './components/Weekly/Weekly'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Task />
      {/* <Weekly/> */}
      {/* <Routes>
        <Route path='/weekly' element={<Weekly/>}/>
      </Routes> */}
    </>
  )
}

export default App