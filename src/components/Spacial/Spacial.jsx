import { Button, Input, Textarea } from '@material-tailwind/react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { v4 } from 'uuid';
import { updateTasks } from '../../slice/tasks';

const Spacial = ({ setShowSpacial }) => {
    const [value, setValue] = useState({
        date: '',
        title: '',
    })

    const { tasks } = useSelector(state => state.tasks)

    const dispatch = useDispatch()

    const closeHandler = (e) => {
        if (e.target.className.includes("spacial")) {
            setShowSpacial(false);
        }
    }

    const submitHandler = (e) => {
        e.preventDefault()

        const addTask = {
            id: v4(),
            title: value.title,
            status: "To Do",
            date: value.date,
            done: false,
        }
        setValue({
            date: '',
            title: '',
        })
        dispatch(updateTasks([...tasks, addTask]));
    }

    return (
        <>
            <div className="spacial bg-gray-500 w-[100%] h-[3000px] opacity-50 fixed top-0 mb-96 z-0" onClick={closeHandler}></div>
            <div className="shadow-2xl fixed ml-[550px] mt-24 w-[400px]   text-blue-700 p-10  rounded-md bg-white z-10">
                <p className='py-5 text-[20px] font-bold text-black ml-[90px]'>Add spacial day</p>
                {/* <select name="" id="" className='border-blue-700 border rounded float-start pl-1'>
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
                </select><br /> <br /> */}
                <form onSubmit={submitHandler} >

                    <Input type='date' label='date' value={value.date} onChange={(e) => setValue(prev => ({ ...prev, date: e.target.value }))} required /> <br />
                    <Textarea value={value.title} onChange={(e) => setValue(prev => ({ ...prev, title: e.target.value }))} label='add task' required />
                    <Button type='submit' color='blue' className='my-2 float-end'>Add task</Button>

                </form>
            </div>



        </>
    )
}

export default Spacial