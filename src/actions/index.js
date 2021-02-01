export const add_dentist = (dentist) => {
    return {
        type: "ADD_DENTIST",
        payload: dentist
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

export const add_appointment = (appointment) => {
    return {
        type: "ADD_APPOINTMENT",
        payload: appointment
    };
};