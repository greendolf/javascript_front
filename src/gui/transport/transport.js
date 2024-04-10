export async function login({ login, password }) {
    console.log(`login: ${login}, password: ${password}`);
    const response = await fetch(
        `http://localhost:80/api/v1/auth?login=${login}&password=${password}`
    );

    const content = await response.json();
    return { message: content.message, status: response.status };
}

export async function register({ login, password }) {
    console.log(`login: ${login}, password: ${password}`);
    const response = await fetch(`http://localhost:80/api/v1/register`, {
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

export async function getTasks({ token }) {
    let response = await fetch(`http://localhost:80/api/v1/tasks`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    
    const content = await response.json();
    content.message = JSON.parse(content.message);
    return { message: content.message, status: response.status };
}

export async function createTask({ token, values }) {
    let response = await fetch(`http://localhost:80/api/v1/task`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
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

export async function startCalculation({ token, id }) {
    let response = await fetch(`http://localhost:80/api/v1/calculations`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
            ID: id,
        }),
    });

    const content = await response.json();
    return { message: content.message, status: response.status };
}
