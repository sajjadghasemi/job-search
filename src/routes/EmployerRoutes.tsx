import { Routes, Route } from 'react-router-dom';
import { EmployerDashboard } from '../components/employer-dashbord/pages/dashboard layout/EmployerDashboard';
import CompanyInfo from '../components/employer-dashbord/company/CompanyInfo';
import CompanyEdit from '../components/employer-dashbord/company/CompanyEdit';
import AddingAd from '../components/employer-dashbord/company/AddingAd';

const EmployerRoutes = () => {
  return (
    <Routes>
      <Route path="/employer" element={<EmployerDashboard />}>
        <Route path="/employer/company" element={<CompanyInfo />} />
        <Route path="/employer/edit" element={<CompanyEdit />} />
        <Route path="/employer/ads" element={<AddingAd />} />
      </Route>
    </Routes>
  );
};

export default EmployerRoutes;
