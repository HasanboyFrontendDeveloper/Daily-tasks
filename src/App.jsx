import React from "react";
import './App.css';

const App = () => {
  return (
    <div>
      <nav className="h-10 w-full"> 
        <p className="float-left w-28 font-bold text-xl ">Daily Tasks</p> 
        <button className="float-right  bg-black text-white w-28  h-8 rounded ">Sign in</button> 
      </nav>
      <hr />

      <div className="flex items-center justify-center">
      <div className="border-2  w-[75%] lg:w-[35%] md:w-[50%] mt-[100px] pl-4 pt-3  rounded  ">
        <p className="text-[20px] f-bold font-bold ">Sign in</p>
        <p>Nice to meet you! Enter your email to login</p>
        <form action="" className="pl-[2%]" > <br />
          <label className="" htmlFor="name">Your email</label> <br />
          <input className="rounded border-2 pl-3 h-10 w-[90%] mt-2" type="text" name="" id="name" /> <br />
        </form>
        <div className="text-center">
        <button className="bg-black text-white w-28  h-8 rounded  mt-8">Sign in</button> 
      </div>
      <br />
      </div>
      </div>

    </div>
  );
};

export default App;
