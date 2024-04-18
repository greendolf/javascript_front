// import { useState, useEffect } from "react";
//import Manager from "../../state/manager.js";

// import { useTasks } from "../../vm/redux/api.js";
import {
    useValuesDispatch,
    useTasksDispatch,
    useToken,
    useTasks,
} from "../../vm/toolkit/api.js";
import TaskHeader from "../task-header/component.js";
import Task from "../task/component.js";

function TaskTable(props) {
    //const [tasks, setTasks] = useState([]);

    //const manager = new Manager();
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

        // manager.updateState("value1", value1);
        // manager.updateState("value2", value2);
        // manager.query("create");
    };
    return (
        <>
            <button onClick={handleUpdate}>Обновить</button>
            <button onClick={handleAdd}>Добавить</button>
            <table className="container">
                <tbody>
                    <TaskHeader />
                    {list.map((task) => {
                        return <Task key={task.id} data={task} />;
                    })}
                </tbody>
            </table>
        </>
    );
}

export default TaskTable;
