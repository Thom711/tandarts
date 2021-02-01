const dentists = [
    {
        id: 1,
        firstName: 'Aad',
        lastName: 'Groen',
        phoneNumber: '06-12345678',
        email: 'aad.groen@tandartspraktijkbvt.nl',
        isSick: false,
        skills: []
    },
    {
        id: 2,
        firstName: 'Teun',
        lastName: 'de Wit',
        phoneNumber: '06-2345678',
        email: 'teun.dewit@tandartspraktijkbvt.nl',
        isSick: false,
        skills: []
    },
    {
        id: 3,
        firstName: 'Mirthe',
        lastName: 'Meijer',
        phoneNumber: '06-98765432',
        email: 'mirthe.meijer@tandartspraktijkbvt.nl',
        isSick: false,
        skills: []
    },
    {
        id: 4,
        firstName: 'Lisa',
        lastName: 'Kok',
        phoneNumber: '06-87654321',
        email: 'lisa.kok@tandartspraktijkbvt.nl',
        isSick: false,
        skills: []
    }
];

const dentistReducer = (state = dentists, action) => {    
    switch(action.type) {
        case "ADD_DENTIST" :
            return  [...state, action.payload];
        case "REMOVE_DENTIST" :
            const newState = state.filter((dentist) => {
                return dentist.id !== action.payload;
            });

            return newState;
        case "MAKE_DENTIST_SICK" :

            const sickState = state.filter((dentist) => {
                if (dentist.id === action.payload) {
                    dentist.isSick = !dentist.isSick;
                }
                return dentist;
            });

            return sickState;
        default :
            return state;
    };
};

export default dentistReducer;