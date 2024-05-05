import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { TaskBoard } from '..';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { formatMonth } from '../../helpers';

const monthsOfYear = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
]

const Monthly = () => {
    const [months, setMonths] = useState([])
    const [currentDate, setCurrentDate] = useState('')
    const [tasksOfDay, setTasksOfDay] = useState([])

    const { tasks } = useSelector(state => state.tasks)

    const getMonthsOfYear = () => {
        const today = new Date();
        const currentYear = today.getFullYear();
        const allMonths = [];
    
        for (let i = 0; i < monthsOfYear.length; i++) {
    
          allMonths.push({ monthName: monthsOfYear[i], date: `${currentYear}-${i >= 9 ? i+1 : `0${i+1}`}` });
        }
        setMonths(allMonths)
      };
    
      const handleTasksOfDay = () => {
        const filterData = tasks.filter(task => task.date.includes(currentDate));
        setTasksOfDay(filterData)
      }
    
      useEffect(() => {
        getMonthsOfYear()
      }, [tasks])


    useEffect(() => {
        handleTasksOfDay()
    }, [tasks, currentDate])


    useEffect(() => {
        const date = new Date();
        const today = formatMonth(date)

        setCurrentDate(today)
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
                        {months.map(month => (

                            <SwiperSlide className={`${month.date === currentDate && 'bg-blue-700 text-white'} border-r-2 border-b border-l  border-sky-700 pt-5 hover:bg-blue-700 hover:text-white hover:border-white`}
                                onClick={() => setCurrentDate(month.date)}
                            >
                                <p>{month.monthName}</p>
                                <p>{month.date}</p>
                            </SwiperSlide>

                        ))}

                    </Swiper>
                </div>

                {tasksOfDay && <TaskBoard tasks={tasksOfDay} currentDate={currentDate} />}

            </div>
        </>
    )
}

export default Monthly