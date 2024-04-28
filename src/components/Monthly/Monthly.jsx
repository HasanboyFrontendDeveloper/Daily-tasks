import React from 'react'

// import '../';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Menu, MenuHandler, MenuList, } from "@material-tailwind/react";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';


export const Monthly = () => {
    return (
        <>
            {/* <div className="flex"> */}
            <div className=" w-[100%]  ">

                <div className="w-[100%]  text-white items-center justify-center flex">
                    {/* <p className="text-[18px]">Today 25.04.2024</p> */}
                    <Swiper
                        slidesPerView={7}
                        spaceBetween={0}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide className='border-r-2 border-b border-l  border-sky-700 pt-5 hover:bg-blue-700 hover:text-white hover:border-white'>
                            <p className=''>March</p>
                            <p>3</p>
                        </SwiperSlide>
                        <SwiperSlide className='border-r-2 border-b border-l  border-sky-700 pt-5 hover:bg-blue-700 hover:text-white hover:border-white'>
                            <p className=''>March</p>
                            <p>3</p>
                        </SwiperSlide>
                        <SwiperSlide className='border-r-2 border-b border-l  border-sky-700 pt-5 hover:bg-blue-700 hover:text-white hover:border-white'>
                            <p className=''>March</p>
                            <p>3</p>
                        </SwiperSlide>
                        <SwiperSlide className='border-r-2 border-b border-l  border-sky-700 pt-5 hover:bg-blue-700 hover:text-white hover:border-white'>
                            <p className=''>March</p>
                            <p>3</p>
                        </SwiperSlide>
                        <SwiperSlide className='border-r-2 border-b border-l  border-sky-700 pt-5 hover:bg-blue-700 hover:text-white hover:border-white'>
                            <p className=''>March</p>
                            <p>3</p>
                        </SwiperSlide>
                        <SwiperSlide className='border-r-2 border-b border-l  border-sky-700 pt-5 hover:bg-blue-700 hover:text-white hover:border-white'>
                            <p className=''>March</p>
                            <p>3</p>
                        </SwiperSlide>
                        <SwiperSlide className='border-r-2 border-b border-l  border-sky-700 pt-5 hover:bg-blue-700 hover:text-white hover:border-white'>
                            <p className=''>March</p>
                            <p>3</p>
                        </SwiperSlide>
                        <SwiperSlide className='border-r-2 border-b border-l  border-sky-700 pt-5 hover:bg-blue-700 hover:text-white hover:border-white'>
                            <p className=''>March</p>
                            <p>3</p>
                        </SwiperSlide>
                        <SwiperSlide className='border-r-2 border-b border-l  border-sky-700 pt-5 hover:bg-blue-700 hover:text-white hover:border-white'>
                            <p className=''>March</p>
                            <p>3</p>
                        </SwiperSlide>
                        <SwiperSlide className='border-r-2 border-b border-l  border-sky-700 pt-5 hover:bg-blue-700 hover:text-white hover:border-white'>
                            <p className=''>March</p>
                            <p>3</p>
                        </SwiperSlide>
                        <SwiperSlide className='border-r-2 border-b border-l  border-sky-700 pt-5 hover:bg-blue-700 hover:text-white hover:border-white'>
                            <p className=''>March</p>
                            <p>3</p>
                        </SwiperSlide>
                        <SwiperSlide className='border-r-2 border-b border-l  border-sky-700 pt-5 hover:bg-blue-700 hover:text-white hover:border-white'>
                            <p className=''>March</p>
                            <p>3</p>
                        </SwiperSlide>
                        
                    </Swiper>
                </div>

                <div className="mt-5 ml-5 flex ">

                    <div className="w-[340px] border border-sky-700 pl-3 pt-2 rounded-[10px] pb-3 m-2 h-[50%] hover:shadow-indigo-500/40 hover:shadow-lg">
                        <div className="w-[100%] h-10">
                            <p className="float-left text-[22px] font-[500]">To Do</p>
                            <button className=" float-right mr-1">
                                <Menu>
                                    <MenuHandler>
                                        <button className=''><box-icon color='blue' name='dots-vertical-rounded'></box-icon></button>
                                    </MenuHandler>
                                    <MenuList>
                                        <p className='w-[200px] pl-2 m-1 cursor-pointer'>Move to "in proress"</p>
                                        <p className='w-[200px] pl-2 m-1 cursor-pointer'>Move to "in proress"</p>
                                        <p className='w-[200px] pl-2 m-1 cursor-pointer text-red-500'>Delete</p>
                                    </MenuList>
                                </Menu>
                            </button>


                        </div>

                        <div className="w-[97%] pl-2 pt-1 border h-[35px] rounded ">
                            <p className="float-left ">Need to go market</p>
                            <button className=" float-right">
                                <Menu>
                                    <MenuHandler>
                                        <button className=''><box-icon color='blue' name='dots-vertical-rounded'></box-icon></button>
                                    </MenuHandler>
                                    <MenuList>
                                        <p className='w-[200px] pl-2 m-1 cursor-pointer'>Move to "in proress"</p>
                                        <p className='w-[200px] pl-2 m-1 cursor-pointer'>Move to "in proress"</p>
                                        <p className='w-[200px] pl-2 m-1 cursor-pointer text-red-500'>Delete</p>
                                    </MenuList>
                                </Menu>
                            </button>
                        </div>
                        <button className="mt-3">+ add tasks</button>
                    </div>

                    <div className="w-[340px] border border-sky-700 pl-3 pt-2 rounded-[10px] pb-3 m-2 h-[50%] hover:shadow-indigo-500/40 hover:shadow-lg">
                        <div className="w-[100%] h-10">
                            <p className="float-left text-[22px] font-[500]">In progress</p>
                            <button className=" float-right mr-1">
                                <Menu>
                                    <MenuHandler>
                                        <button className=''><box-icon color='blue' name='dots-vertical-rounded'></box-icon></button>
                                    </MenuHandler>
                                    <MenuList>
                                        <p className='w-[200px] pl-2 m-1 cursor-pointer'>Move to "in proress"</p>
                                        <p className='w-[200px] pl-2 m-1 cursor-pointer'>Move to "in proress"</p>
                                        <p className='w-[200px] pl-2 m-1 cursor-pointer text-red-500'>Delete</p>
                                    </MenuList>
                                </Menu>
                            </button>
                        </div>
                    </div>

                    <div className="w-[340px] border border-sky-700 pl-3 pt-2 rounded-[10px] pb-3 m-2 h-[50%] hover:shadow-indigo-500/40 hover:shadow-lg">
                        <div className="w-[100%] h-10">
                            <p className="float-left text-[22px] font-[500]">Done</p>
                            <button className=" float-right mr-1">
                                <Menu>
                                    <MenuHandler>
                                        <button className=''><box-icon color='blue' name='dots-vertical-rounded'></box-icon></button>
                                    </MenuHandler>
                                    <MenuList>
                                        <p className='w-[200px] pl-2 m-1 cursor-pointer'>Move to "in proress"</p>
                                        <p className='w-[200px] pl-2 m-1 cursor-pointer'>Move to "in proress"</p>
                                        <p className='w-[200px] pl-2 m-1 cursor-pointer text-red-500'>Delete</p>
                                    </MenuList>
                                </Menu>
                            </button>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}
