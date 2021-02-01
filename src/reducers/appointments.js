const appointmentReducer = (state = [], action) => {
    switch(action.type) {
        case "ADD_APPOINTMENT" :
            return  [...state, action.payload];
        case "REMOVE_APPOINTMENT" :
            const newState = state.filter((appointment) => {
                return appointment.id !== action.payload;
            });

            return newState;
        default :
            return state;
    };
};

export default appointmentReducer;