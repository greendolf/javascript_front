import { useState, useRef, useEffect } from "react";

export const useWs = (url) => {
    const [isReady, setIsReady] = useState(false);
    const [time, setTime] = useState("");

    const ws = useRef(null);

    useEffect(() => {
        const socket = new WebSocket(url);

        socket.onopen = () => setIsReady(true);
        socket.onclose = () => setIsReady(false);
        socket.onmessage = (event) => setTime(event.data);

        ws.current = socket;

        return () => {
            socket.close();
        };
    }, []);

    return [isReady, time, ws.current?.send.bind(ws.current)];
};