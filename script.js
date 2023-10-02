let token;
let username;

window.onload = showAuthForm;

function showAuthForm() {
  document.body.innerHTML = "";
  let authForm = document.createElement("form");
  authForm.setAttribute("class", "authForm");

  let loginField = document.createElement("input");
  loginField.type = "text";
  loginField.placeholder = "login";
  authForm.appendChild(loginField);

  let passwordField = document.createElement("input");
  passwordField.type = "password";
  passwordField.placeholder = "password";
  authForm.appendChild(passwordField);

  let buttons = document.createElement("div");

  let loginBtn = document.createElement("input");
  loginBtn.type = "button";
  loginBtn.value = "login";
  buttons.appendChild(loginBtn);

  let registerBtn = document.createElement("input");
  registerBtn.type = "button";
  registerBtn.value = "register";
  buttons.appendChild(registerBtn);

  authForm.appendChild(buttons);

  document.body.appendChild(authForm);
  initAuthEvents(loginField, passwordField, loginBtn, registerBtn);
}

function initAuthEvents(loginField, passwordField, loginBtn, registerBtn) {
  loginBtn.addEventListener("click", async () => {
    const login = loginField.value;
    const password = passwordField.value;

    if (!login) {
      alert("empty login field");
      return;
    }
    if (!password) {
      alert("empty password field");
      return;
    }
    loginBtn.setAttribute("disabled", "");
    registerBtn.setAttribute("disabled", "");
    token = await auth(login, password);
    loginBtn.removeAttribute("disabled");
    registerBtn.removeAttribute("disabled");
    if (token) {
      username = login;
      showMainWindow();
    } else {
      alert("wrong credentials");
    }
  });

  registerBtn.addEventListener("click", async () => {
    const login = loginField.value;
    const password = passwordField.value;

    if (!login) {
      alert("empty login field");
      return;
    }
    if (!password) {
      alert("empty password field");
      return;
    }
    loginBtn.setAttribute("disabled", "");
    registerBtn.setAttribute("disabled", "");
    token = await register(login, password);
    loginBtn.removeAttribute("disabled");
    registerBtn.removeAttribute("disabled");
    if (token) {
      username = login;
      showMainWindow();
    } else alert("wrong credentials");
  });
}

async function showMainWindow() {
  document.body.innerHTML = "";

  let calcForm = document.createElement("form");
  calcForm.setAttribute("class", "calcForm");

  let updateBtn = document.createElement("input");
  updateBtn.type = "button";
  updateBtn.id = "update-btn";
  updateBtn.value = "Обновить";
  calcForm.appendChild(updateBtn);

  let addBtn = document.createElement("input");
  addBtn.type = "button";
  addBtn.id = "add-btn";
  addBtn.value = "Добавить";
  calcForm.appendChild(addBtn);

  let table = document.createElement("table");
  table.setAttribute("class", "tasksTable");
  table.id = "tasks";
  calcForm.appendChild(table);

  document.body.appendChild(calcForm);

  initTable(table);
  showTasks(table);
  initMainEvents(updateBtn, addBtn, table);
}

async function showTasks(table) {
  const tasks = await getTasks(token, username);
  if (tasks != null) {
    Array.from(table.rows).forEach((row) => {
      if (row.getAttribute("id") != "tasksHeader") row.remove();
    });

    tasks.forEach((task) => {
      let tr = document.createElement("tr");
      for (let taskElem in task) {
        console.log(taskElem);
        //task.forEach((taskElem) =>
        let td = document.createElement("td");
        td.innerHTML = task[taskElem];
        tr.appendChild(td);
      }
      table.appendChild(tr);
    });

    initControlButton(table);
  }
}

function initMainEvents(updateBtn, addBtn, table) {
  updateBtn.addEventListener("click", () => showTasks(table));
  addBtn.addEventListener("click", () => addRow(table));
}

function initTable(table) {
  let header = document.createElement("tr");
  header.setAttribute("id", "tasksHeader");
  const head = [
    "ID",
    "Значение 1",
    "Значение 2",
    "Результат",
    "Статус",
    "Управление",
  ];
  head.forEach((item) => {
    let th = document.createElement("th");
    th.innerHTML = item;
    header.appendChild(th);
  });

  table.appendChild(header);
}

function addRow(table) {
  let tr = document.createElement("tr");
  tr.style.backgroundColor = "red";

  for (let i = 0; i < 5; i++) {
    let td = document.createElement("td");
    if ([1, 2].includes(i)) td.contentEditable = true;
    tr.appendChild(td);
  }

  tr.addEventListener("keyup", (e) => {
    if (e.key != "Enter") return;

    if (tr.cells[1].innerHTML == "" || tr.cells[2].innerHTML == "") {
      alert("Enter all values");
      return;
    }

    const value1 = Number(tr.cells[1].innerText);
    const value2 = Number(tr.cells[2].innerText);
    if (isNaN(Number(value1)) || isNaN(Number(value2))) {
      alert("Enter correct values");
      return;
    }

    Array.from(tr.cells).forEach((cell) => {
      cell.contentEditable = false;
    });
    tr.style.backgroundColor = "lightgray";

    if (createTask(token, username, value1, value2) != -1) {
      showTasks(table);
      return;
    }

    alert("Unexpected error");
  });

  table.appendChild(tr);
}

function initControlButton(table) {
  Array.from(table.rows).forEach((tr) => {
    if (
      tr.getAttribute("id") != "tasksHeader" &&
      tr.cells[4].innerText != "complete"
    ) {
      let tdStart = document.createElement("td");

      let startBtn = document.createElement("input");
      startBtn.setAttribute("class", "start");
      startBtn.type = "button";
      startBtn.value = "Запустить";
      startBtn.addEventListener("click", () => {
        const id = Number(
          startBtn.parentElement.parentElement.cells[0].innerText
        );
        if (startCalculation(token, id)) {
          tr.cells[4].innerText = "processing";
        }
      });
      tdStart.appendChild(startBtn);
      tr.appendChild(tdStart);

      table.appendChild(tr);
    }
  });
}

async function auth(login, password) {
  return (await import("./transport.js")).auth(...arguments);
}

async function register(login, password) {
  return (await import("./transport.js")).register(...arguments);
}

async function getTasks(token, login) {
  return (await import("./transport.js")).getTasks(...arguments);
}

async function createTask(token, login, value1, value2) {
  return (await import("./transport.js")).createTask(...arguments);
}

async function startCalculation(token, login, id) {
  return (await import("./transport.js")).startCalculation(...arguments);
}
