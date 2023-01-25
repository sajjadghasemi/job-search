import {
  Box,
  Typography,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
} from '@mui/material';

const Applicants = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        width: '50%',
        flexDirection: 'column',
        marginRight: '26rem',
        position: 'absolute',
        bgcolor: '#FCFCFC',
        paddingBlock: '1.5rem',
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 2 }}>
        <Box>
          <Typography
            variant="h6"
            sx={{ fontFamily: 'shabnam', fontWeight: 700, color: '#664482' }}
          >
            {' '}
            متقاضیان کار{' '}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <FormControl
            sx={{
              minWidth: 120,
              outline: 'none',
              borderRadius: '8px',
              '& .MuiInputLabel-root': { color: 'black', display: 'block' },
            }}
            size="small"
          >
            <InputLabel
              sx={{
                fontFamily: 'shabnam',
                fontSize: '14px',
                fontWeight: 500,
                color: 'black',
              }}
            >
              نوع آگهی
            </InputLabel>
            {/* //BUG for outline css */}
            <Select>
              <MenuItem>3</MenuItem>
              <MenuItem
                sx={{
                  fontFamily: 'shabnam',
                  fontSize: '14px',
                  fontWeight: 500,
                }}
              >
                1
              </MenuItem>
              <MenuItem
                sx={{
                  fontFamily: 'shabnam',
                  fontSize: '14px',
                  fontWeight: 500,
                }}
              >
                2
              </MenuItem>
            </Select>
          </FormControl>

          <FormControl
            sx={{
              minWidth: 120,
              outline: 'none',
              borderRadius: '8px',
              '& .MuiInputLabel-root': { color: 'black', display: 'block' },
            }}
            size="small"
          >
            <InputLabel
              sx={{
                fontFamily: 'shabnam',
                fontSize: '14px',
                fontWeight: 500,
                color: 'black',
              }}
            >
              جنسیت
            </InputLabel>
            {/* //BUG for outline css */}
            <Select>
              <MenuItem
                sx={{
                  fontFamily: 'shabnam',
                  fontSize: '14px',
                  fontWeight: 500,
                }}
              >
                مونث
              </MenuItem>
              <MenuItem
                sx={{
                  fontFamily: 'shabnam',
                  fontSize: '14px',
                  fontWeight: 500,
                }}
              >
                مذکر
              </MenuItem>
              <MenuItem
                sx={{
                  fontFamily: 'shabnam',
                  fontSize: '14px',
                  fontWeight: 500,
                }}
              >
                همه
              </MenuItem>
            </Select>
          </FormControl>

          <FormControl
            sx={{
              minWidth: 120,
              outline: 'none',
              borderRadius: '8px',
              '& .MuiInputLabel-root': { color: 'black', display: 'block' },
            }}
            size="small"
          >
            <InputLabel
              sx={{
                fontFamily: 'shabnam',
                fontSize: '14px',
                fontWeight: 500,
                color: 'black',
              }}
            >
              فیلتر
            </InputLabel>
            {/* //BUG for outline css */}
            <Select>
              <MenuItem
                sx={{
                  fontFamily: 'shabnam',
                  fontSize: '14px',
                  fontWeight: 500,
                }}
              >
                تایید شدگان
              </MenuItem>
              <MenuItem
                sx={{
                  fontFamily: 'shabnam',
                  fontSize: '14px',
                  fontWeight: 500,
                }}
              >
                در انتظار بررسی
              </MenuItem>
              <MenuItem
                sx={{
                  fontFamily: 'shabnam',
                  fontSize: '14px',
                  fontWeight: 500,
                }}
              >
                همه
              </MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
      <Box sx={{ padding: 2 }}>
        <Box sx={{display:'flex',justifyContent:'space-between'}}>
          <Box sx={{border:'1px solid black',height:'48px',marginTop:'5px'}}><Typography align='center' sx={{fontFamily:'shabnam',fontWeight:600,p:2}}>نوع آگهی</Typography></Box>
          <Box sx={{border:'1px solid black',height:'48px',marginTop:'5px'}}><Typography align='center' sx={{fontFamily:'shabnam',fontWeight:600,p:2}}>نوع آگهی</Typography></Box>
          <Box sx={{border:'1px solid black',height:'48px',marginTop:'5px'}}><Typography align='center' sx={{fontFamily:'shabnam',fontWeight:600,p:2}}>نوع آگهی</Typography></Box>
          <Box sx={{border:'1px solid black',height:'48px',marginTop:'5px'}}><Typography align='center' sx={{fontFamily:'shabnam',fontWeight:600,p:2}}>نوع آگهی</Typography></Box>
          <Box sx={{border:'1px solid black',height:'48px',marginTop:'5px'}}><Typography align='center' sx={{fontFamily:'shabnam',fontWeight:600,p:2}}>نوع آگهی</Typography></Box>
          <Box sx={{border:'1px solid black',height:'48px',marginTop:'5px'}}><Typography align='center' sx={{fontFamily:'shabnam',fontWeight:600,p:2}}>نوع آگهی</Typography></Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Applicants;
