import { useState, useEffect } from "react";
import { useWs } from "../../../WebSocket.js";

function EchoForm() {
    const [message, setMessage] = useState("сообщение");
    const [ready, val, sendWs] = useWs("ws://localhost:80/api/echo");

    useEffect(() => {
        if (ready) {
            sendWs("hello otchislenie");
        }
    }, [ready]);

    const handleMessage = (event) => {
        setMessage(event.target.value);
    };

    const handleSend = () => {
        if (ready) {
            sendWs(message);
        }
    };

    return (
        <div style={{ margin: 20 }}>
            <input
                type="text"
                placeholder="Сообщение"
                value={message}
                onChange={handleMessage}
                style={{ fontSize: 20, margin: 20 }}
            />
            <button onClick={handleSend} style={{ fontSize: 20, margin: 20 }}>
                Отправить/получить
            </button>
            <label
                style={{
                    display: "block",
                    background: "white",
                    fontSize: 20,
                    width: 500,
                    margin: 20,
                }}
            >
                Ответ: {val}
            </label>
        </div>
    );
}

export default EchoForm;
