import Header from "../components/header.js";
import Logout from "../components/logout.js";
import TaskTable from "../components/task-table.js";
import TaskStatus from "../components/status-field.js";
import EchoForm from "../components/echo-form.js";

function TaskPage() {
    return (
        <>
            <Header>
                <TaskStatus />
                <EchoForm />
                <Logout></Logout>
            </Header>
            <TaskTable />
        </>
    );
}

export default TaskPage;
