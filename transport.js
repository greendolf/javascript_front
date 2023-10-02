export async function auth(login, password) {
  const response = await fetch(
    `http://localhost:8080/auth?login=${login}&password=${password}`
  );

  const result = JSON.parse(await response.text());
  const status = response.status;
  console.log(result);
  console.log(status);

  if (status == "200") return result.token;
  else return null;
}

export async function register(login1, password1) {
  const response = await fetch(`http://localhost:8080/register`, {
    method: "POST",
    body: JSON.stringify({ login: login1, password: password1 }),
  });

  let result = await response.text();
  const status = response.status;
  if (status == "200") {
    result = JSON.parse(result);
    const token = result.result;
    console.log(result);
    console.log(status);
    return token;
  } else return null;
}

export async function getTasks(token, login) {
  let response = await fetch(
    `http://localhost:8080/tasks?token=${token}&login=${login}`
  );
  let result = await response.text();
  const status = response.status;
  if (status == "200") {
    result = JSON.parse(result);
    result = JSON.parse(result.result);
    const docs = result.docs;

    console.log(docs);
    console.log(status);
    return docs;
  } else return null;
}

export async function createTask(ltoken, llogin, lvalue1, lvalue2) {
  let response = await fetch(`http://localhost:8080/task`, {
    method: "POST",
    body: JSON.stringify({
      token: ltoken,
      login: llogin,
      value1: lvalue1,
      value2: lvalue2,
    }),
  });

  const result = JSON.parse(await response.text());
  const status = response.status;
  console.log(result.desc);
  console.log(status);

  if (status == "200") return result.result;
  else return null;
}

export async function startCalculation(ltoken, lid) {
  let response = await fetch(`http://localhost:8080/calculation/sum`, {
    method: "POST",
    body: JSON.stringify({ id: lid, token: ltoken }),
  });
  let content = await response.text();

  return content == "OK";
}
