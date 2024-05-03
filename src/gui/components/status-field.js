import { useTasks } from "../vm/toolkit/api";

function TaskStatus(props) {
    const list = useTasks();

    const status = {
        count: list.length,
        waiting: list.filter((task) => task.status === "not started").length,
        processing: list.filter((task) => task.status === "in process").length,
        processed: list.filter((task) => task.status === "processed").length,
    };

    const spansObj = {
        "Количество задач": status.count,
        "В ожидании": status.waiting,
        Выполняются: status.processing,
        Выполнены: status.processed,
    };

    const ps = Object.entries(spansObj).map((pair) => {
        return (
            <p key={pair[0]}>
                {pair[0]}: {pair[1]}
            </p>
        );
    });

    return (
        <fieldset className="status"
            style={{
                display: "grid",
                width: 200
            }}
        >
            {ps}
        </fieldset>
    );
}

export default TaskStatus;
