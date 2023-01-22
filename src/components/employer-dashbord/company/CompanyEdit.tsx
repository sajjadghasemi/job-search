import { Box, Typography, Divider, Avatar, TextField, styled,Button } from '@mui/material';

const CompanyEdit = () => {
    const StyledBorderTextField = styled(TextField)`
    & label.Mui-focused {
    color: #000000;
    ;
  }
  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: #000000;
    }
  }
`;
  return (
    <Box
      sx={{
        display: 'flex',
        width: '50%',
        flexDirection: 'column',
        marginRight: '26rem',
        position: 'absolute',
        bgcolor: '#FFFFFF',
        paddingBlock: '1rem',
        marginTop: 2,
        border: '0.5px solid #00000040',
        padding: 3,
      }}
    >
      <Typography
        sx={{ fontFamily: 'shabnam', fontWeight: 700 }}
        variant="body1"
      >
        ویرایش اطلاعات
      </Typography>
      <Divider sx={{ marginTop: '0.5rem' }} />
      <Box
        sx={{ display: 'flex', paddingBlock: '1rem', flexDirection: 'column',justifyContent:'center',alignItems:"center" }}
      >
        <Box sx={{ marginRight: '37rem' }}>
          <Avatar
            sx={{
              bgcolor: '#664482',
              height: '50.83px',
              width: '50.83px',
            }}
          />
        </Box>
        {/* Input Container */}
        <Box>

        <Box sx={{ paddingBlock: '1rem' }}>
          <Typography
            sx={{ fontFamily: 'shabnam', fontWeight: 500 }}
            variant="body1"
          >
            نام شرکت
          </Typography>
          <StyledBorderTextField
            sx={{
                width:'457px',
                borderRadius:'50%'
            }}
            fullWidth
          />
        </Box>
        <Box sx={{ paddingBlock: '1rem' }}>
          <Typography
            sx={{ fontFamily: 'shabnam', fontWeight: 500 }}
            variant="body1"
          >
            زمینه فعالیت
          </Typography>
          <StyledBorderTextField
            sx={{
                width:'457px',
                borderRadius:'50%'
            }}
            fullWidth
          />
        </Box>
        <Box sx={{ paddingBlock: '1rem' }}>
          <Typography
            sx={{ fontFamily: 'shabnam', fontWeight: 500 }}
            variant="body1"
          >
            شهر
          </Typography>
          <StyledBorderTextField
            sx={{
                width:'457px',
                borderRadius:'50%'
            }}
            fullWidth
          />
        </Box>
        <Box sx={{ paddingBlock: '1rem' }}>
          <Typography
            sx={{ fontFamily: 'shabnam', fontWeight: 500 }}
            variant="body1"
          >
            آدرس
          </Typography>
          <StyledBorderTextField
            sx={{
                width:'457px',
                borderRadius:'50%'
            }}
            fullWidth
          />
        </Box>
        <Box sx={{ paddingBlock: '1rem' }}>
          <Typography
            sx={{ fontFamily: 'shabnam', fontWeight: 500 }}
            variant="body1"
          >
            شماره تماس
          </Typography>
          <StyledBorderTextField
            sx={{
                width:'457px',
                borderRadius:'50%'
            }}
            fullWidth
          />
        </Box>
        <Box sx={{ paddingBlock: '1rem' }}>
          <Typography
            sx={{ fontFamily: 'shabnam', fontWeight: 500 }}
            variant="body1"
          >
            توضیحات بیشتر
          </Typography>
          <StyledBorderTextField
            sx={{
                width:'457px',
                borderRadius:'50%'
            }}
            fullWidth
          />
        </Box>
        <Box sx={{ paddingBlock: '1rem' }}>
          <Typography
            sx={{ fontFamily: 'shabnam', fontWeight: 500 }}
            variant="body1"
          >
            ایمیل
          </Typography>
          <StyledBorderTextField
            sx={{
                width:'457px',
                borderRadius:'50%'
            }}
            fullWidth
          />
        </Box>
        {/*  */}
        <Button variant='contained' sx={{color:'black',bgcolor:'#DDBEDF',fontFamily:'shabnam',height:'48px',width:'457px',":hover":{bgcolor:'#664482'}}}>ذخیره</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default CompanyEdit;
