import { Routes, Route } from "react-router-dom";
import AdminLogin from "../components/admin/pages/AdminLogin";

const AdminRoutes = () => {
    return (
        <Routes>
            <Route path="/admin" element={<AdminLogin />} />
        </Routes>
    );
};

export default AdminRoutes;
