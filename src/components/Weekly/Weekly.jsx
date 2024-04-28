import React from 'react'
import './Weekly.css';
import { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';
export const Weekly = () => {



  return (
    <>
      <div className="flex">
        <div className="w-[550px] h-[1000px] border-sky-700 border pt-10">

          <div className="flex ml-5">
            <button className=""><box-icon size="60px" name='user-circle' type='solid'  ></box-icon></button>
            <div className="ml-6">
              <p className="text-[25px]">User name</p>
              <p>example@gmail.com</p>
            </div>
          </div>
          <br />
          <div className="border-sky-700  bg-blue-700 text-white w-[100%] h-[45px] pt-2 text-[18px] font-[500] pl-5  border-t">
            <p>Today's challanges</p>
          </div>
          <div className="border-sky-700 w-[100%] h-[45px] pt-2 text-[18px] font-[500] pl-5  border-t hover:bg-blue-700 hover:text-white hover:border-white">
            <p>Today's tasks</p>
          </div>

          <div className="border-sky-700 w-[100%] h-[45px] pt-2 text-[18px] font-[500] pl-5  border-t hover:bg-blue-700 hover:text-white hover:border-white">
            <p>Monthly tasks</p>
          </div>

          <div className="border-sky-700 w-[100%] h-[45px] pt-2 text-[18px] font-[500] pl-5  border-t hover:bg-blue-700 hover:text-white hover:border-white border-b">
            <p>+ add spacial day</p>
          </div>

        </div>


        <div className=" w-[100%]  ">

          <div className="w-[1200px]  text-white items-center justify-center flex">
            {/* <p className="text-[18px]">Today 25.04.2024</p> */}
            <Swiper
              // pagination={{
              //   type: 'fraction',
              // }}
              slidesPerView={7}
              spaceBetween={0}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide className='border-r-2 border-b border-l  border-sky-700 pt-5 hover:bg-blue-700 hover:text-white hover:border-white'>
                <p className=''>Monday</p>
                <p>26.01</p>
              </SwiperSlide>
              <SwiperSlide className='border-r-2 border-b border-l  border-sky-700 pt-5 hover:bg-blue-700 hover:text-white hover:border-white'>
                <p className=''>Monday</p>
                <p>26.01</p>
              </SwiperSlide>
              <SwiperSlide className='border-r-2 border-b border-l  border-sky-700 pt-5 hover:bg-blue-700 hover:text-white hover:border-white'>
                <p className=''>Monday</p>
                <p>26.01</p>
              </SwiperSlide>
              <SwiperSlide className='border-r-2 border-b border-l  border-sky-700 pt-5 hover:bg-blue-700 hover:text-white hover:border-white'>
                <p className=''>Monday</p>
                <p>26.01</p>
              </SwiperSlide>
              <SwiperSlide className='border-r-2 border-b border-l  border-sky-700 pt-5 hover:bg-blue-700 hover:text-white hover:border-white'>
                <p className=''>Monday</p>
                <p>26.01</p>
              </SwiperSlide>
              <SwiperSlide className='border-r-2 border-b  border-sky-700 pt-5 hover:bg-blue-700 hover:text-white hover:border-white'>
                <p className=''>Monday</p>
                <p>26.01</p>
              </SwiperSlide>
              <SwiperSlide className='border-r-2 border-b  border-sky-700 pt-5 hover:bg-blue-700 hover:text-white hover:border-white'>
                <p className=''>Monday</p>
                <p>26.01</p>
              </SwiperSlide>
              <SwiperSlide className='border-r-2 border-b  border-sky-700 pt-5 hover:bg-blue-700 hover:text-white hover:border-white'>
                <p className=''>Monday</p>
                <p>26.01</p>
              </SwiperSlide>
              <SwiperSlide className='border-r-2 border-b  border-sky-700 pt-5 hover:bg-blue-700 hover:text-white hover:border-white'>
                <p className=''>Monday</p>
                <p>26.01</p>
              </SwiperSlide>
              <SwiperSlide className='border-r-2 border-b  border-sky-700 pt-5 hover:bg-blue-700 hover:text-white hover:border-white'>
                <p className=''>Monday</p>
                <p>26.01</p>
              </SwiperSlide>
              <SwiperSlide className='border-r-2 border-b  border-sky-700 pt-5 hover:bg-blue-700 hover:text-white hover:border-white'>
                <p className=''>Monday</p>
                <p>26.01</p>
              </SwiperSlide>
              <SwiperSlide className='border-r-2 border-b  border-sky-700 pt-5 hover:bg-blue-700 hover:text-white hover:border-white'>
                <p className=''>Monday</p>
                <p>26.01</p>
              </SwiperSlide>
              <SwiperSlide className='border-r-2 border-b  border-sky-700 pt-5 hover:bg-blue-700 hover:text-white hover:border-white'>
                <p className=''>Monday</p>
                <p>26.01</p>
              </SwiperSlide>
            </Swiper>
          </div>

          <div className="mt-5 ml-5 flex ">

            <div className="w-[340px] border border-sky-700 pl-3 pt-2 rounded-[10px] pb-3 m-2 h-[50%] hover:shadow-indigo-500/40 hover:shadow-lg">
              <div className="w-[100%] h-10">
                <p className="float-left text-[22px] font-[500]">To Do</p>
                <button className=" float-right mr-1"><box-icon color='blue' name='dots-vertical-rounded'></box-icon></button>
              </div>

              <div className="w-[97%] pl-2 pt-1 border h-[35px] rounded ">
                <p className="float-left ">Need to go market</p>
                <button className=" float-right"><box-icon size='20px' color='blue' name='dots-vertical-rounded'></box-icon></button>
              </div>
              <button className="mt-3">+ add tasks</button>
            </div>

            <div className="w-[340px] border border-sky-700 pl-3 pt-2 rounded-[10px] pb-3 m-2 h-[50%] hover:shadow-indigo-500/40 hover:shadow-lg">
              <div className="w-[100%] h-10">
                <p className="float-left text-[22px] font-[500]">In progress</p>
                <button className=" float-right mr-1"><box-icon color='blue' name='dots-vertical-rounded'></box-icon></button>
              </div>
            </div>

            <div className="w-[340px] border border-sky-700 pl-3 pt-2 rounded-[10px] pb-3 m-2 h-[50%] hover:shadow-indigo-500/40 hover:shadow-lg">
              <div className="w-[100%] h-10">
                <p className="float-left text-[22px] font-[500]">Done</p>
                <button className=" float-right mr-1"><box-icon color='blue' name='dots-vertical-rounded'></box-icon></button>
              </div>
            </div>

            {/* <button>
              <Link to='/task'></Link>
            </button> */}
          </div>
        </div>

      </div>

    </>
  )
}
export default Weekly;
