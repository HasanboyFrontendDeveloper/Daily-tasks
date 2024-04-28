import React, { useState } from 'react'
import Weekly from '../Weekly/Weekly'
import Task from '../Tasks/Task'
import { Monthly } from '../Monthly/Monthly'
import { Spacial } from '../Spacial/Spacial'

export const DashBoard = () => {

    const [weekly, setWeekly] = useState(false)
    const [monthly, setMonthly] = useState(false)
    const [daily, setDaily] = useState(false)
    const [spacial, setSpacial] = useState(false)
    

    return (
        <>
          {spacial && <Spacial/>}  
            <div className="flex">
                <div className="w-[28%] h-[1000px] border-sky-700 border pt-10" >

                    <div className="flex ml-5">
                        <button className=""><box-icon size="60px" name='user-circle' type='solid'  ></box-icon></button>
                        <div className="ml-6">
                            <p className="text-[25px]">User name</p>
                            <p>example@gmail.com</p>
                        </div>
                    </div>
                    <br />
                    <div onClick={() => setDaily(prev => !prev)} className="cursor-pointer border-sky-700  bg-blue-700 text-white w-[100%] h-[45px] pt-2 text-[18px] font-[500] pl-5  border-t">
                        <p>Today's challanges</p>
                    </div>

                    <div onClick={() => setWeekly(prev => !prev)} className="cursor-pointer border-sky-700 w-[100%] h-[45px] pt-2 text-[18px] font-[500] pl-5  border-t hover:bg-blue-700 hover:text-white hover:border-white">
                        <p>Weekly's tasks</p>
                    </div>

                    <div onClick={() => setMonthly(prev => !prev)} className="cursor-pointer border-sky-700 w-[100%] h-[45px] pt-2 text-[18px] font-[500] pl-5  border-t hover:bg-blue-700 hover:text-white hover:border-white">
                        <p>Monthly tasks</p>
                    </div>

                    <div onClick={() => setSpacial(prev => !prev)} className="cursor-pointer border-sky-700 w-[100%] h-[45px] pt-2 text-[18px] font-[500] pl-5  border-t hover:bg-blue-700 hover:text-white hover:border-white border-b">
                        <p>+ add spacial day</p>
                    </div>

                </div>

                <div className="w-[72%]">
                    {(daily && <Task />) ||  (weekly && <Weekly />) || (monthly && <Monthly />)  }
                    
                </div>

            </div>
            

        </>
    )
}
