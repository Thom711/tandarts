//import React from "react";
import AppointmentInMonth from "./AppointmentInMonth";

const DayInMonth = (props) => {
    const appointments = props.appointments;

    const appointmentsJSX = appointments.sort((a, b) => {
        return a.time - b.time;
    }).map(({ time, patient }, index) => (  
        <AppointmentInMonth time={time} patient={patient} key={index} />
    ));

    return (
        <div className="day">
            {appointmentsJSX}
        </div>
    );
};

export default DayInMonth;