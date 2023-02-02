import {Box, Typography, Container} from '@mui/material'

function CardSingleAd() {
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
                    11 تا 50 نفر
                  </Typography>
                </Box>

                <Box sx={{ dispaly: 'flex', flexDirection: 'column' }}>
                  <Typography sx={{ fontFamily: 'shabnam', fontWeight: 700 }}>
                    سال تاسیس
                  </Typography>
                  <Typography sx={{ fontFamily: 'shabnam', fontWeight: 500 }}>
                    1399
                  </Typography>
                </Box>

                <Box sx={{ dispaly: 'flex', flexDirection: 'column' }}>
                  <Typography sx={{ fontFamily: 'shabnam', fontWeight: 700 }}>
                    صنعت
                  </Typography>
                  <Typography sx={{ fontFamily: 'shabnam', fontWeight: 500 }}>
                    شرکت های خدماتی خدمات مهندسی و تخصصی
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ paddingTop: 3 }}>
                <Typography sx={{ fontFamily: 'shabnam', fontWeight: 700 }}>
                  خدمات
                </Typography>
                <Typography sx={{ fontFamily: 'shabnam', fontWeight: 500 }}>
                  اجرای دوره های بوت کمپ
                </Typography>
              </Box>
              <Box sx={{ paddingTop: 3 }}>
                <Typography sx={{ fontFamily: 'shabnam', fontWeight: 700 }}>
                  توصیف شرکت
                </Typography>
                <Typography sx={{ fontFamily: 'shabnam', fontWeight: 500 }}>
                  مجموعه بین المللی کیکاووس زمان در دو حوزه تامین منابع انسانی و
                  آموزش فعال می باشد. همکاری با شرکتهای نفت و گاز پتروشیمی، نیرو
                  و ... از سوابق این شرکت می باشد.
                </Typography>
              </Box>
            </Container>
          </Box>
        </Box>

        </>
    )
}

export default CardSingleAd