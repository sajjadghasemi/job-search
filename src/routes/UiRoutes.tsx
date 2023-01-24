import { Routes, Route } from "react-router-dom";
import UiLayout from "../components/ui/layouts/UiLayout";
import Home from "../components/ui/pages/Home";
import Sign from "../components/ui/pages/Sign";

const UiRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<UiLayout />}>
                <Route path="" element={<Home />} />
                <Route path="sign" element={<Sign />} />
            </Route>
        </Routes>
    );
};

export default UiRoutes;
