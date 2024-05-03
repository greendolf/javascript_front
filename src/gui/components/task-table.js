import {
    useValuesDispatch,
    useTasksDispatch,
    useToken,
    useTasks,
} from "../vm/toolkit/api.js";
import Task from "./task.js";

function TaskTable(props) {
    const token = useToken();
    const list = useTasks();
    const update = useTasksDispatch();
    const valuesDispatch = useValuesDispatch();
    const handleUpdate = () => {
        update(token);
    };
    const handleAdd = () => {
        let values = [];
        let value = "";
        for (let i = 0; i < 11; i++) {
            // while (
            //     isNaN((value = Number(prompt(`Введите значение ${i + 1}`))))
            // ) {}
            // values.push(value);
            values.push(i);
        }
        valuesDispatch(token, values);
    };

    // const header = [
    //     "ID",
    //     "status",
    //     "nx",
    //     "ny",
    //     "time_end",
    //     "length",
    //     "width",
    //     "lambda",
    //     "ro",
    //     "c",
    //     "t_start",
    //     "t_left",
    //     "t_right",
    // ];
    const header = [
        "Id",
        "Status",
        "Parameters",
        "Actions"
    ]

    const ths = header.map((elem) => {
        return (
            <th
                key={elem}
                style={{
                    border: "1px solid grey",
                }}
            >
                {elem}
            </th>
        );
    });

    return (
        <>
            <button onClick={handleUpdate}>Обновить</button>
            <button onClick={handleAdd}>Добавить</button>
            <table className="container">
                <tbody>
                    <tr>{ths}</tr>
                    {list.map((task) => {
                        return <Task key={task.id} data={task} />;
                    })}
                </tbody>
            </table>
        </>
    );
}

export default TaskTable;
