import { useSelector, useDispatch } from "react-redux";
// import { ACTIONS_CREATORS } from "../redux/impl/actions.js";
import {
    saveLogin,
    savePassword,
    getAuth,
    getRegister,
    saveToken,
} from "./impl/slice/auth.js";
import { getTasks } from "./impl/slice/tasks.js";
import { postTask, saveValues } from "./impl/slice/task.js";

export function useLogin() {
    return useSelector((state) => state.auth.login);
}

export function useLoginDispatch() {
    const dispatch = useDispatch();
    return (login) => dispatch(saveLogin(login));
}

export function usePassword() {
    return useSelector((state) => state.auth.password);
}

export function usePasswordDispatch() {
    const dispatch = useDispatch();
    return (password) => dispatch(savePassword(password));
}

export function useToken() {
    const token = useSelector((state) => state.auth.token);
    return token;
}

export function useTokenDispatch() {
    const dispatch = useDispatch();
    return (token) => dispatch(saveToken(token));
}

export function useAuth() {
    const dispatch = useDispatch();
    return (login, password) => dispatch(getAuth({ login, password }));
}

export function useRegister() {
    const dispatch = useDispatch();
    return (login, password) => dispatch(getRegister({ login, password }));
}

export function useTasks() {
    return useSelector((state) => state.tasks.list);
}

export function useTasksDispatch() {
    const dispatch = useDispatch();
    return (token) => dispatch(getTasks(token));
}

// export function useValuesDispatch() {
//     const dispatch = useDispatch();
//     return (values) => dispatch(saveValues(values));
// }

export function useValuesDispatch() {
    const dispatch = useDispatch();
    return (token, values) =>
        dispatch(postTask({ token: token, values: values }));
}
