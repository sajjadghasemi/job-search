import { Routes, Route } from 'react-router-dom';
import { EmployerDashboard } from '../components/employer-dashbord/pages/dashboard layout/EmployerDashboard';
import CompanyInfo from '../components/employer-dashbord/company/CompanyInfo';

const EmployerRoutes = () => {
  return (
    <Routes>
      <Route path="/employer" element={<EmployerDashboard />}>
        <Route path="/employer/company" element={<CompanyInfo />} />
      </Route>
    </Routes>
  );
};

export default EmployerRoutes;
