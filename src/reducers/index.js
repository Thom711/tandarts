import { combineReducers } from 'redux';
import dentistReducer from './dentists';
import assistantReducer from './assistants';
import patientReducer from './patients';
import appointmentReducer from './appointments';

const allReducers = combineReducers({
    dentists: dentistReducer,
    assistants: assistantReducer,
    patients: patientReducer,
    appointments: appointmentReducer,
});

export default allReducers;