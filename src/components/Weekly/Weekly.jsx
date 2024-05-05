import './Weekly.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { TaskBoard } from '..';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { formatDate } from '../../helpers';

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export const Weekly = () => {
  const [days, setDays] = useState([])
  const [tasksOfDay, setTasksOfDay] = useState([])
  const [currentDate, setCurrentDate] = useState('')

  const getDayOfWeek = (day) => {
    const date = new Date(day)
    const dayOfWeek = date.getDay();
    const dayName = daysOfWeek[dayOfWeek]

    return dayName
  }

  const { tasks } = useSelector(state => state.tasks)



  const handleTasksOfDay = () => {
    const filterData = tasks.filter(task => task.date === currentDate);
    setTasksOfDay(filterData)
  }

  useEffect(() => {
    handleTasksOfDay()
  }, [tasks, currentDate])

  const getNextDaysOfWeek = () => {
    const today = new Date();
    const currentDayOfWeek = today.getDay();
    const nextDays = [];

    for (let i = 0; i < 31; i++) {
      const nextDayIndex = (currentDayOfWeek + i) % 7;
      const nextDate = new Date(today);
      nextDate.setDate(today.getDate() + i);

      const formattedDate = formatDate(nextDate)
      nextDays.push({ weekName: daysOfWeek[nextDayIndex], date: formattedDate });
    }
    setDays(nextDays)
  };


  useEffect(() => {
    const date = new Date();
    const today = formatDate(date)

    setCurrentDate(today)
    getNextDaysOfWeek()
  }, [])


  return (
    <>
      <div className=" w-[100%]  ">

        <div className="w-[100%]  text-white items-center justify-center flex">
          <Swiper
            slidesPerView={7}
            spaceBetween={0}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            {days.map((item) => (
              <SwiperSlide className={`${item.date === currentDate && 'bg-blue-700 text-white'} border-r-2 border-b border-l  border-sky-700 pt-5 hover:bg-blue-700 hover:text-white hover:border-white`}
                onClick={() => setCurrentDate(item.date)}
              >
                <p className=''>{item.weekName}</p>
                <p>{item.date}</p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {tasksOfDay && <TaskBoard tasks={tasksOfDay} currentDate={currentDate} />}
      </div>
    </>
  )
}
export default Weekly;
