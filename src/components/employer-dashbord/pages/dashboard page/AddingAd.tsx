import {
  Box,
  Typography,
  TextField,
  TextareaAutosize,
  Checkbox,
  Button,
} from '@mui/material';

const AddingAd = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        width: '50%',
        flexDirection: 'column',
        marginRight: '26rem',
        position: 'absolute',
        // bgcolor: '#fcfcfc',
        paddingBlock: '1.5rem',
      }}
    >
      <Typography
        sx={{
          fontFamily: 'shabnam',
          fontWeight: 700,
          color: '#664887',
          fontSize: '22px',
        }}
      >
        ثبت آگهی
      </Typography>
      <Box sx={{ marginTop: 2 }}>
        <form>
          <Typography
            sx={{ fontFamily: 'shabnam', fontWeight: 500, fontSize: '20px' }}
          >
            اطلاعات شرکت یا موسسه
          </Typography>
          {/*  */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-around',
              paddingBlock: '1rem',
              marginRight: 9,
              gap: 4,
            }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography
                sx={{
                  fontFamily: 'shabnam',
                  fontWeight: 700,
                  fontSize: '14px',
                }}
              >
                سال تاسیس
              </Typography>
              <TextField
                sx={{
                  '& label.Mui-focused': {
                    color: '#000000',
                  },
                  '  & .MuiOutlinedInput-root': {
                    ' &.Mui-focused fieldset': {
                      borderColor: '#000000',
                    },
                  },
                  '& .MuiInputBase-root': {
                    height: 48,
                    width: 179,
                  },
                }}
              />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography
                sx={{
                  fontFamily: 'shabnam',
                  fontWeight: 700,
                  fontSize: '14px',
                }}
              >
                تعداد اعضا
              </Typography>
              <TextField
                sx={{
                  '& label.Mui-focused': {
                    color: '#000000',
                  },
                  '  & .MuiOutlinedInput-root': {
                    ' &.Mui-focused fieldset': {
                      borderColor: '#000000',
                    },
                  },
                  '& .MuiInputBase-root': {
                    height: 48,
                    width: 179,
                  },
                }}
              />
            </Box>{' '}
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography
                sx={{
                  fontFamily: 'shabnam',
                  fontWeight: 700,
                  fontSize: '14px',
                }}
              >
                حوزه فعالیت شرکت
              </Typography>
              <TextField
                sx={{
                  '& label.Mui-focused': {
                    color: '#000000',
                  },
                  '  & .MuiOutlinedInput-root': {
                    ' &.Mui-focused fieldset': {
                      borderColor: '#000000',
                    },
                  },
                  '& .MuiInputBase-root': {
                    height: 48,
                    width: 354,
                  },
                }}
              />
            </Box>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography
              sx={{ fontFamily: 'shabnam', fontSize: '14px', fontWeight: 700 }}
            >
              آدرس شرکت
            </Typography>
            <TextareaAutosize maxRows={4} style={{ width: 600, height: 155 }} />
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography
              sx={{
                fontFamily: 'shabnam',
                fontSize: '20px',
                fontWeight:500,
                paddingBlock: 3,
              }}
            >
              اطلاعات آگهی
            </Typography>
            <TextField
              fullWidth
              sx={{
                '& label.Mui-focused': {
                  color: '#000000',
                },
                '  & .MuiOutlinedInput-root': {
                  ' &.Mui-focused fieldset': {
                    borderColor: '#000000',
                  },
                },
                '& .MuiInputBase-root': {
                  height: 48,
                  width: 760,
                },
              }}
            />
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography
              sx={{
                fontFamily: 'shabnam',
                fontSize: '14px',
                fontWeight: 700,
                paddingBlock: 2,
              }}
            >
              احراز
            </Typography>
            <TextareaAutosize maxRows={4} style={{ width: 600, height: 155 }} />
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography
              sx={{
                fontFamily: 'shabnam',
                fontSize: '14px',
                fontWeight: 700,
                paddingBlock: 2,
              }}
            >
              مزایا
            </Typography>
            <TextareaAutosize maxRows={4} style={{ width: 600, height: 155 }} />
          </Box>
          <Box>
            <Typography
              sx={{
                fontFamily: 'shabnam',
                fontSize: '14px',
                fontWeight: 700,
                paddingBlock: 2,
              }}
            >
              نوع قرارداد
            </Typography>
            {''}
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                gap: 4,
                paddingBottom: 4,
              }}
            >
              <Typography
                sx={{
                  fontFamily: 'shabnam',
                  fontSize: '12px',
                  fontWeight: 650,
                  paddingBlock: 2,
                }}
              >
                تمام وقت
              </Typography>
              <Checkbox />

              <Typography
                sx={{
                  fontFamily: 'shabnam',
                  fontSize: '12px',
                  fontWeight: 650,
                  paddingBlock: 2,
                }}
              >
                نیمه وقت
              </Typography>
              <Checkbox />

              <Typography
                sx={{
                  fontFamily: 'shabnam',
                  fontSize: '12px',
                  fontWeight: 650,
                  paddingBlock: 2,
                }}
              >
                دورکاری
              </Typography>
              <Checkbox />

              <Typography
                sx={{
                  fontFamily: 'shabnam',
                  fontSize: '12px',
                  fontWeight: 650,
                  paddingBlock: 2,
                }}
              >
                کاراموزی
              </Typography>
              <Checkbox />
            </Box>
          </Box>
          <Box>
            <Typography
              sx={{
                fontFamily: 'shabnam',
                fontSize: '12px',
                fontWeight: 650,
                paddingBlock: 2,
              }}
            >
              نمایش شماره تماس و اطلاعات موسسه
              <Checkbox />
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Button
              variant="contained"
              sx={{
                color: 'black',
                bgcolor: '#DDBEDF',
                fontFamily: 'shabnam',
                height: '48px',
                width: '457px',
                ':hover': { bgcolor: '#664482' },
              }}
            >
              انتشار آگهی
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default AddingAd;
