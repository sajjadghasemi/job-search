import { Routes, Route } from 'react-router-dom';
import { EmployerDashboard } from '../components/employer-dashbord/layouts/EmployerDashboard';
import CompanyInfo from '../components/employer-dashbord/pages/dashboard page/CompanyInfo';
import CompanyEdit from '../components/employer-dashbord/pages/dashboard page/CompanyEdit';
import AddingAd from '../components/employer-dashbord/pages/dashboard page/AddingAd';
import Ads from '../components/employer-dashbord/pages/dashboard page/Ads';
import Subscription from '../components/employer-dashbord/pages/dashboard page/Subscription';
import Applicants from '../components/employer-dashbord/pages/dashboard page/Applicants';

const EmployerRoutes = () => {
  return (
    <Routes>
      <Route path="/employer" element={<EmployerDashboard />}>
        <Route path="" element={<CompanyInfo />} />
        <Route path="company" element={<CompanyInfo />} />
        <Route path="ads" element={<Ads />} />
        <Route path="edit" element={<CompanyEdit />} />
        <Route path="add-advertisement" element={<AddingAd />} />
        <Route path="applicants" element={<Applicants />} />
      </Route>
      <Route path="employer/subscription" element={<Subscription />} />
    </Routes>
  );
};

export default EmployerRoutes;
