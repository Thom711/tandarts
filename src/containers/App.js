import '../style.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useEffect } from 'react/cjs/react.development';
import { useSelector, useDispatch } from 'react-redux';
import { add_appointment, set_id } from '../actions';
import Calendar from './Calendar'

const App = () => {
    const dispatch = useDispatch();
    const dentists = useSelector(state => state.dentists);
    const assistants = useSelector(state => state.assistants);
    const patients = useSelector(state => state.patients);
    const appointments = useSelector(state => state.appointments);
    let nextId = useSelector(state => state.incrementId);

    useEffect(() => { // initialize state with 150 unique appointments
        const days = [1,2,3,4,5,8,9,10,11,12,15,16,17,18,19,21,22,23,24,25];
        let uidList = appointments.map((appointment) => appointment.uid);

        for (let i = 1; i <= 150; i++) {
            const randomIdDentist = Math.floor(Math.random() * dentists.length);
            const randomDentist = dentists[randomIdDentist].id;

            const willTherebeAnAssistant = Math.floor(Math.random() * 10);
            let randomAssistant = 0;
            if(willTherebeAnAssistant >= 6) {
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
                nextId++;
                uidList.push(newAppointment.uid);
                dispatch(add_appointment(newAppointment));
            };
        };

        dispatch(set_id(nextId));
    }, []);

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
                            <Calendar />
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