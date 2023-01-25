import { Routes, Route } from 'react-router-dom';
import { EmployerDashboard } from '../components/employer-dashbord/pages/dashboard layout/EmployerDashboard';
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
        <Route path="/employer/company" element={<CompanyInfo />} />
        <Route path="/employer/ads" element={<Ads />} />
        <Route path="/employer/edit" element={<CompanyEdit />} />
        <Route path="/employer/add-advertisement" element={<AddingAd />} />
        <Route path='employer/applicants' element={<Applicants/>} />
      </Route>
      <Route path='employer/subscription' element={<Subscription />} />
    </Routes>
  );
};

export default EmployerRoutes;
