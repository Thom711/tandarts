export const add_dentist = (dentist) => {
    return {
        type: "ADD_DENTIST",
        payload: dentist
    };
};

export const make_dentist_sick = (id) => {
    return {
        type: "MAKE_DENTIST_SICK",
        payload: id
    };
};

export const add_assistant = (assistant) => {
    return {
        type: "ADD_ASSISTANT",
        payload: assistant
    };
};

export const add_patient = (patient) => {
    return {
        type: "ADD_PATIENT",
        payload: patient
    };
};

export const make_patient_sick = (id) => {
    return {
        type: "MAKE_PATIENT_SICK",
        payload: id
    };
};

export const add_appointment = (appointment) => {
    return {
        type: "ADD_APPOINTMENT",
        payload: appointment
    };
};

export const remove_appointment = (id) => {
    return {
        type: "REMOVE_APPOINTMENT",
        payload: id
    }
}

export const set_id = (value) => {
    return {
        type: "SET_ID",
        payload: value
    };
};