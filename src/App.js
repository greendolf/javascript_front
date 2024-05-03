import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AuthPage from "./gui/pages/auth-page.js";
import TaskPage from "./gui/pages/tasks-page.js";

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
