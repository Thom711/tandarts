const dentistReducer = (state = [], action) => {    
    switch(action.type) {
        case "ADD_DENTIST" :
            return  [...state, action.payload];
        case "REMOVE_DENTIST" :
            const newState = state.filter((dentist) => {
                return dentist.id !== action.payload;
            });

            return newState;
        case "MAKE_DENTIST_SICK" :
            // find dentist with given id. change dentist state to isSick
            return state;
        default :
            return state;
    };
};

export default dentistReducer;