import { Routes, Route } from 'react-router-dom';
import AdminLogin from '../components/admin/pages/AdminLogin';

const AdminRoutes = () => (
  <Routes>
    <Route path="/admin" element={<AdminLogin />} />
  </Routes>
);

export default AdminRoutes;
