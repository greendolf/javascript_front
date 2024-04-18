function Task(props) {
    const handleMore = () => {
        // mock
    };

    const handleDelete = () => {
        // mock
    };
    console.log(props);

    const tds = Object.keys(props.data).map((propName) => {
        return (
            <td
                key={propName}
                style={{
                    border: "1px solid grey",
                }}
            >
                {props.data[propName]}
            </td>
        );
    });

    return (
        <tr>
            {tds}
            <td
                style={{
                    border: "1px solid grey",
                }}
            >
                <button onClick={handleMore}>Подробнее</button>
                <button onClick={handleDelete}>Удалить</button>
            </td>
        </tr>
    );
}

export default Task;
