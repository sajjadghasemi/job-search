import { Routes, Route } from "react-router-dom";

const EmployerRoutes = () => {
    return (
        <Routes>
            <Route path="/employer" element={<h1>Karfarma Panel</h1>} />
        </Routes>
    );
};

export default EmployerRoutes;
