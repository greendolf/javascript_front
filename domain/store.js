import { RouterFactory } from "../gui/route/router.js";

class Store {
  constructor() {
    this.subscribers = {};
    this._states = {
      login: "",
      password: "",
      tasks: {},
    };
  }

  _emit(state) {
    this.subscribers[state.name].forEach((callback) => callback(state));
  }

  async _query(queryType, params) {
    const queryResult = (await import("../transport/transport.js"))[queryType](
      params
    );
    return queryResult;
  }

  async subscribe(stateName, callback) {
    if (!this.subscribers[stateName]) this.subscribers[stateName] = [];

    this.subscribers[stateName].push(callback);

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

  async doAction(action) {
    switch (action.type) {
      case "change_login": {
        this._login = action.payload.login;
        this._emit({ name: "login", new_value: this._login });
        break;
      }
      case "get_auth": {
        this._login = action.payload.login;
        this._password = action.payload.password;
        this._emit({ name: "login", new_value: this._login });
        let result = await this._query(action.type, {
          login: this._login,
          password: this._password,
        });
        if (result) {
          let router = RouterFactory.createInstance();
          router.go("tasks");
        }
        break;
      }
      case "get_register": {
        this._login = payload.login;
        this._password = payload.password;
        this._emit({ name: "login", new_value: this._login });
        result = await this._query(action.type, (this._login, this._password));
        break;
      }
      case "get_tasks": {
        result = await this._query(action.type, this._login);
        break;
      }
      case "create_task": {
        break;
      }
    }
  }
}

class StoreFactory {
  static _store = null;

  static _createInstance() {
    return new Store();
  }

  static createInstance() {
    if (StoreFactory._store === null) {
      StoreFactory._store = StoreFactory._createInstance();
    }
    return StoreFactory._store;
  }
}

export { StoreFactory };
