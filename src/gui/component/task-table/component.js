// import { useState, useEffect } from "react";
//import Manager from "../../state/manager.js";

// import { useTasks } from "../../vm/redux/api.js";
import { useValuesDispatch, useTasksDispatch, useToken, useTasks } from "../../vm/toolkit/api.js";
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
        update(token)
    };
    const handleAdd = () => {
        let value1 = "";
        let value2 = "";
        while (isNaN((value1 = Number(prompt("Введите значение 1"))))) {}
        while (isNaN((value2 = Number(prompt("Введите значение 2"))))) {}

        valuesDispatch(token, (value1, value2));

        // manager.updateState("value1", value1);
        // manager.updateState("value2", value2);
        // manager.query("create");
    };

    const checkState = (stateName, state) => {
        switch (stateName) {
            case "tasks":
                const tasksList = state.list.map((task) => {
                    return (
                        <Task
                            key={task.id}
                            ID={task.id}
                            value1={task.value1}
                            value2={task.value2}
                            result={task.result}
                            status={task.status}
                        />
                    );
                });
                //setTasks(tasks.concat(tasksList));
                break;
        }
    };

    return (
        <>
            <button onClick={handleUpdate}>Обновить</button>
            <button onClick={handleAdd}>Добавить</button>
            <table className="container">
                <tbody>
                    <TaskHeader />
                    {/* {tasks} */}
                </tbody>
            </table>
        </>
    );
}

export default TaskTable;
