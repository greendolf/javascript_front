import { Provider } from "react-redux";
import { store } from "../toolkit/impl/store.js";
import { persistor } from "../toolkit/impl/store.js";
import { PersistGate } from "redux-persist/integration/react";

async function buildProvider(manager) {
    switch (manager) {
        case "redux":
            return (props) => {
                return (
                    <Provider store={store}>
                        <PersistGate loading={null} persistor={persistor}>
                            {props.children}
                        </PersistGate>
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
