import { useState } from 'react'
import { Spacial, Monthly, Task, Weekly } from '../'
import { useSelector } from 'react-redux'


const DashBoard = () => {

    const [togglePage, setTogglePage] = useState('task')
    const [showSpacial, setShowSpacial] = useState(false)

    const {user} = useSelector(state => state.auth)

    return (
        <>
            {showSpacial && <Spacial setShowSpacial={setShowSpacial} />}
            <div className="flex">
                <div className="w-[20%] h-[100vh] border-sky-700 border pt-10" >

                    <div className="flex ml-5">
                        <button className=""><box-icon size="60px" name='user-circle' type='solid'  ></box-icon></button>
                        <div className="ml-6">
                            <p className="text-[25px]"> {user?.name ? user.name : 'User name'}</p>
                            <p>{user?.email ? user.email : 'example@gmail.com'}</p>
                        </div>
                    </div>
                    <br />
                    <div onClick={() => setTogglePage('task')} className={`${togglePage === 'task' && 'bg-blue-700 text-white'} cursor-pointer border-sky-700 white w-[100%] h-[45px] pt-2 text-[18px] font-[500] pl-5  border-t`}>
                        <p>Today's challanges</p>
                    </div>

                    <div onClick={() => setTogglePage('weekly')} className={`${togglePage === 'weekly' && 'bg-blue-700 text-white'} cursor-pointer border-sky-700 w-[100%] h-[45px] pt-2 text-[18px] font-[500] pl-5  border-t hover:bg-blue-700 hover:text-white hover:border-white`}>
                        <p>Weekly's tasks</p>
                    </div>

                    <div onClick={() => setTogglePage('monthly')} className={`${togglePage === 'monthly' && 'bg-blue-700 text-white'} cursor-pointer border-sky-700 w-[100%] h-[45px] pt-2 text-[18px] font-[500] pl-5  border-t hover:bg-blue-700 hover:text-white hover:border-white`}>
                        <p>Monthly tasks</p>
                    </div>

                    <div onClick={() => setShowSpacial(true)} className={`${togglePage === 'spacial' && 'bg-blue-700 text-white '} cursor-pointer border-sky-700 w-[100%] h-[45px] pt-2 text-[18px] font-[500] pl-5  border-t hover:bg-blue-700 hover:text-white hover:border-white border-b`}>
                        <p>+ add spacial day</p>
                    </div>

                </div>

                <div className="w-[80%]">
                    {(togglePage === 'task' && <Task />) || (togglePage === 'weekly' && <Weekly />) || (togglePage === 'monthly' && <Monthly />)}
                </div>

            </div>


        </>
    )
}

export default DashBoard