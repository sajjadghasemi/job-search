import { Routes, Route } from "react-router-dom";
import UiLayout from "../components/ui/layouts/UiLayout";
import EmployerSign from "../components/ui/pages/EmployerSign";
import Home from "../components/ui/pages/home/Home";
import JobAds from "../components/ui/pages/JobAds";
import Sign from "../components/ui/pages/Sign";

const UiRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<UiLayout />}>
                <Route path="" element={<Home />} />
                <Route path="JobAds" element={<JobAds />} />
                <Route path="user-sign" element={<Sign />} />
                <Route path="employer-sign" element={<EmployerSign />} />
            </Route>
        </Routes>
    );
};

export default UiRoutes;
