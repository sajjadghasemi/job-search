import { Routes, Route } from "react-router-dom";
import UiLayout from "../components/ui/layouts/UiLayout";
import ArticlesPage from "../components/ui/pages/ArticlesPage";
import EmployerSign from "../components/ui/pages/EmployerSign";
import Home from "../components/ui/pages/home/Home";
import JobAds from "../components/ui/pages/JobAds";
import Sign from "../components/ui/pages/Sign";
import SingleAds from "../components/ui/pages/single advertise/SingleAds";
import SingleCompany from "../components/ui/pages/single-company/SingleCompany";
import SingleArticle from "../components/ui/pages/SingleArticle";

const UiRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<UiLayout />}>
                <Route path="" element={<Home />} />
                <Route path="JobAds" element={<JobAds />} />
                <Route path="JobAds/:id" element={<SingleAds />} />
                <Route path="companies" element={<h1>HEY</h1>} />
                <Route path="companies/:name" element={<SingleCompany />} />
                <Route path="user-sign" element={<Sign />} />
                <Route path="employer-sign" element={<EmployerSign />} />
                <Route path="articles" element={<ArticlesPage />} />
                <Route path="articles/:id" element={<SingleArticle />} />
            </Route>
        </Routes>
    );
};

export default UiRoutes;
