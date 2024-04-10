import { ACTIONS_TYPES } from "./actions.js";

const reducer = (
    state = {
        login: "",
        password: "",
        token: "",
        tasks: [],
    },
    action
) => {
    switch (action.type) {
        case ACTIONS_TYPES.UPDATE:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
};

export default reducer;
