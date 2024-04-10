import PageSlider from '../../component/page-slider/component.js';
import TaskTable from '../../component/task-table/component.js';
import TaskStatus from '../../component/task-status/component.js';

function TaskPage(props) {
    return (
        <>
            <TaskTable />
            <PageSlider />
            <TaskStatus />
        </>
    );
}

export default TaskPage;