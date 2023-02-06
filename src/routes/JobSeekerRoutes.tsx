import { Routes, Route, Link } from "react-router-dom";
import MainPage from "../components/job-seeker-dashbord/pages/MainPage";
import UserLayout from "../components/job-seeker-dashbord/layouts/UserLayout";
import EditUser from "../components/job-seeker-dashbord/pages/EditUser";
import Massages from "../components/job-seeker-dashbord/pages/Massages";
import Cv from "../components/job-seeker-dashbord/pages/Cv";
import Suggestions from "../components/job-seeker-dashbord/pages/Suggestions";
import AddCv from "../components/job-seeker-dashbord/pages/AddCv";
import { useSelector } from "react-redux";

const JobSeekerRoutes = () => {
    const auth = useSelector((state: any) => state.usersSlice.currentUser);

    if (!auth)
        return (
            <>
                <h1>404</h1>
                <Link to="/">Go home</Link>
            </>
        );

    return (
        <Routes>
            <Route path="/user/" element={<UserLayout />}>
                <Route path="" element={<MainPage />} />
                <Route path="edit" element={<EditUser />} />
                <Route path="massages" element={<Massages />} />
                <Route path="cv" element={<Cv />} />
                <Route path="add-cv" element={<AddCv />} />
                <Route path="suggestions" element={<Suggestions />} />
                <Route
                    path="*"
                    element={
                        <>
                            <h1>404</h1>
                            <Link to="/">Go home</Link>
                        </>
                    }
                />
            </Route>
        </Routes>
    );
};

export default JobSeekerRoutes;
