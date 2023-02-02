import {Box, Typography, Button} from '@mui/material'
import Divider from '@mui/material/Divider'

function Card3SingleAd() {
  return (
    <div>
         <Box
        sx={{
          bgcolor: '#71D2D2',
          borderRadius: '24px',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          p: 2,
            
        }}
      >
        <Box sx={{ p: 5, alignItems: 'center', textAlign: 'center' }}>
          <Typography
            sx={{ fontFamily: 'shabnam', fontWeight: 700, fontSize: '20px' }}
          >
            برای اطلاع از فرصت های شغلی جدید ایمیل خود را ثبت کنید
          </Typography>
        </Box>
        <Box
          sx={{
            bgcolor: '#FFFFFF',
            width: '612px',
            display: 'flex',
            alignItems: 'center',
            borderRadius: '10px',
            justifyContent: 'space-between',
            p: 2,
            marginRight: '6rem',
          }}
        >
          <input
            style={{
              backgroundColor: 'transparent',
              outline: 'none',
              border: 'none',
              fontFamily: 'shabnam',
            }}
            type="text"
            placeholder="ایمیل خود را وارد کنید"
          />
          <Divider orientation="vertical" flexItem />
          <Button
            sx={{
              color: '#D271B7',
              fontFamily: 'shabnam',
              borderColor: '#D271B7',
              ':hover': { borderColor: '#664482' },
              paddingInline: 5,
            }}
            variant="outlined"
          >
            ثبت
          </Button>
        </Box>
      </Box>
    </div>
  )
}

export default Card3SingleAd