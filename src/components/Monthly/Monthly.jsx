import { Swiper, SwiperSlide } from 'swiper/react';
import { Menu, MenuHandler, MenuList, } from "@material-tailwind/react";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { TaskBoard } from '..';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { formatDate } from '../../helpers';


const Monthly = () => {
    const [days, setDays] = useState([])
    const [currentDate, setCurrentDate] = useState('')
    const [tasksOfDay, setTasksOfDay] = useState([])

    const { tasks } = useSelector(state => state.tasks)


    const handleDays = () => {
        const daysData = []
        tasks.map(task => {
          
          if (!daysData.includes(task.date)) {
            daysData.push(task.date)
          }
        })
        const sortData = daysData.sort()
        setDays(sortData)
    };

    const handleTasksOfDay = () => {
        const filterData = tasks.filter(task => task.date === currentDate);
        setTasksOfDay(filterData)
    }


    useEffect(() => {
        handleDays()
    }, [tasks])


    useEffect(() => {
        handleTasksOfDay()
    }, [tasks, currentDate])


    useEffect(() => {
        const date = new Date();
        const today = formatDate(date)

        setCurrentDate(today)
    }, [])

    console.log(currentDate);

    return (
        <>
            {/* <div className="flex"> */}
            <div className=" w-[100%]  ">

                <div className="w-[100%]  text-white items-center justify-center flex">
                    <Swiper
                        slidesPerView={7}
                        spaceBetween={0}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                    >
                        {days.map(day => (

                            <SwiperSlide className={`${day === currentDate && 'bg-blue-700 text-white'} border-r-2 border-b border-l  border-sky-700 pt-5 hover:bg-blue-700 hover:text-white hover:border-white`}
                                onClick={() => setCurrentDate(day)}
                            >
                                <p>{day}</p>
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