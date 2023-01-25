import { Box, Typography } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import CreateIcon from '@mui/icons-material/Create';
import WalletIcon from '@mui/icons-material/Wallet';
import FeedIcon from '@mui/icons-material/Feed';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import PeopleIcon from '@mui/icons-material/People';
import InterpreterModeIcon from '@mui/icons-material/InterpreterMode';
import { Link } from 'react-router-dom';

const RightBar = () => {
  return (
    <Box
      sx={{
        width: 160,
        //BUG about scroll
        // height: 'calc(89.8vh - 86px)',
        height: '1800px',
        bgcolor: '#664482',
        display: 'flex',
        flexDirection: 'column',
        padding: '2rem',
        gap: 5,
      }}
    >
      <Box sx={{ display: 'flex', gap: 3 }}>
        <PersonIcon sx={{ color: 'white' }} />
        <Link
          style={{ cursor: 'pointer', textDecoration: 'none' }}
          to="/employer/company"
        >
          <Typography
            variant="subtitle1"
            sx={{ color: 'white', fontFamily: 'shabnam' }}
          >
            حساب کارفرما
          </Typography>
        </Link>
      </Box>
      <Box sx={{ display: 'flex', gap: 3 }}>
        <CreateIcon sx={{ color: 'white' }} />
        <Link
          style={{ cursor: 'pointer', textDecoration: 'none' }}
          to="/employer/edit"
        >
          <Typography
            variant="subtitle1"
            sx={{ color: 'white', fontFamily: 'shabnam' }}
          >
            ویرایش اطلاعات
          </Typography>
        </Link>
      </Box>
      <Box sx={{ display: 'flex', gap: 3 }}>
        <WalletIcon sx={{ color: 'white' }} />
        <Link
          style={{ cursor: 'pointer', textDecoration: 'none' }}
          to="/employer/subscription"
        >
          <Typography
            variant="subtitle1"
            sx={{ color: 'white', fontFamily: 'shabnam' }}
          >
            اشتراک
          </Typography>
        </Link>
      </Box>
      <Box sx={{ display: 'flex', gap: 3 }}>
        <FeedIcon sx={{ color: 'white' }} />
        <Link
          style={{ cursor: 'pointer', textDecoration: 'none' }}
          to="/employer/ads"
        >
          <Typography
            variant="subtitle1"
            sx={{ color: 'white', fontFamily: 'shabnam' }}
          >
            آگهی ها
          </Typography>
        </Link>
      </Box>
      <Box sx={{ display: 'flex', gap: 3 }}>
        <NoteAddIcon sx={{ color: 'white' }} />
        <Link
          style={{ cursor: 'pointer', textDecoration: 'none' }}
          to="/employer/add-advertisement"
        >
          <Typography
            variant="subtitle1"
            sx={{ color: 'white', fontFamily: 'shabnam' }}
          >
            ثبت آگهی جدید
          </Typography>
        </Link>
      </Box>
      {/*  */}
      <Box sx={{ display: 'flex', gap: 3 }}>
        <PeopleIcon sx={{ color: 'white' }} />
        <Typography
          variant="subtitle1"
          sx={{ color: 'white', fontFamily: 'shabnam' }}
        >
          متقاضیان جدید
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', gap: 3 }}>
        <InterpreterModeIcon sx={{ color: 'white' }} />
        <Typography
          variant="subtitle1"
          sx={{ color: 'white', fontFamily: 'shabnam' }}
        >
          مصاحبه آنلاین
        </Typography>
      </Box>
    </Box>
  );
};

export default RightBar;
