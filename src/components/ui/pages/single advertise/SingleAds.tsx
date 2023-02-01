import { Avatar, Box, Button, Divider, Typography, Stack } from '@mui/material';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
const SingleAds = () => {
  return (
    <Box p={6} sx={{ display: 'flex', flexDirection: 'row' }}>
      <Box sx={{ position: 'relative' }}>
        <Typography
          sx={{
            position: 'absolute', //TODO
            fontFamily: 'shabnam',
            fontWeight: 700,
            fontSize: '36px',
            color: '#D0AEF9',
            p: 6,
          }}
        >
          آگهی
        </Typography>
        <Box
          component={'img'}
          sx={{
            width: '865px',
            height: '272px',
            objectFit: 'cover',
            borderRadius: '16px',
            // opacity: '53%', //TODO
          }}
          src={
            'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
          }
          alt="/"
        />

        <Box
          sx={{
            bgcolor: '#fff',
            position: 'relative',
            width: '865px',
            height: '369px',
            bottom: '5rem',
            borderRadius: '24px',
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.09);',
            p: 3,
            display: 'flex',
            gap: 3,
          }}
        >
          <Avatar sx={{ width: '55px', height: '55px' }} />
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              gap: '28rem',
            }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Box sx={{ display: 'flex', gap: 2 }}>
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
                  (ساعتی پیش){' '}
                </Typography>
              </Box>
              <Typography sx={{ fontFamily: 'shabnam', fontWeight: 500 }}>
                نیروی برنامه نویس php
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <FavoriteBorderIcon />
              <ShareIcon />
            </Box>
          </Box>
          <Box>
            <Divider sx={{ bgcolor: 'red', zIndex: 20, width: '200px' }} />
          </Box>
          {/* //BUG از اول یزن تهش */}
        </Box>
      </Box>
      {/* Left Box */}
      <Box sx={{ bgcolor: '#fff' }}>
        <Stack p={2} gap={5}>
          <Typography sx={{ fontFamily: 'shabnam', fontWeight: 700 }}>
            مشاهده اگهی بیشتر این مجموعه
          </Typography>
          <Button
            sx={{
              border: '1px solid #C542D0',
              // height: '62px',
              ':hover': {
                bgcolor: '#fff',
                color: '#fff',
              },
            }}
            startIcon={
              <KeyboardDoubleArrowDownIcon
                sx={{ color: '#C542D0', fontSize: '2rem' }}
              />
            }
          />
          <Divider />
        </Stack>
      </Box>
    </Box>
  );
};

export default SingleAds;
