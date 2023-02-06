import { FC } from 'react';
import { Box, Typography, Container } from '@mui/material';

const CardSingleAd: FC<{
  companyMemebers: string;
  estYear: string;
  activityTitle: string;
  advantages: string;
  describtions: string;
}> = ({
  companyMemebers,
  estYear,
  activityTitle,
  advantages,
  describtions,
}) => {
  return (
    <>
      <Box sx={{ width: '865px' }}>
        <Box
          sx={{
            bgcolor: '#fff',
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.09)',
            borderRadius: '24px',
            p: 3,
          }}
        >
          <Box sx={{ paddingBottom: 2 }}>
            <Typography
              sx={{
                fontFamily: 'shabnam',
                color: '#9747FF',
                fontWeight: 700,
              }}
            >
              درباره شرکت
            </Typography>
          </Box>
          <Container>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Box sx={{ dispaly: 'flex', flexDirection: 'column' }}>
                <Typography sx={{ fontFamily: 'shabnam', fontWeight: 700 }}>
                  اندازه سازمان
                </Typography>
                <Typography sx={{ fontFamily: 'shabnam', fontWeight: 500 }}>
                  {companyMemebers}
                </Typography>
              </Box>

              <Box sx={{ dispaly: 'flex', flexDirection: 'column' }}>
                <Typography sx={{ fontFamily: 'shabnam', fontWeight: 700 }}>
                  سال تاسیس
                </Typography>
                <Typography sx={{ fontFamily: 'shabnam', fontWeight: 500 }}>
                  {estYear}
                </Typography>
              </Box>

              <Box sx={{ dispaly: 'flex', flexDirection: 'column' }}>
                <Typography sx={{ fontFamily: 'shabnam', fontWeight: 700 }}>
                  صنعت
                </Typography>
                <Typography sx={{ fontFamily: 'shabnam', fontWeight: 500 }}>
                  {activityTitle}
                </Typography>
              </Box>
            </Box>
            <Box sx={{ paddingTop: 3 }}>
              <Typography sx={{ fontFamily: 'shabnam', fontWeight: 700 }}>
                خدمات
              </Typography>
              <Typography sx={{ fontFamily: 'shabnam', fontWeight: 500 }}>
                {advantages}
              </Typography>
            </Box>
            <Box sx={{ paddingTop: 3 }}>
              <Typography sx={{ fontFamily: 'shabnam', fontWeight: 700 }}>
                توصیف شرکت
              </Typography>
              <Typography sx={{ fontFamily: 'shabnam', fontWeight: 500 }}>
                {describtions}
              </Typography>
            </Box>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default CardSingleAd;
