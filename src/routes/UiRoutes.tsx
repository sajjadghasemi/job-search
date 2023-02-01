import { Routes, Route } from "react-router-dom";
import UiLayout from "../components/ui/layouts/UiLayout";
import Home from "../components/ui/pages/home/Home";
import JobAds from "../components/ui/pages/JobAds";
import Sign from "../components/ui/pages/Sign";
import EmployerSign from "../components/ui/pages/EmployerSign";

const UiRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<UiLayout />}>
                <Route path="" element={<Home />} />
                <Route path="JobAds" element={<JobAds />} />
                <Route path="employer-sign" element={<EmployerSign />} />
                <Route path="user-sign" element={<Sign />} />
            </Route>
        </Routes>
    );
};

export default UiRoutes;
