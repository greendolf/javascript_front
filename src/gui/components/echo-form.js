import { useState, useEffect } from "react";
import { useWs } from "../../WebSocket.js";

function EchoForm() {
    const [ready, time, sendWs] = useWs("ws://localhost:80/api/echo");

    useEffect(() => {
        if (ready) {
            sendWs("hello otchislenie");
        }
    }, [ready]);

    return (
        <div>
            <label
                style={{
                    display: "block",
                    background: "white",
                    fontSize: 20,
                    width: 300,
                    margin: 20,
                }}
            >
                Текущее время: {time}
            </label>
        </div>
    );
}

export default EchoForm;
