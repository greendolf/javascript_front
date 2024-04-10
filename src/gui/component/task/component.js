import Manager from '../../state/manager.js';

function Task(props) {
    const manager = new Manager();
    
    const statusCond = props.status !== 'not started';

    const handleClick = () => {
        manager.updateState('id', props.ID);
        if (statusCond) manager.query('delete');
        else manager.query('calculation');
    };

    const tds = Object.keys(props).map(propName => {
        return (
            <td key={propName} style={{
                border: '1px solid grey'
            }}>
                {props[propName]}
            </td>
        )
    });

    return (
        <tr>
            {tds}
            <td style={{
                    border: '1px solid grey'
                }}>
                    <button onClick={handleClick}>
                        {statusCond ? 'Удалить' : 'Запустить'}
                    </button>
            </td>
        </tr>
    );
}

export default Task;