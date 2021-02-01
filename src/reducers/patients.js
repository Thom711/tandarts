const patientReducer = (state = [], action) => {
    switch (action.type) {
        case "ADD_PATIENT":
            return [...state, action.payload];
        case "REMOVE_PATIENT":
            const newState = state.filter((patient) => {
                return patient.id !== action.payload;
            });

            return newState;
        case "MAKE_PATIENT_SICK":
            // find dentist with given id. change dentist state to isSick
            return state;
        default:
            return state;
    };
};

export default patientReducer;