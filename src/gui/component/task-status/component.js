import { useTasks } from "../../vm/toolkit/api";

function TaskStatus(props) {
    const list = useTasks();

    const status = {
        count: list.length,
        waiting: list.filter((task) => task.status == "not started").length,
        processing: list.filter((task) => task.status == "in process").length,
        processed: list.filter((task) => task.status == "processed").length,
    };

    const spansObj = {
        "Количество задач": status.count,
        "В ожидании": status.waiting,
        Выполняются: status.processing,
        Выполнены: status.processed,
    };

    const spans = Object.entries(spansObj).map((pair) => {
        return (
            <span key={pair[0]}>
                {pair[0]}: {pair[1]}
            </span>
        );
    });

    return (
        <fieldset
            style={{
                display: "grid",
                width: 200
            }}
        >
            {spans}
        </fieldset>
    );
}

export default TaskStatus;
