function TaskHeader(props) {
    const header = ['ID', 'Значение 1', 'Значение 2', 'Результат', 'Статус', 'Управление'];
    
    const ths = header.map(elem => {
        return (
            <th key={elem} style={{
                border: '1px solid grey'
            }}>
            {elem}
            </th>
        )
    });

    return (
        <tr>
            {ths}
        </tr>
    );
}

export default TaskHeader;