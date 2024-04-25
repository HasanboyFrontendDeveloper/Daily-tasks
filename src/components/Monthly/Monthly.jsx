import React from 'react';
import 'boxicons';
import './Monthly.css';

const Task = () => {
  return (
    <div className="container mx-auto mt-5 px-4">
      {/* Navigation bar with flex layout and spaced elements */}
      <nav className="flex justify-between items-center h-10 mb-5"> 
        <p className="font-bold text-xl">Daily Tasks</p>
        <button className="w-10 h-10 rounded-full">
          <box-icon size="50px" name='user-circle' type='solid' />
        </button> 
      </nav>
      <hr />

      <div className="flex gap-4"> {/* Container for the main content with spacing */}
        <div className="w-[550px] border-sky-700 border pt-10">
          {/* User Information */}
          <div className="flex items-center ml-5">
            <button className="w-10 h-10 rounded-full">
              <box-icon size="60px" name='user-circle' type='solid' />
            </button>
            <div className="ml-6">
              <p className="text-[25px]">User Name</p>
              <p>example@gmail.com</p>
            </div>
          </div>

          {/* Task Sections */}
          <div className="border-sky-700 bg-blue-700 text-white h-[45px] pt-2 text-[18px] font-[500] pl-5 border-t">
            <p>Today's Challenges</p>
          </div>
          <div className="hover:bg-blue-700 hover:text-white border-sky-700 border-t h-[45px] pt-2 text-[18px] font-[500] pl-5">
            <p>Today's Tasks</p>
          </div>
          <div className="hover:bg-blue-700 hover:text-white border-sky-700 border-t h-[45px] pt-2 text-[18px] font-[500] pl-5">
            <p>Monthly Tasks</p>
          </div>
          <div className="hover:bg-blue-700 hover:text-white border-sky-700 border-t border-b h-[45px] pt-2 text-[18px] font-[500] pl-5">
            <p>+ Add Special Day</p>
          </div>
        </div>

        {/* Task Sections for To-Do, In Progress, Done */}
        <div className="flex-1 border-sky-700 border">
          <div className="w-full bg-blue-700 h-[45px] text-white flex items-center justify-center">
            <p className="text-[18px]">Today 25.04.2024</p>
          </div>

          <div className="mt-5 ml-5 flex gap-4">
            <div className="w-[340px] border border-sky-700 pl-3 pt-2 rounded-[10px] pb-3 hover:shadow-lg">
              <div className="flex justify-between">
                <p className="text-[22px] font-[500]">To Do</p>
                <button className="mr-1">
                  <box-icon color='blue' name='dots-vertical-rounded' />
                </button>
              </div>
              <div className="border-sky-700 border rounded">
                <p className="pl-2">Need to go market</p>
                <button>
                  <box-icon size='20px' color='blue' name='dots-vertical-rounded' />
                </button>
              </div>
              <button className="mt-3">+ Add Tasks</button>
            </div>

            <div className="w-[340px] border border-sky-700 rounded-[10px] pb-3 hover:shadow-lg">
              <div className="flex justify-between">
                <p className="text-[22px] font-[500]">In Progress</p>
                <button className="mr-1">
                  <box-icon color='blue' name='dots-vertical-rounded' />
                </button>
              </div>
            </div>

            <div className="w-[340px] border border-sky-700 rounded-[10px] pb-3 hover:shadow-lg">
              <div class="flex justify-between">
                <p className="text-[22px] font-[500]">Done</p>
                <button className="mr-1">
                  <box-icon color='blue' name='dots-vertical-rounded' />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;
