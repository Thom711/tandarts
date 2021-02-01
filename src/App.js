import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useEffect } from 'react/cjs/react.development';
import { useSelector, useDispatch } from 'react-redux';
import { add_dentist, add_assistant, add_patient, add_appointment } from './actions';
import peopleData from './data/peopleData';


const App = () => {
    const dispatch = useDispatch();

    const dentists = useSelector(state => state.dentists);
    const assistants = useSelector(state => state.assistants);
    const patients = useSelector(state => state.patients);
    const appointments = useSelector(state => state.appointments);

    const days = [1,2,3,4,5,8,9,10,11,12,15,16,17,18,19,21,22,23,24,25];

    useEffect(() => {
        // initialize state
        loadDentists(peopleData('dentists'));
        loadAssistants(peopleData('assistants'));
        loadPatients(peopleData('patients'));
        generateAppointments(150);
    }, []);

    const loadDentists = (dentists) => {
        dentists.map((dentist) => {
            return { ...dentist, isSick: false, skills: []}
        }).forEach((dentist) => dispatch(add_dentist(dentist)))
    };

    const loadAssistants = (assistants) => {
        assistants.map((assistant) => {
            return {...assistant, isSick: false}
        }).forEach((assistant) => dispatch(add_assistant(assistant)));
    };

    const loadPatients = (patients) => {
        patients.map((patient) => {
            return {...patient, isSick: false}
        }).forEach((patient) => dispatch(add_patient(patient)));
    };

    const generateAppointments = (howManyAppointments) => {
        for (let i = 1; i <= howManyAppointments; i++) {
            generateAppointment(i);
        };
    };

    const generateAppointment = (i) => {
        const randomIdDentist = Math.floor(Math.random() * dentists.length);
        const randomDentist = dentists[randomIdDentist].id;

        const willTherebeAnAssistant = Math.floor(Math.random() * 10);
        let randomAssistant = 0;
        if(willTherebeAnAssistant >= 7) {
            const randomIdAssistant = Math.floor(Math.random() * assistants.length);
            randomAssistant = assistants[randomIdAssistant].id;
        };

        const randomIdPatient = Math.floor(Math.random() * patients.length);
        const randomPatient = patients[randomIdPatient].id;

        const randomTime = Math.floor(Math.random() * (19 - 7) + 7);
        const randomDay = days[Math.floor(Math.random() * days.length)];

        const newAppointment = {
            id: i,
            day: randomDay,
            time: randomTime,
            patient: randomPatient,
            assistant: randomAssistant,
            dentist: randomDentist
        };

        // returnt true or false of min. 1 item in de array aan de criteria voldoet
        const doesAppointmentAlreadyExist = appointments.some((appointment) => {
            return (appointment.day = newAppointment.day) && (appointment.time = newAppointment.time)
        });
            // && (
            //     (item.patient = appointment.patient) ||
            //     (item.assistant = appointment.assistant) ||
            //     (item.dentist = appointment.dentist)
            // )
        if(!doesAppointmentAlreadyExist) {
            console.log(i, appointments);
            dispatch(add_appointment(newAppointment));
        }

        //console.log(validAppointment);
    };

    return(
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/calendar">Calendar view</Link>
                        </li>
                        <li>
                            <Link to="/day">Day view</Link>
                        </li>
                    </ul>
                </nav>
                <main>
                    <Switch>
                        <Route path="/calendar">
                            {/* <Calendar appointments={this.state.appointments} /> */}
                        </Route>
                        <Route path="/day">
                            {/* <Day appointments={this.state.appointments.filter(app => app.day === 1)} /> */}
                        </Route>
                        <Route path="/">
                            {/* <Home /> */}
                        </Route>
                    </Switch>
                </main>
            </div>
        </Router>
    );
};

export default App;