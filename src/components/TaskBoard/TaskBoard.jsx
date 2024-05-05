import { Button, Input } from "@material-tailwind/react";
import { Dropdown } from "../"
import { useDispatch, useSelector } from "react-redux";
import { updateTasks } from "../../slice/tasks";
import { useState } from "react";
import { v4 } from "uuid";
import { db } from "../../firebase/config";
import { doc, updateDoc } from "firebase/firestore";


const TaskBoard = ({ tasks, currentDate }) => {
    const [taskTitle, setTaskTitle] = useState('')

    const state = useSelector(state => state.tasks)

    const email = state?.user?.email

    const dispatch = useDispatch()

    const onDragStart = (evt) => {
        let element = evt.currentTarget;
        element.classList.add("dragged");
        evt.dataTransfer.setData("text/plain", evt.currentTarget.id);
        evt.dataTransfer.effectAllowed = "move";
    };

    const onDragEnd = (evt) => {
        evt.currentTarget.classList.remove("dragged");
    };

    const onDragEnter = (evt) => {
        evt.preventDefault();
        let element = evt.currentTarget;
        element.classList.add("dragged-over");
        evt.dataTransfer.dropEffect = "move";
    };

    const onDragLeave = (evt) => {
        let currentTarget = evt.currentTarget;
        let newTarget = evt.relatedTarget;
        if (newTarget.parentNode === currentTarget || newTarget === currentTarget)
            return;
        evt.preventDefault();
        let element = evt.currentTarget;
        element.classList.remove("dragged-over");
    };

    const onDragOver = (evt) => {
        evt.preventDefault();
        evt.dataTransfer.dropEffect = "move";
    };

    const onDrop = async (evt, status) => {
        evt.preventDefault();
        evt.currentTarget.classList.remove("dragged-over");
        let data = evt.dataTransfer.getData("text/plain");
        const taskData = state.tasks
        let updated = taskData.map((task) => {
            if (task.id.toString() === data.toString()) {
                return { ...task, status: status, done: status === 'Done' };
            }
            return task;
        });
        dispatch(updateTasks(updated));
        const userRef = doc(db, 'users', email)

        await updateDoc(userRef, { tasks: updated })
    };


    let inProgress = tasks.filter((data) => data.status === "In Progress");
    let done = tasks.filter((data) => data.status === "Done");
    let todo = tasks.filter((data) => data.status === "To Do");

    const handleFormSubmit = async (e) => {
        e.preventDefault()

        const addTask = {
            id: v4(),
            title: taskTitle,
            status: "To Do",
            date: currentDate,
            done: false,
        }
        setTaskTitle('')
        dispatch(updateTasks([...state.tasks, addTask]));
        const userRef = doc(db, 'users', email)

        await updateDoc(userRef, { tasks: [...state.tasks, addTask] })
    }

    return (
        <div className="mt-5 ml-5 flex">

            <div
                className="w-[340px] border border-sky-700 pl-3 pt-2 rounded-[10px] pb-3 m-2 h-[50%] hover:shadow-indigo-500/40 hover:shadow-lg"
                onDragLeave={(e) => onDragLeave(e)}
                onDragEnter={(e) => onDragEnter(e)}
                onDragEnd={(e) => onDragEnd(e)}
                onDragOver={(e) => onDragOver(e)}
                onDrop={(e) => onDrop(e, "To Do")}
            >
                <div className="w-[100%] h-10">
                    <p className="float-left text-[22px] font-[500]">To Do</p>
                </div>

                <form className="w-[97%] pl-2 pt-1 h-20 rounded" onSubmit={handleFormSubmit}>
                    <Input required label="Add task" onChange={(e) => setTaskTitle(e.target.value)} value={taskTitle} />
                    <Button variant="text" type="submit" className="float-end text-xs"> add tasks</Button>
                </form>
                <div>
                    {todo.map((task) => (
                        <div
                            className="w-[97%] my-2 pl-2 pt-1 border flex justify-between rounded"
                            key={task.title}
                            id={task.id}
                            draggable
                            onDragStart={(e) => onDragStart(e)}
                            onDragEnd={(e) => onDragEnd(e)}
                        >

                            <p className="float-left ">{task.title}</p>
                            <p className="float-left ">{task.date}</p>
                            <Dropdown task={task} />
                        </div>
                    ))}
                </div>
            </div>

            <div
                className="w-[340px] border border-sky-700 pl-3 pt-2 rounded-[10px] pb-3 m-2 h-[50%] hover:shadow-indigo-500/40 hover:shadow-lg"
                onDragLeave={(e) => onDragLeave(e)}
                onDragEnter={(e) => onDragEnter(e)}
                onDragEnd={(e) => onDragEnd(e)}
                onDragOver={(e) => onDragOver(e)}
                onDrop={(e) => onDrop(e, "In Progress")}
            >
                <div className="w-[100%] h-10">
                    <p className="float-left text-[22px] font-[500]">In Progress</p>
                </div>

                <div>
                    {inProgress.map((task) => (
                        <div
                            className="w-[97%] my-2 pl-2 pt-1 border flex justify-between rounded"
                            key={task.title}
                            id={task.id}
                            draggable
                            onDragStart={(e) => onDragStart(e)}
                            onDragEnd={(e) => onDragEnd(e)}
                        >

                            <p className="float-left ">{task.title}</p>
                            <p className="float-left ">{task.date}</p>
                            <Dropdown task={task} />
                        </div>
                    ))}
                </div>
            </div>

            <div
                className="w-[340px] border border-sky-700 pl-3 pt-2 rounded-[10px] pb-3 m-2 h-[50%] hover:shadow-indigo-500/40 hover:shadow-lg"
                onDragLeave={(e) => onDragLeave(e)}
                onDragEnter={(e) => onDragEnter(e)}
                onDragEnd={(e) => onDragEnd(e)}
                onDragOver={(e) => onDragOver(e)}
                onDrop={(e) => onDrop(e, "Done")}
            >
                <div className="w-[100%] h-10">
                    <p className="float-left text-[22px] font-[500]">Done</p>
                </div>

                <div>
                    {done.map((task) => (
                        <div
                            className="w-[97%] my-2 pl-2 pt-1 border flex justify-between rounded"
                            key={task.title}
                            id={task.id}
                            draggable
                            onDragStart={(e) => onDragStart(e)}
                            onDragEnd={(e) => onDragEnd(e)}
                        >

                            <p className="float-left ">{task.title}</p>
                            <p className="float-left ">{task.date}</p>
                            <Dropdown task={task} />
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default TaskBoard