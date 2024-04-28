import React from 'react'
import { Link } from 'react-router-dom'

export const Succes = () => {
    return (
        <>
            <div className="bg-gray-500 w-[100%] h-[3000px] opacity-30 fixed top-0 mb-96 z-0"></div>
            <div className="shadow-2xl fixed ml-[550px] mt-24 w-[400px]  text-center pl-12 pr-10 rounded-md bg-white z-10 pt-10">
                
                <div className="flex">
                <p><box-icon color='green' size='70px' type='solid'  name='check-circle'></box-icon></p>
                <p className='pl-2 font-bold text-[20px] pt-4'>Registration succesfuly</p>
                </div>
                <br />
                <p className=''>We send email to your email. Please check your email!</p> <br />
                <button className='bg-black w-[150px] h-8 rounded-md text-white hover:scale-[1.07] transition hover:bg-gray-800'>Ok</button>


                <br /><br />
            </div>
        </>
    )
}
