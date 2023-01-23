import { Routes, Route } from 'react-router-dom';
import { EmployerDashboard } from '../components/employer-dashbord/pages/dashboard layout/EmployerDashboard';
import CompanyInfo from '../components/employer-dashbord/company/CompanyInfo';
import CompanyEdit from '../components/employer-dashbord/company/CompanyEdit';
import AddingAd from '../components/employer-dashbord/company/AddingAd';
import Add from '../components/employer-dashbord/company/Add';
import Subscription from '../components/employer-dashbord/company/Subscription';

const EmployerRoutes = () => {
  return (
    <Routes>
      <Route path="/employer" element={<EmployerDashboard />}>
        <Route path="/employer/company" element={<CompanyInfo />} />
        <Route path="/employer/ads" element={<Add />} />
        <Route path="/employer/edit" element={<CompanyEdit />} />
        <Route path="/employer/add-advertisement" element={<AddingAd />} />
      </Route>
      <Route path='employer/subscription' element={<Subscription />} />
    </Routes>
  );
};

export default EmployerRoutes;
