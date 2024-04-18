// Auth

export async function getAuth({ login, password }) {
    console.log(`login: ${login}, password: ${password}`);
    const response = await fetch(
        `http://localhost:80/api/v1/auth?login=${login}&password=${password}`
    );

    const content = await response.json();
    return { message: content.message, status: response.status };
}

export async function postAuth({ login, password }) {
    console.log(`login: ${login}, password: ${password}`);
    const response = await fetch(`http://localhost:80/api/v1/auth`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            login: login,
            password: password,
        }),
    });

    const content = await response.json();
    return { message: content.message, status: response.status };
}

export async function putAuth({ login, password, token }) {
    console.log(`login: ${login}, password: ${password}`);
    const response = await fetch(`http://localhost:80/api/v1/auth`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
            login: login,
            password: password,
        }),
    });

    const content = await response.json();
    return { message: content.message, status: response.status };
}

// Tasks

export async function getTasks({ token }) {
    let response = await fetch(`http://localhost:80/api/v1/tasks`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    const content = await response.json();
    content.message = JSON.parse(content.message);
    console.log(content.message);
    return { message: content.message, status: response.status };
}

export async function postTask({ token, values }) {
    console.log("posting");
    let response = await fetch(`http://localhost:80/api/v1/task`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
            values: values,
        }),
    });

    const content = await response.json();
    console.log(content);
    return { message: content.message, status: response.status };
}

export async function putTask({ id, token, values }) {
    let response = await fetch(`http://localhost:80/api/v1/task`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
            id: id,
            value1: values[0],
            value2: values[1],
        }),
    });

    const content = await response.json();
    return { message: content.message, status: response.status };
}

export async function deleteTask({ token, id }) {
    let response = await fetch(`http://localhost:80/api/v1/tasks?id=${id}`, {
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    const content = await response.json();
    return { message: content.message, status: response.status };
}

// Calculation

export async function postCalculation({ token, id }) {
    let response = await fetch(`http://localhost:80/api/v1/calculation`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
            id: id,
        }),
    });

    const content = await response.json();
    return { message: content.message, status: response.status };
}
