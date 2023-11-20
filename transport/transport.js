export async function get_auth({ login, password }) {
  const response = await fetch(
    `http://localhost/api/v1/auth?login=${login}&password=${password}`
  );

  const result = JSON.parse(await response.text());
  const status = response.status;
  console.log(result);
  console.log(status);

  if (status == "200") return result.message;
  else return null;
}

export async function register(login1, password1) {
  const response = await fetch(`http://localhost/api/v1/register`, {
    method: "POST",
    body: JSON.stringify({ login: login1, password: password1 }),
  });

  let result = await response.text();
  const status = response.status;
  if (status == "200") {
    result = JSON.parse(result);
    const token = result.message;
    console.log(status);
    console.log(result);
    return token;
  } else return null;
}

export async function getTasks(token, login) {
  let response = await fetch(
    `http://localhost/api/v1/tasks?token=${token}&login=${login}`
  );
  let result = await response.text();
  const status = response.status;
  if (status == "200") {
    result = JSON.parse(result);
    console.log(`результат запроса: ${result.message}`);
    result = JSON.parse(result.message);
    const docs = result.docs;

    console.log(docs);
    console.log(status);
    return docs;
  } else return null;
}

export async function createTask(ltoken, llogin, lvalue1, lvalue2) {
  let response = await fetch(`http://localhost/api/v1/task`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({
      token: ltoken,
      login: llogin,
      value1: lvalue1,
      value2: lvalue2,
    }),
  });

  let result = await response.text();
  const status = response.status;
  console.log(status);
  console.log(`результат запроса: ${result}`);
  if (status == "200") {
    result = JSON.parse(result);
    return result.message;
  } else return null;
}

export async function deleteTask(ltoken, lid) {
  let response = await fetch(`http://localhost/api/v1/task`, {
    method: "DELETE",
    body: JSON.stringify({
      token: ltoken,
      id: lid,
    }),
  });

  let result = await response.text();
  const status = response.status;

  if (status == "200") {
    result = JSON.parse(result);
    console.log(`результат запроса: ${result.message}`);
    return result.message;
  } else return null;
}

export async function startCalculation(ltoken, lid) {
  let response = await fetch(`http://localhost/api/v1/calc/sum`, {
    method: "POST",
    body: JSON.stringify({ id: lid, token: ltoken }),
  });

  let result = await response.text();
  const status = response.status;

  if (status == "200") {
    result = JSON.parse(result);
    console.log(`результат запроса: ${result.message}`);
  }

  return result.message == "OK";
}
