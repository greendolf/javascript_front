import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import { Provider } from "react-redux";
// import Store from "./gui/vm/redux/store.js";

import LoginPage from "./gui/page/login-page/component.js";
import TaskPage from "./gui/page/task-page/component.js";

import buildProvider from "./gui/vm/builder/builder.js";

const pgLogin = <LoginPage />;
const pgTask = <TaskPage />;

const Provider = await buildProvider("redux");

function App() {
    const router = (
        <Provider>
            <Router>
                <>
                    <Routes>
                        <Route path="" element={pgLogin} />
                        <Route path="/tasks" element={pgTask} />
                    </Routes>
                </>
            </Router>
        </Provider>
    );
    return router;
}

export default App;
