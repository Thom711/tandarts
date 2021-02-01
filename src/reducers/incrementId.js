const incrementIdReducer = (state = 1, action) => {
    switch(action.type) {
        case "SET_ID":
            return state = action.payload;
        default :
            return state;    
    };
};

export default incrementIdReducer;