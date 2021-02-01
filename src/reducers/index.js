import { combineReducers } from 'redux';
import dentistReducer from './dentists';
import assistantReducer from './assistants';
import patientReducer from './patients';
import appointmentReducer from './appointments';
import incrementIdReducer from './incrementId';

const allReducers = combineReducers({
    dentists: dentistReducer,
    assistants: assistantReducer,
    patients: patientReducer,
    appointments: appointmentReducer,
    incrementId: incrementIdReducer,
});

export default allReducers;