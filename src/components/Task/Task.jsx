import { useDispatch, useSelector } from 'react-redux';
import { TaskBoard } from '../';
import { useEffect, useState } from 'react';
import { updateTasks } from '../../slice/tasks';


const Task = () => {
  const { tasks } = useSelector(state => state.tasks)

  const [tasksData, setTasksData] = useState([])


  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();

  const currentDate = `${month.toString().padStart(2, '0')}.${day.toString().padStart(2, '0')}.${year}`;

  const filterTasks = () => {
    const filteredTasks = tasks.filter(taks => taks.date === currentDate)
    setTasksData(filteredTasks)
  }

  useEffect(() => {
    filterTasks()
  }, [tasks])




  return (
    <div>

      <div className="w-[100%]">
        <div className="w-[100%] bg-blue-700 h-[45px] text-white items-center justify-center flex">
          <p className="text-[18px]">Today {currentDate}</p>
        </div>

        <TaskBoard tasks={tasksData} currentDate={currentDate} />
      </div>

    </div>
  )
}

export default Task