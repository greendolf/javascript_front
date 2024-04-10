import { useSelector, useDispatch } from "react-redux";
import { ACTIONS_CREATORS } from "../redux/impl/actions.js";

export function useLogin() {
    return useSelector((state) => state.login);
}

export function usePassword() {
    return useSelector((state) => state.password);
}

export function useLoginDispatch() {
    const dispatch = useDispatch();
    return (login) => {
        let action = ACTIONS_CREATORS.UPDATE("login", login);
        dispatch(action);
    };
}

export function usePasswordDispatch() {
    const dispatch = useDispatch();
    return (password) => {
        let action = ACTIONS_CREATORS.UPDATE("password", password);
        dispatch(action);
    };
}

export async function getToken(login, password) {
    //return useSelector((state) => state.token);
    const token = await (
        await import("../../transport/transport.js")
    ).login({ login, password});
    return token;
}

export function useTokenDispatch() {
    const dispatch = useDispatch();
    return (token) => {
        let action = ACTIONS_CREATORS.UPDATE("token", token);
        dispatch(action);
    };
}

export async function useTasks() {
    
}
