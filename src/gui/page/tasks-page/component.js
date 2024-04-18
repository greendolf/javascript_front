import Logout from "../../component/logout/component.js";
import TaskTable from "../../component/task-table/component.js";
import TaskStatus from "../../component/task-status/component.js";
import EchoForm from "../../component/echo-form/component.js"

function TaskPage() {
    return (
        <>
            <Logout />
            <TaskTable />
            <TaskStatus />
            <EchoForm />
        </>
    );
}

export default TaskPage;
