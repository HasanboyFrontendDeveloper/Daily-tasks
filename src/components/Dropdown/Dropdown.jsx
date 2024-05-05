import { Menu, MenuHandler, MenuList } from "@material-tailwind/react"
import 'boxicons'
import { useDispatch, useSelector } from "react-redux"
import { updateTasks } from "../../slice/tasks"
import { db } from "../../firebase/config"
import { doc, updateDoc } from "firebase/firestore"

const Dropdown = ({ task }) => {

    const { tasks, user } = useSelector(state => state.tasks)

    const dispatch = useDispatch()

    const deleteHandler = async () => {
        const email = user?.email
        const userRef = doc(db, 'users', email)

        const filterData = tasks.filter(item => item.id !== task.id);
        await updateDoc(userRef, { tasks: filterData })
        dispatch(updateTasks(filterData))

    }

    return (
        <button className=" float-right mr-1 bg-white">
            <Menu>
                <MenuHandler>
                    <button className=''><box-icon color='blue' name='dots-vertical-rounded'></box-icon></button>
                </MenuHandler>
                <MenuList>
                    <p className='w-[200px] pl-2 m-1 cursor-pointer text-red-500' onClick={deleteHandler}>Delete</p>
                </MenuList>
            </Menu>
        </button>
    )
}

export default Dropdown