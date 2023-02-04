import { Box, Typography, CardMedia } from '@mui/material';
import { useSelector } from 'react-redux';

const CompanyInfo = () => {
  const employerInfo = useSelector(
    (state: any) => state.employersSlice.currentEmployer
  );

  console.log(employerInfo);

  return (
    <Box
      sx={{
        display: 'flex',
        width: '50%',
        flexDirection: 'column',
        marginRight: '26rem',
        position: 'absolute',
        bgcolor: '#FCFCFC',
        paddingBlock: '1rem',
      }}
    >
      <Box
        sx={{
          bgcolor: '#fff',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          <Typography
            sx={{ fontFamily: 'shabnam', color: '#9747FF' }}
            variant="h6"
          >
            اسم شرکت
          </Typography>
          <Typography
            sx={{ fontFamily: 'shabnam', fontWeight: 300 }}
            variant="body1"
          >
            {employerInfo.company
              ? employerInfo.company.name
              : 'چیزی وارد نشده'}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          <Typography
            sx={{ fontFamily: 'shabnam', color: '#9747FF' }}
            variant="h6"
          >
            لوگو یا عکس شرکت
          </Typography>
          <CardMedia
            sx={{
              width: '181px',
              height: '125px',
              objectFit: 'cover',
            }}
            component="img"
            onError={({ currentTarget }) => {
              currentTarget.onerror = null;
              currentTarget.src =
                'https://www.macmillandictionary.com/us/external/slideshow/full/Grey_full.png';
            }}
            // image=""
            // alt="logo"
          />
        </Box>
      </Box>
      <Box sx={{ bgcolor: '#fff', paddingBlock: '20px' }}>
        <Typography
          sx={{ fontFamily: 'shabnam', color: '#9747FF' }}
          variant="h6"
        >
          درباره شرکت
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 1,
            }}
          >
            <Typography
              variant="body1"
              sx={{ fontFamily: 'shabnam', fontSize: '15px' }}
            >
              شماره تماس
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontFamily: 'shabnam', fontSize: '12px' }}
            >
              {employerInfo.company
                ? employerInfo.company.phoneNumber
                : 'چیزی وارد نشده'}
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 1,
            }}
          >
            <Typography
              variant="body1"
              sx={{ fontFamily: 'shabnam', fontSize: '15px' }}
            >
              ایمیل
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontFamily: 'shabnam', fontSize: '12px' }}
            >
              {employerInfo.company
                ? employerInfo.company.companyEmail
                : 'چیزی وارد نشده'}
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 1,
            }}
          >
            <Typography
              variant="body1"
              sx={{ fontFamily: 'shabnam', fontSize: '15px' }}
            >
              آدرس
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontFamily: 'shabnam', fontSize: '12px' }}
            >
              {employerInfo.company
                ? employerInfo.company.address
                : 'چیزی وارد نشده'}
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
            paddingBlock: 3,
            paddingRight: 5,
          }}
        >
          <Typography
            variant="body1"
            sx={{ fontFamily: 'shabnam', fontSize: '15px' }}
          >
            زمینه فعالیت
          </Typography>
          <Typography
            variant="body2"
            sx={{ fontFamily: 'shabnam', fontSize: '12px' }}
          >
            {employerInfo.company
              ? employerInfo.company.activityTitle
              : 'چیزی وارد نشده'}
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
            paddingBlock: 1,
            paddingRight: 5,
          }}
        >
          <Typography
            variant="body1"
            sx={{ fontFamily: 'shabnam', fontSize: '15px' }}
          >
            توضیحات بیشتر
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontFamily: 'shabnam', fontSize: '12px' }}
          >
            {employerInfo.company
              ? employerInfo.company.describtions
              : 'چیزی وارد نشده'}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default CompanyInfo;
