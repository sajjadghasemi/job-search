import { Routes, Route } from "react-router-dom";
import UiLayout from "../components/ui/layouts/UiLayout";
import Home from "../components/ui/pages/home/Home";
import JobAds from "../components/ui/pages/JobAds";
import Sign from "../components/ui/pages/Sign";
import SingleAds from "../components/ui/pages/single advertise/SingleAds";

const UiRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<UiLayout />}>
                <Route path="" element={<Home />} />
                <Route path="JobAds" element={<JobAds />} />
                <Route path="sign" element={<Sign />} />
                <Route path="a" element={<SingleAds />} />
            </Route>
        </Routes>
    );
};

export default UiRoutes;
