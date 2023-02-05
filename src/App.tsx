import { useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import AdminRoutes from "./routes/AdminRoutes";
import EmployerRoutes from "./routes/EmployerRoutes";
import JobSeekerRoutes from "./routes/JobSeekerRoutes";
import UiRoutes from "./routes/UiRoutes";

function App() {
    const users = useSelector((state: any) => state.usersSlice.users);
    const currentUser = useSelector(
        (state: any) => state.usersSlice.currentUser
    );

    console.log(users);
    console.log(currentUser);

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
