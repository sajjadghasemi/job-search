import { Routes, Route } from "react-router-dom";
import AdminLayout from "../components/admin/layouts/AdminLayout";
import AdminLogin from "../components/admin/pages/AdminLogin";

const AdminRoutes = () => (
    <Routes>
        <Route path="/admin/" element={<AdminLayout />}>
            <Route path="a" element={<h1>AAA</h1>} />
            <Route path="b" element={<h1>BBB</h1>} />
        </Route>
    </Routes>
);

export default AdminRoutes;
