import { useSelector, useDispatch } from 'react-redux';
import { add_dentist, make_dentist_sick, add_patient, set_id, add_appointment, 
    remove_appointment, make_patient_sick } from '../actions';

const Home = () => {
    const dispatch = useDispatch();
    const nextId = useSelector(state => state.incrementId);
    const dentists = useSelector(state => state.dentists);
    const assistants = useSelector(state => state.assistants);
    const patients = useSelector(state => state.patients);
    const appointments = useSelector(state => state.appointments);

    const addDentist = () => {
        const newDentist = {
            id: nextId,
            firstName: 'Jan',
            lastName: 'de Waal',
            phoneNumber: '06-12893467',
            email: 'jan.dewaal@tandartspraktijkbvt.nl',
            isSick: false,
            skills: []
        };

        dispatch(add_dentist(newDentist));

        dispatch(set_id(nextId + 1));
    };

    const addPatient = () => {
        const newPatient = {
            id: nextId,
            firstName: 'Piet',
            lastName: 'Auw',
            phoneNumber: '06-12349876',
            email: 'piet.auw@wincacademy.nl',
            isSick: false
        };

        dispatch(add_patient(newPatient));

        dispatch(set_id(nextId + 1));
    };

    const makeDentistSick = (event) => {
        event.preventDefault();

        dispatch(make_dentist_sick(parseInt(event.target[0].value)));
    };

    const addAppointment = (willTherebeAnAssistant) => {
        const days = [1,2,3,4,5,8,9,10,11,12,15,16,17,18,19,21,22,23,24,25];
        let uidList = appointments.map((appointment) => appointment.uid);

        const randomIdDentist = Math.floor(Math.random() * dentists.length);
        const randomDentist = dentists[randomIdDentist].id;

        let randomAssistant = 0;
        if(willTherebeAnAssistant) {
            const randomIdAssistant = Math.floor(Math.random() * assistants.length);
            randomAssistant = assistants[randomIdAssistant].id;
        };

        const randomIdPatient = Math.floor(Math.random() * patients.length);
        const randomPatient = patients[randomIdPatient].id;
        
        const randomTime = Math.floor(Math.random() * (19 - 7) + 7);
        const randomDay = days[Math.floor(Math.random() * days.length)];

        const newAppointment = {
            id: nextId,
            day: randomDay,
            time: randomTime,
            patient: randomPatient,
            assistant: randomAssistant,
            dentist: randomDentist,
            uid: [randomDay, randomTime, randomPatient, randomAssistant, randomDentist].join('')
        };

        if(!uidList.includes(newAppointment.uid)) {
            uidList.push(newAppointment.uid);
            dispatch(add_appointment(newAppointment));
            dispatch(set_id(nextId + 1));
        };
    };

    const removeAppointment = (event) => {
        event.preventDefault();

        dispatch(remove_appointment(parseInt(event.target[0].value)));
    };

    const makePatientSick = (event) => {
        event.preventDefault();

        dispatch(make_patient_sick(parseInt(event.target[0].value)));

        appointments.filter((appointment) => {
            return appointment.patient === parseInt(event.target[0].value);
        }).forEach((appointment) => {
            dispatch(remove_appointment(appointment.id));
        });
    };

    const moveAppointment = (event) => {
        event.preventDefault();

        const days = [1,2,3,4,5,8,9,10,11,12,15,16,17,18,19,21,22,23,24,25];
        let uidList = appointments.map((appointment) => appointment.uid);

        const findAppointment = appointments.filter((appointment) => {
            return appointment.id === parseInt(event.target[0].value);
        })[0];

        const randomTime = Math.floor(Math.random() * (19 - 7) + 7);
        const randomDay = days[Math.floor(Math.random() * days.length)];

        const newAppointment = {
            id: nextId,
            day: randomDay,
            time: randomTime,
            patient: findAppointment.patient,
            assistant: findAppointment.assistant,
            dentist: findAppointment.dentist,
            uid: [randomDay, randomTime, findAppointment.patient, findAppointment.assistant, findAppointment.dentist].join('')
        };

        if(!uidList.includes(newAppointment.uid)) {
            uidList.push(newAppointment.uid);
            dispatch(add_appointment(newAppointment));
            dispatch(remove_appointment(findAppointment.id));
            dispatch(set_id(nextId + 1));
        };
    };

    return (
        <div>
            Welkom bij Tandartspraktijk B.V.T.! 
            
            <br/> <br/>

            <button onClick={addDentist}>Voeg Tandarts Toe</button> 
            
            <br/> <br/>

            <button onClick={addPatient}>Voet Patient Toe</button>

            <br/> <br/>

            <form onSubmit={makeDentistSick}>
                ID van tandarts: <input type="number" name="dentist_id" /> <button>Maak tandarts ziek</button>
            </form>
            
            <br/> <br/>

            <button onClick={() => addAppointment(false)}>Voeg Afspraak Toe Zonder Assistent</button>

            <br/>

            <button onClick={() => addAppointment(true)}>Voeg Afspraak Toe Met Assistent</button>

            <br/> <br/>

            <form onSubmit={removeAppointment}>
                ID van afspraak: <input type="number" name="appointment_id" /> <button>Verwijder Afspraak</button>
            </form>

            <br/> <br/>

            <form onSubmit={makePatientSick}>
                ID van patient: <input type="number" name="patient_id" /> <button>Maak Patient Ziek En Verwijder De Betrokken Afspraken</button>
            </form>

            <br/> <br/>

            <form onSubmit={moveAppointment}>
                ID van afspraak: <input type="number" name="appointment_id2" /> <button>Verplaats Afspraak</button>
            </form>
        </div>
    )
};

export default Home;