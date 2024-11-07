import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Calendar, momentLocalizer, Views } from "react-big-calendar";

import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import calendarOperations from "../../redux/calendar/calendar-operations";
import {selectEvent} from "../../redux/calendar/calendar-select";

const localizer = momentLocalizer(moment);

export const MyCalendar = () => {
  //const [events, setEvents] = useState([]);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(calendarOperations.eventsList());
  }, [dispatch]);
  

  const events = useSelector(selectEvent).map((event) => ({
    ...event,
    start: new Date(event.start), // Перетворення рядка назад в Date
    end: new Date(event.end),
  }))


  // Функция для добавления нового события
  const handleSelectSlot = ({ start, end }) => {
    const title = window.prompt("Enter event name:");
    if (title) {
      const newEvent = {
        start,
        end,
        title,
      };
      //setEvents([...events, newEvent]);
      dispatch(calendarOperations.eventsAdd(newEvent));
    }
    
  };

  // Функция для удаления события
  const handleSelectEvent = (event) => {
    console.log(event._id)
    const confirmDelete = window.confirm(
      `Do you want to delete an event? "${event.title}"?`
    );
    console.log(event._id)
    if (confirmDelete) {
      dispatch(calendarOperations.eventsDel(event._id))
      //setEvents(events.filter((e) => e.id !== event.id)); // Удаление события по ID
    }
  };
  console.log(events);
  return (
    <div>
      <h1>My Calendar</h1>
      <Calendar
        localizer={localizer}
        events={events}
        selectable
        views={["month", "week", "day"]} // Включаем раскладки "Week" и "Day"
        defaultView={Views.WEEK} // Устанавливаем вид по умолчанию
        onSelectSlot={handleSelectSlot} // Обработчик выбора слота для добавления
        onSelectEvent={handleSelectEvent} // Обработчик для удаления события
        step={30} // Шаг временного интервала (30 минут)
        timeslots={2} // Количество слотов в одном интервале
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );
};
