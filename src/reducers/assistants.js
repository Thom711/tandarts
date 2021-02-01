const assistants = [
    {
        id: 1,
        firstName: 'Harm',
        lastName: 'van der Pol',
        phoneNumber: '06-89674523',
        email: 'harm.vanderpol@tandartspraktijkbvt.nl',
        isSick: false,
    },
    {
        id: 2,
        firstName: 'Arjan',
        lastName: 'van Vlieg',
        phoneNumber: '06-21436587',
        email: 'arjan.vanvlieg@tandartspraktijkbvt.nl',
        isSick: false,
    }
];

const assistantReducer = (state = assistants, action) => {
    switch(action.type) {
        case "ADD_ASSISTANT" :
            return  [...state, action.payload];
        case "REMOVE_ASSISTANT" :
            const newState = state.filter((assistant) => {
                return assistant.id !== action.payload;
            });

            return newState;
        case "MAKE_ASSISTANT_SICK" :
            // find dentist with given id. change dentist state to isSick
            return state;
        default :
            return state;
    };
};

export default assistantReducer;