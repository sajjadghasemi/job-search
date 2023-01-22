import { Box } from '@mui/material';
import Header from './Header';
import RightBar from './RightBar';
import { Outlet } from 'react-router-dom';

export const EmployerDashboard = () => {
  return (
    <Box>
      <Header />

      <Outlet />

      <RightBar />
    </Box>
  );
};
