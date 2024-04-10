const action = () => {
    return { type: "", payload: {} };
};

export const ACTIONS_TYPES = {
    UPDATE: "update",
};

export const ACTIONS_CREATORS = {
    UPDATE: (field, value) => {
        let a = action();
        a.type = ACTIONS_TYPES.UPDATE;
        a.payload[field] = value;
        return a;
    },
};
