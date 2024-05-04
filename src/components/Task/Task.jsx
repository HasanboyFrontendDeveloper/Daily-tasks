import { useSelector } from 'react-redux';
import { TaskBoard } from '../';
import { useEffect, useState } from 'react';
import { formatDate } from '../../helpers';


const Task = () => {
  const { tasks } = useSelector(state => state.tasks)

  const [tasksData, setTasksData] = useState([])


  const today = new Date();
  const currentDate = formatDate(today)

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