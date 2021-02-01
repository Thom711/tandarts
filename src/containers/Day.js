import "./Day.css";
import AppointmentInDay from "../components/AppointmentInDay";

const Day = (props) => {
    const appointments = props.appointments;

    const appointmentsJSX = appointments.sort((a, b) => {
        return a.time - b.time
    }).map(
        ({ time, patient, dentist, assistant }, index) => (
            <AppointmentInDay
                time={time}
                patient={patient}
                dentist={dentist}
                assistant={assistant}
                key={index}
            />
        )
    );

    return (
        <ul className="dayview">
            {appointmentsJSX}
        </ul>
    )
};

export default Day;