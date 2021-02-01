import { useSelector } from 'react-redux';

const AppointmentInMonth = (props) => {
    const format_time = time => (time < 10 ? `0${time}:00u` : `${time}:00u`);

    const currentPatient = useSelector(state => state.patients).filter((patient) => {
        return patient.id === props.patient;
    });

    return (
        <div className="appointment">
            <span className="time">{format_time(props.time)}</span> 
            <span className="patient">{currentPatient[0].firstName} {currentPatient[0].lastName}</span>
        </div>
    );
};

export default AppointmentInMonth;