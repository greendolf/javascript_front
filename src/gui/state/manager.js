export default class StateManager {
    static instance = null;

    constructor() {
        this.noquery = ["username", "password"];
        this.subscribers = {};
        this.states = {
            login: {
                status: "BAD",
            },
            tasks: {},
            calculation: {},
            username: "",
            password: "",
        };
        this.methods = {
            tasks: {
                name: "getTasks",
                params: ["token"],
            },
            login: {
                name: "login",
                params: ["username", "password"],
            },
            register: {
                name: "register",
                params: ["username", "password"],
            },
            calculation: {
                name: "startCalculation",
                params: ["token", "id"],
            },
            create: {
                name: "createTask",
                params: ["token", "value1", "value2"],
            },
            delete: {
                name: "deleteTask",
                params: ["token", "id"],
            },
        };

        if (!StateManager.instance) StateManager.instance = this;
        else return StateManager.instance;
    }

    emit(stateName) {
        const state = this.states[stateName];
        if (this.subscribers[stateName]) {
            this.subscribers[stateName].forEach((callback) =>
                callback(stateName, state)
            );
        }
    }

    async subscribe(stateName, callback, emit = false) {
        if (!this.subscribers[stateName]) this.subscribers[stateName] = [];

        if (!this.subscribers[stateName].includes(callback)) {
            this.subscribers[stateName].push(callback);
        }
        if (emit && !this.noquery.includes(stateName))
            await this.query(stateName);

        return callback;
    }

    unsubscribe(callback) {
        for (let key in this.subscribers) {
            const idx = this.subscribers[key].indexOf(callback);
            if (idx !== -1) {
                this.subscribers[key].splice(idx, 1);
                return true;
            }
        }

        return false;
    }

    async query(queryType) {
        const methodName = this.methods[queryType].name;
        const paramNames = this.methods[queryType].params;
        const params = this.getStates(paramNames);

        const queryResult = await (
            await import("../transport/transport.js")
        )[methodName](params);
        if (queryResult.status === 200)
            this.updateState(queryType, queryResult.message);
        else alert(`Error ${queryResult.status}: ${queryResult.message}`);
    }

    getState(stateName) {
        switch (stateName) {
            case "token":
                return this.states.login.token;
            case "username":
                return this.states.username;
            case "password":
                return this.states.password;
            case "logged":
                return this.states.login.status !== "BAD";
            case "id":
                return this.states.tasks.id;
            case "value1":
                return this.states.tasks.value1;
            case "value2":
                return this.states.tasks.value2;
            case "tasks":
                return this.states.tasks.list;
            default:
                return;
        }
    }

    getStates(stateNames) {
        let states = {};
        stateNames.forEach((stateName) => {
            states[stateName] = this.getState(stateName);
        });
        return states;
    }

    updateState(stateName, newValue) {
        let emitState = "";
        switch (stateName) {
            case "username":
                this.states.username = newValue;
                emitState = "username";
                break;
            case "password":
                this.states.password = newValue;
                emitState = "password";
                break;
            case "id":
                this.states.tasks.id = newValue;
                break;
            case "value1":
                this.states.tasks.value1 = newValue;
                break;
            case "value2":
                this.states.tasks.value2 = newValue;
                break;

            case "login":
                this.states.login.token = newValue;
                this.states.login.status = this.states.login.token
                    ? "OK"
                    : "BAD";
                emitState = "login";
                break;
            case "tasks":
                this.states.tasks.list = newValue;
                this.states.tasks.status = this.states.tasks.list.length
                    ? "OK"
                    : "EMPTY";
                emitState = "tasks";
                break;
            case "calculation":
                this.states.calculation.status = newValue;
                emitState = "calculation";
                this.query("tasks");
                break;
            case "delete":
                this.query("tasks");
                break;
            case "create":
                this.query("tasks");
                break;
            default:
                return;
        }

        if (emitState !== "") {
            this.emit(emitState);
        }
    }
}
