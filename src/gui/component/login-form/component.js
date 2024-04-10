import { useNavigate } from "react-router-dom";
import {
    useLogin,
    useLoginDispatch,
    usePassword,
    usePasswordDispatch,
    useAuth,
    useRegister,
    useToken,
} from "../../vm/toolkit/api.js";
import { useEffect } from "react";

function LoginForm(props) {
    const login = useLogin();
    const password = usePassword();
    const token = useToken();

    const loginDispatch = useLoginDispatch();
    const passwordDispatch = usePasswordDispatch();
    const auth = useAuth();
    const register = useRegister();

    const navigate = useNavigate();

    useEffect(() => {
        if (token) navigate("/tasks");
        else {
            console.log("bad status");
            alert(token);
        }
    }, [token, navigate]);

    const handleLogin = (event) => {
        loginDispatch(event.target.value);
    };
    const handlePassword = (event) => {
        passwordDispatch(event.target.value);
    };

    const queryLogin = () => {
        if (!login) {
            alert("Введите логин!");
            return;
        }
        if (!password) {
            alert("Введите пароль!");
            return;
        }
        auth(login, password);
    };
    const queryRegister = () => {
        if (!login) {
            alert("Введите логин!");
            return;
        }
        if (!password) {
            alert("Введите пароль!");
            return;
        }
        register(login, password);
    };

    return (
        <div className="authForm">
            <input
                type="text"
                placeholder="Имя пользователя"
                value={login}
                onChange={handleLogin}
            />
            <input
                type="password"
                placeholder="Пароль"
                value={password}
                onChange={handlePassword}
            />
            <button onClick={queryLogin}>Войти</button>
            <button onClick={queryRegister}>Зарегистрироваться</button>
        </div>
    );
}

export default LoginForm;
