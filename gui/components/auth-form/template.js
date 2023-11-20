console.log("Log:Exporting template for auth-form");

export default function (vm) {
  return `
    <style>
    form {
        position: absolute;
        display: inline-flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        top: 50%;
        left: 50%;
        width: 300px;
        height: 200px;
        transform: translate(-50%, -50%);
        background: rgba(255, 255, 255, 0.3);
        border-left: 1px solid rgba(255, 255, 255, 0.3);
        border-top: 1px solid rgba(255, 255, 255, 0.3);
        border-radius: 10px;
    }
    input {
        position: relative;
        display: inline-block;
        margin-top: 20px;
        max-width: 200px;
    }
    </style>
    <form class="authForm">
    <input type="text" placeholder="login" value="${vm._login}" id="login">
    <input type="password" placeholder="password" value="${vm._password}" id="password">
    <div>
    <input type="button" value="login" id="loginBtn">
    <input type="button" value="register" id="registerBtn">
    </div>
    </form>
`;
}
