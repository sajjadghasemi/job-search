import {
  Container,
  Box,
  Typography,
  Button,
  Divider,
  Avatar,
} from '@mui/material';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import CardSingleAd from './CardSingleAd';
import Card2SingleAd from './Card2SingleAd';
import Card3SingleAd from './Card3SingleAd';

function HeaderSingleAd() {
  return (
    <Container sx={{ p: '4rem' }}>
      <Box sx={{ display: 'flex', gap: '4rem' }}>
        <Box sx={{ width: '865px' }}>
          <Box
            sx={{
              height: '272px',
              width: '865px',
              objectFit: 'cover',
              borderRadius: '16px',
              opacity: '55%',
            }}
            component={'img'}
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          />
          <Box
            sx={{
              position: 'relative',
              bottom: '8rem',
              width: '865px',
            }}
          >
            <Box
              sx={{
                dispaly: 'flex',
                bgcolor: '#FFFFFF',
                alignItems: 'center',
                borderRadius: '24px',
                p: '3rem',
                boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.09)',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <Box>
                    <Avatar
                      src="https://karboom.io/storage/employers/logo/NbFAtuV14V0GoqKUpFLvcfUbEYLrEDrWrF8tUpQU.jpg"
                      sx={{ width: '50px', height: '50px', objectFit: 'cover' }}
                    />
                  </Box>
                  <Box>
                    <Box sx={{ display: 'flex', gap: 1 }}>
                      <Typography
                        sx={{
                          fontFamily: 'shabnam',
                          fontWeight: 700,
                          color: '#9966C3',
                        }}
                      >
                        شرکت کیکاووس زمان
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: 'shabnam',
                          fontWeight: 500,
                          color: '#ACA7A7',
                        }}
                      >
                        (ساعتی پیش)
                      </Typography>
                    </Box>
                    <Typography sx={{ fontFamily: 'shabnam', fontWeight: 500 }}>
                      نیروی برنامه نویس php{' '}
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', gap: 2 }}>
                  <FavoriteBorderIcon sx={{ color: '#664887' }} />
                  <ShareIcon sx={{ color: '#664887' }} />
                </Box>
              </Box>
              <Divider sx={{ paddingTop: 5 }} />
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-evenly',
                  paddingTop: 3,
                }}
              >
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <Typography sx={{ fontFamily: 'shabnam', fontWeight: 700 }}>
                    حقوق
                  </Typography>
                  <Typography sx={{ fontFamily: 'shabnam', fontWeight: 500 }}>
                    8-10
                  </Typography>
                </Box>
                <Divider orientation="vertical" flexItem />
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <Typography sx={{ fontFamily: 'shabnam', fontWeight: 700 }}>
                    محل کار
                  </Typography>
                  <Typography sx={{ fontFamily: 'shabnam', fontWeight: 500 }}>
                    تهران سهروردی شمالی
                  </Typography>
                </Box>
                <Divider orientation="vertical" flexItem />

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <Typography sx={{ fontFamily: 'shabnam', fontWeight: 700 }}>
                    نوع همکاری
                  </Typography>
                  <Typography sx={{ fontFamily: 'shabnam', fontWeight: 500 }}>
                    تمام وقت
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          {/* inja */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <CardSingleAd />
            <Card2SingleAd />
            <Card3SingleAd />
          </Box>
        </Box>
        {/*  */}
        <Box
          sx={{
            dispaly: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <Typography
            sx={{
              fontFamily: 'shabnam',
              fontWeight: 700,
              paddingBottom: '3rem',
            }}
          >
            مشاهده اگهی بیشتر این مجموعه
          </Typography>
          <Button
            sx={{
              width: '340px',
              height: '62px',
              border: '#C542D0 1px solid',
              ':hover': { color: '#fff' },
              borderRadius: '10px',
            }}
            startIcon={
              <KeyboardDoubleArrowDownIcon
                sx={{ color: '#C542D0', fontSize: '3rem' }}
              />
            }
          />

          <Divider sx={{ paddingTop: '1rem' }} />
        </Box>
      </Box>
    </Container>
  );
}

export default HeaderSingleAd;
