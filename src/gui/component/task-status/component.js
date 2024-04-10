import { useState, useEffect } from 'react';
import Manager from '../../state/manager.js';

function TaskStatus(props) {
    const [status, setStatus] = useState({});

    const manager = new Manager();

    const checkState = (stateName, state) => {
        const statusTemp = {
            count: state.list.length,
            waiting: 0,
            processing: 0,
            processed: 0
        };

        switch (stateName) {
            case 'tasks':
                state.list.forEach(task => {
                    const stat = task.status.toLowerCase();
                    statusTemp[stat]++;
                });
                setStatus(statusTemp);
                break;
        }
    };

    // useEffect(() => {
    //     const subscribe = async () => {
    //         manager.subscribe('tasks', checkState, true);        
    //     };
    //     subscribe();
    //     return unsubscribe;
    // }, []);

    const spansObj = {
        'Количество задач': status.count,
        'В ожидании': status.waiting,
        'Выполняются': status.processing,
        'Выполнены': status.processed
    };
    const spans = Object.entries(spansObj).map(pair => {
        return (
            <span key={pair[0]}>
                {pair[0]}: {pair[1]}
            </span>
        );
    });

    return (
        <fieldset style={{
            display: 'grid'
        }}>
            {spans}
        </fieldset>
    );
}

export default TaskStatus;