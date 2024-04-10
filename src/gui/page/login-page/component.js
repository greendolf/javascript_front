import LoginForm from "../../component/login-form/component.js";

import { useNavigate } from "react-router-dom";
import { useToken } from "../../vm/toolkit/api.js";

function LoginPage(props) {
    const navigate = useNavigate();
    const token = useToken();
    
    return <LoginForm />;
}

export default LoginPage;
