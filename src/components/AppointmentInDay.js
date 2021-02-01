import { useSelector } from 'react-redux';

const AppointmentInDay = (props) => {
    const format_time = time => (time < 10 ? `0${time}:00u` : `${time}:00u`);
    let isThereAnAssistant = false;

    const currentPatient = useSelector(state => state.patients).filter((patient) => {
        return patient.id === props.patient;
    });

    const currentDentist = useSelector(state => state.dentists).filter((dentist) => {
        return dentist.id === props.dentist;
    });

    const currentAssistant = useSelector(state => state.assistants).filter((assistant) => {
        return assistant.id === props.assistant;
    });

    if (currentAssistant.length > 0) { isThereAnAssistant = true };

    return (
        <li className={currentDentist[0].isSick ? "appointment-sick" : "appointment"}>
            <div className="time">{format_time(props.time)}</div>
            <div className="patient">Patient: {currentPatient[0].firstName} {currentPatient[0].lastName}</div>
            <div className="dentist">Tandarts: {currentDentist[0].firstName} {currentDentist[0].lastName}</div>
            {isThereAnAssistant ? 
                <div className="assistant">Assistent: {currentAssistant[0].firstName} {currentAssistant[0].lastName}</div> : 
                ''}
        </li>
    );
};

export default AppointmentInDay;