import footerImg from '../../../assets/uiImages/namadEtemad.svg';
import { Box, Typography } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';

function Footer() {
  return (
    <Box
      sx={{
        p: 8,
        bgcolor: '#FDFDFD',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
    >
      {/*  */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        <Typography
          sx={{
            color: 'JOB',
            fontFamily: 'cursive',
            fontWeight: 400,
            fontSize: '36px',
          }}
        >
          <span style={{ color: '#664482' }}>JOB</span>
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 2 }}>
          <a href="/#">
            <InstagramIcon
              sx={{ color: '#CDCDCD', fontSize: '2.1rem', cursor: 'pointer' }}
            />
          </a>
          <a href="/#">
            <FacebookOutlinedIcon
              sx={{ color: '#CDCDCD', fontSize: '2rem', cursor: 'pointer' }}
            />
          </a>
          <a href="/#">
            <TwitterIcon
              sx={{ color: '#CDCDCD', fontSize: '2rem', cursor: 'pointer' }}
            />
          </a>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Typography sx={{ fontFamily: 'shabnam', fontWeight: 500 }}>
          صفحه اصلی
        </Typography>
        <Typography sx={{ fontFamily: 'shabnam', fontWeight: 500 }}>
          {' '}
          مقاله ها{' '}
        </Typography>
        <Typography sx={{ fontFamily: 'shabnam', fontWeight: 500 }}>
          {' '}
          تماس با ما
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Typography sx={{ fontFamily: 'shabnam', fontWeight: 700 }}>
          {' '}
          کارجو
        </Typography>
        <Typography sx={{ fontFamily: 'shabnam', fontWeight: 500 }}>
          ساخت رزومه
        </Typography>
        <Typography sx={{ fontFamily: 'shabnam', fontWeight: 500 }}>
          {' '}
          جستجوی آگهی{' '}
        </Typography>
        <Typography sx={{ fontFamily: 'shabnam', fontWeight: 500 }}>
          مصاحبه آنلاین
        </Typography>
        <Typography sx={{ fontFamily: 'shabnam', fontWeight: 500 }}>
          معرفی شرکت{' '}
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Typography sx={{ fontFamily: 'shabnam', fontWeight: 700 }}>
          {' '}
          کارفرما
        </Typography>
        <Typography sx={{ fontFamily: 'shabnam', fontWeight: 500 }}>
          {' '}
          درج آگهی
        </Typography>
        <Typography sx={{ fontFamily: 'shabnam', fontWeight: 500 }}>
          {' '}
          جستجوی متقاضیان{' '}
        </Typography>
        <Typography sx={{ fontFamily: 'shabnam', fontWeight: 500 }}>
          مصاحبه آنلاین
        </Typography>
      </Box>

      <Box component={'img'} src={footerImg} alt="/footer" />
    </Box>
  );
}

export default Footer;
