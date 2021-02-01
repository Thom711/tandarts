import "./Calendar.css";
import { useSelector } from 'react-redux';
import DayInMonth from "../components/DayInMonth";

const divideByDay = (appointments) => {
    const appointmentsByDay = {};

    appointments.forEach((appointment) => {
        const day = appointment.day;

        if (!appointmentsByDay.hasOwnProperty(day)) {
            appointmentsByDay[day] = [];
        };

        appointmentsByDay[day].push(appointment);
    });

    return appointmentsByDay;
};

const Calendar = () => {
    const appointments = useSelector(state => state.appointments);

    const appointmentsByDay = divideByDay(appointments);

    const daysInMonthJSX = Object.values(
        appointmentsByDay
    ).map((appointmentsInDay, index) => (
        <DayInMonth appointments={appointmentsInDay} key={index} />
    ));

    return (
        <div className="calendarview">
            <div className="header">
                <div>Maandag</div>
                <div>Dinsdag</div>
                <div>Woensdag</div>
                <div>Donderdag</div>
                <div>Vrijdag</div>
            </div>
                <div className="table">{daysInMonthJSX}</div>
        </div>
    );
};

export default Calendar;