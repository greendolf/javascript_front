import template from "./template.js";
import { StoreFactory } from "../../../domain/store.js";


class TaskTable extends HTMLElement {
  constructor() {
    super();
    this._shadow = this.attachShadow({ mode: "closed" });
    this.tasks = [];
    this.subscriptions = [];
  }

  async connectedCallback() {
    this.renderHeader();
    this.initEvents();
    this.subscriptions.push(
      await StoreFactory.createInstance().subscribe(
        "tasks",
        this.checkState.bind(this)
      )
    );
    this.subscriptions.push(
      await StoreFactory.createInstance().subscribe(
        "calculation",
        this.checkState.bind(this)
      )
    );
  }

  disconnectedCallback() {
    this.unsubscribe();
  }

  static get observedAttributes() {
    return [];
  }

  attributeChangedCallback(attr, oldValue, newValue) {}

  renderHeader() {
    this._shadow.innerHTML = template(this);
    let header = document.createElement("tr");
    header.setAttribute("id", "tasks-header");
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
    this.shadow.querySelector("table").appendChild(header);
  }

  renderTasks() {
    let table = this.shadow.querySelector("table");
    Array.from(table.querySelectorAll("tr:not(#tasks-header)")).forEach(
      (row) => {
        row.remove();
      }
    );

    this.tasks.forEach((task) => {
      const keys = ["ID", "value1", "value2", "result", "status"];
      let tr = document.createElement("tr");
      keys.forEach((key) => {
        let td = document.createElement("td");
        td.innerHTML = task[key];
        td.setAttribute("class", `task-${key.toLowerCase()}`);
        tr.appendChild(td);
      });
      table.appendChild(tr);
    });

    this.renderControlButtons();
  }

  renderControlButtons() {
    Array.from(
      this.shadow.querySelectorAll("table > tr:not(#tasks-header)")
    ).forEach((row) => {
      let MgmtTD = document.createElement("td");
      MgmtTD.setAttribute("class", "task-mgmt");
      let MgmtBtn = document.createElement("input");
      MgmtBtn.setAttribute("type", "button");
      MgmtBtn.setAttribute("class", "mgmt-btn");
      const statusCond =
        row.querySelector(".task-status").innerHTML !== "Waiting";
      MgmtBtn.setAttribute("value", statusCond ? "Удалить" : "Запустить");

      MgmtBtn.addEventListener("click", () => {
        const id = Number(row.querySelector(".task-id").innerHTML);
        this.manager.updateState("id", id);
        if (!statusCond) this.manager.query("calculation");
        else this.manager.query("delete");
      });

      MgmtTD.appendChild(MgmtBtn);
      row.appendChild(MgmtTD);
    });
  }

  changeControlButton(id = null) {
    Array.from(
      this.shadow.querySelectorAll("table > tr:not(#tasks-header)")
    ).forEach((row) => {
      if (id && Number(row.querySelector(".task-id").innerHTML) === id) {
        let btn = row.querySelector(".task-mgmt > input");
        btn.setAttribute("value", "Удалить");
        btn.setAttribute("disabled", "true");

        let status = row.querySelector(".task-status");
        status.innerHTML = "Processing";
      }
    });
  }

  addRow() {
    let table = this.shadow.querySelector("table");
    let btn = this.shadow.querySelector("#add-btn");
    btn.setAttribute("disabled", "");

    let tr = document.createElement("tr");
    tr.style.backgroundColor = "red";

    const keys = ["ID", "value1", "value2", "result", "status"];
    keys.forEach((key) => {
      let td = document.createElement("td");
      td.setAttribute("class", `task-${key.toLowerCase()}`);
      if (["value1", "value2"].includes(key)) td.contentEditable = true;
      tr.appendChild(td);
    });

    tr.addEventListener("keyup", (e) => {
      if (e.key != "Enter") return;

      const value1 = Number(tr.querySelector(".task-value1").innerText);
      const value2 = Number(tr.querySelector(".task-value2").innerText);

      if (
        tr.querySelector(".task-value1").innerHTML === "" ||
        tr.querySelector(".task-value2").innerHTML === ""
      ) {
        alert("Заполните все значения!");
        return;
      }

      if (isNaN(value1) || isNaN(value2)) {
        alert("Введите значения правильно!");
        return;
      }

      Array.from(tr.cells).forEach((cell) => {
        cell.contentEditable = false;
      });
      tr.style.backgroundColor = "lightgray";

      StoreFactory.createInstance().doAction({
        type: "create_task",
        payload: { value1: value1, value2: value2 },
      });

      btn.removeAttribute("disabled");
    });

    table.appendChild(tr);
  }

  initEvents() {
    // State management logic
    this.shadow.querySelector("#update-btn").addEventListener("click", () => {
      StoreFactory.createInstance().doAction({ type: "get_tasks" });
    });

    this.shadow.querySelector("#add-btn").addEventListener("click", () => {
      this.addRow();
    });
  }

  checkState(state) {
    switch (state.name) {
      case "tasks":
        this._tasks = state.list;
        this.renderTasks();
        break;
      case "calculation":
        const id = state.id;
        this.changeControlButton(id);
        break;
    }
  }

  unsubscribe() {
    this.subscriptions.forEach((callback) => {
      this.manager.unsubscribe(callback);
    });
  }
}

customElements.define("task-table", TaskTable);
