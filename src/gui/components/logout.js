import { useNavigate } from "react-router-dom";
import {
    useLogin,
    useLoginDispatch,
    usePasswordDispatch,
    useToken,
    useTokenDispatch,
} from "../vm/toolkit/api.js";

function Logout() {
    const navigate = useNavigate();
    const login = useLogin();
    const loginDispatch = useLoginDispatch();
    const passwordDispatch = usePasswordDispatch();
    const tokenDispatch = useTokenDispatch();

    const handleClick = () => {
        loginDispatch("");
        passwordDispatch("");
        tokenDispatch("");
        navigate("/");
    };

    return (
        <div>
            <span className="user">{login}</span>
            <button onClick={handleClick}>Выйти</button>
        </div>
    );
}

export default Logout;
