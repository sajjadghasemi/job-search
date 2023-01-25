import { Routes, Route } from "react-router-dom";
import MainPage from "../components/job-seeker-dashbord/pages/MainPage";
import UserLayout from "../components/job-seeker-dashbord/layouts/UserLayout";
import EditUser from "../components/job-seeker-dashbord/pages/EditUser";

const JobSeekerRoutes = () => {
    return (
        <Routes>
            <Route path="/user/" element={<UserLayout />}>
                <Route path="" element={<MainPage />} />
                <Route path="edit" element={<EditUser />} />
            </Route>
        </Routes>
    );
};

export default JobSeekerRoutes;
