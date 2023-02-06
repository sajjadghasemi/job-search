import { Box, Typography, Container, Button } from '@mui/material';

const Card2SingleAd: React.FC<{ skills: string[] }> = ({ skills }) => {
  return (
    <>
      <Box sx={{ width: '865px', paddingTop: 2 }}>
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
              شرایط استخدام{' '}
            </Typography>
          </Box>
          <Container>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Box sx={{ dispaly: 'flex', flexDirection: 'column' }}>
                <Typography sx={{ fontFamily: 'shabnam', fontWeight: 700 }}>
                  مهارتهای مورد نیاز
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Box sx={{ paddingTop: 3 }}>
                {skills.map((item: any, i: number) => {
                  return (
                    <>
                      <li>{item}</li>
                    </>
                  );
                })}
              </Box>
              ;
            </Box>
          </Container>
          <Box sx={{ p: 4 }}>
            <Button
              variant="contained"
              sx={{
                fontFamily: 'shabnam',
                width: '237px',
                borderRadius: '10px',
                bgcolor: '#DA91E5',
                ':hover': { bgcolor: '#C542D0' },
              }}
            >
              ارسال رزومه
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Card2SingleAd;
