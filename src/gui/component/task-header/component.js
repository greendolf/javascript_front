function TaskHeader(props) {
    const header = [
        "ID",
        "status",
        "nx",
        "ny",
        "time_end",
        "length",
        "width",
        "lambda",
        "ro",
        "c",
        "t_start",
        "t_left",
        "t_right",
    ];
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

    return <tr>{ths}</tr>;
}

export default TaskHeader;
