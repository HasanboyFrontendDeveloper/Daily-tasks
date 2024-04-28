import React from 'react'
import { Link } from 'react-router-dom'

export const Spacial = () => {
    return (
        <>
            <div className="bg-gray-500 w-[100%] h-[3000px] opacity-30 fixed top-0 mb-96 z-0"></div>
            <div className="shadow-2xl fixed ml-[550px] mt-24 w-[400px]  text-blue-700 pl-10 pr-10 rounded-md bg-white z-10">
                <p className='pt-7 text-[20px] font-bold text-black ml-[90px]'>Add spacial day</p>
                <br />
                <select name="" id="" className='border-blue-700 border rounded float-start pl-1'>
                    <option value="January">January</option>
                    <option value="January">January</option>
                    <option value="January">January</option>
                    <option value="January">January</option>
                    <option value="January">January</option>
                    <option value="January">January</option>
                </select>
                <select name="" id="" className='border-blue-700 border rounded float-end pl-1'>
                    <option value="1">1</option>
                    <option value="1">1</option>
                    <option value="1">1</option>
                    <option value="1">1</option>
                    <option value="1">1</option>
                    <option value="1">1</option>
                    <option value="1">1</option>
                </select><br /> <br />
                <textarea type="text" name="" id="" className='border-blue-700 border rounded pl-2 w-[100%] h-20 pb-7 text-[15px] text-blue-700' placeholder='+ add tasks ...' /> <br /> <br />
                <button className='border ml-[100px]  text-white bg-blue-700 w-[130px] rounded-md h-7 hover:bg-blue-800'>
                    <Link to='/'>Add task</Link>

                </button>
                <br /><br />
            </div>



        </>
    )
}
