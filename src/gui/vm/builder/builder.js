import { Provider } from "react-redux";
import store from "../toolkit/impl/store.js";

async function buildProvider(manager) {
    switch (manager) {
        case "redux":
            //const Store = (await import("../redux/impl/store.js")).default;
            //const Provider = (await import("react-redux")).Provider;
            return (props) => {
                return (
                    <Provider store={store}>
                        {props.children}
                    </Provider>
                );
            };
        case "selfmade":
            return (props) => {
                return <>{props.children}</>;
            };
        default:
            return (props) => {
                return <>{props.children}</>;
            };
    }
}

export default buildProvider;
