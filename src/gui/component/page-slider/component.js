import { useNavigate } from "react-router-dom";
import {
    useLogin,
    useLoginDispatch,
    usePasswordDispatch,
} from "../../vm/toolkit/api.js";

function PageSlider() {
    const navigate = useNavigate();
    const login = useLogin();
    const loginDispatch = useLoginDispatch();
    const passwordDispatch = usePasswordDispatch();

    const handleClick = () => {
        loginDispatch("");
        passwordDispatch("");
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
