const assistantReducer = (state = [], action) => {
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