import { BrowserRouter } from "react-router-dom";
import AdminRoutes from "./routes/AdminRoutes";
import EmployerRoutes from "./routes/EmployerRoutes";
import JobSeekerRoutes from "./routes/JobSeekerRoutes";
import UiRoutes from "./routes/UiRoutes";

function App() {
    return (
        <BrowserRouter>
            <AdminRoutes />
            <UiRoutes />
            <JobSeekerRoutes />
            <EmployerRoutes />
        </BrowserRouter>
    );
}

export default App;
