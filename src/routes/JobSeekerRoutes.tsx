import { Routes, Route } from "react-router-dom";
import MainPage from "../components/job-seeker-dashbord/pages/MainPage";
import UserLayout from "../components/job-seeker-dashbord/layouts/UserLayout";
import EditUser from "../components/job-seeker-dashbord/pages/EditUser";
import Massages from "../components/job-seeker-dashbord/pages/Massages";
import Cv from "../components/job-seeker-dashbord/pages/Cv";

const JobSeekerRoutes = () => {
    return (
        <Routes>
            <Route path="/user/" element={<UserLayout />}>
                <Route path="" element={<MainPage />} />
                <Route path="edit" element={<EditUser />} />
                <Route path="massages" element={<Massages />} />
                <Route path="cv" element={<Cv />} />
            </Route>
        </Routes>
    );
};

export default JobSeekerRoutes;
