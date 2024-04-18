import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import { Provider } from "react-redux";
// import Store from "./gui/vm/redux/store.js";

import AuthPage from "./gui/page/auth-page/component.js";
import TaskPage from "./gui/page/tasks-page/component.js";

import buildProvider from "./gui/vm/builder/builder.js";

const pgAuth = <AuthPage />;
const pgTasks = <TaskPage />;

const Provider = await buildProvider("redux");

function App() {
    const router = (
        <Provider>
            <Router>
                <>
                    <Routes>
                        <Route path="" element={pgAuth} />
                        <Route path="/tasks" element={pgTasks} />
                    </Routes>
                </>
            </Router>
        </Provider>
    );
    return router;
}

export default App;
