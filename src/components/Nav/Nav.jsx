import React from 'react'
import './Nav.css'
export const Nav = () => {
  return (
    <nav className="h-[70px] w-full  border-sky-700 border-b-2">
        <p className="float-left w-32 font-bold text-xl ">Daily Tasks</p>
        <button className="float-right w-10  h-10 rounded-full"><box-icon size="50px" name='user-circle' type='solid'  ></box-icon></button>
      </nav>

  )
}
