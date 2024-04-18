import { useNavigate } from "react-router-dom";
import {
    useLogin,
    useLoginDispatch,
    usePasswordDispatch,
    useToken,
    useTokenDispatch,
} from "../../vm/toolkit/api.js";

function PageSlider() {
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
        <>
            <span className="user">{login}</span>
            <button onClick={handleClick}>Выйти</button>
        </>
    );
}

export default PageSlider;
