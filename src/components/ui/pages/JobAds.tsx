import {
  Container,
  Box,
  Typography,
  MenuItem,
  Avatar,
  Button,
} from '@mui/material';
import Select from '@mui/material/Select';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import image from '../../../assets/uiImagres/JobAd.svg';
const JobAds = () => {
  return (
    <Container>
      <Box
        sx={{
          marginTop: 7,
          background:
            'linear-gradient(263.12deg, #F2EAE8 31.41%, #C7D0D8 103.65%)',
          display: 'flex',
          justifyContent: 'space-evenly',
        }}
      >
        <Box sx={{ padding: 13 }}>
          <Typography
            align="center"
            sx={{ fontFamily: 'shabnam', fontWeight: 700, fontSize: '36px' }}
          >
            آگهی ها
          </Typography>
        </Box>
        <Box
          width={'693.75px'}
          height={'302px'}
          sx={{ objectFit: 'cover' }}
          component={'img'}
          src={image}
        />
      </Box>
      <Box sx={{ paddingTop: 8, paddingRight: 25 }}>
        <Typography
          sx={{ fontFamily: 'shabnam', fontWeight: 700, fontSize: '24px' }}
        >
          اگهی های طراحی ui
        </Typography>
      </Box>
      {/* CARTS */}
      <Box sx={{ p: 3, display: 'flex', justifyContent: 'space-between' }}>
        {/* filter cart */}
        <Box
          sx={{
            width: '265px',
            boxShadow: '2px 3px #c0c0c0',
          }}
        >
          <Box
            sx={{
              bgcolor: '#664482',
              color: '#fff',
              display: 'flex',
              justifyContent: 'space-between',
              p: 2,
            }}
          >
            <Typography sx={{ fontFamily: 'shabnam', fontWeight: 500 }}>
              فیلتر اگهی براساس{' '}
            </Typography>
            <FilterAltIcon />
          </Box>
          <Select
            sx={{ margin: 2, width: '226px' }}
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
          >
            <MenuItem disabled value="">
              <em style={{ fontFamily: 'shabnam' }}>نوع همکاری </em>
            </MenuItem>
            <MenuItem sx={{ fontFamily: 'shabnam', fontWeight: 300 }}>
              تمام وقت
            </MenuItem>
            <MenuItem sx={{ fontFamily: 'shabnam', fontWeight: 300 }}>
              پارت تایم{' '}
            </MenuItem>
            <MenuItem sx={{ fontFamily: 'shabnam', fontWeight: 300 }}>
              کاراموزی
            </MenuItem>
            <MenuItem sx={{ fontFamily: 'shabnam', fontWeight: 300 }}>
              دورکاری
            </MenuItem>
          </Select>

          <Select
            sx={{ margin: 2, width: '226px' }}
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
          >
            <MenuItem disabled>
              <em style={{ fontFamily: 'shabnam' }}>شهر </em>
            </MenuItem>
            <MenuItem sx={{ fontFamily: 'shabnam', fontWeight: 500 }}>
              تهران
            </MenuItem>
            <MenuItem sx={{ fontFamily: 'shabnam', fontWeight: 500 }}>
              تبریز
            </MenuItem>
            <MenuItem sx={{ fontFamily: 'shabnam', fontWeight: 500 }}>
              مشهد
            </MenuItem>
            <MenuItem sx={{ fontFamily: 'shabnam', fontWeight: 500 }}>
              اصفهان
            </MenuItem>
          </Select>

          <Select
            sx={{ margin: 2, width: '226px' }}
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
          >
            <MenuItem disabled>
              <em style={{ fontFamily: 'shabnam' }}>زمینه فعالیت</em>
            </MenuItem>
            <MenuItem sx={{ fontFamily: 'shabnam', fontWeight: 500 }}>
              پزشکی
            </MenuItem>
            <MenuItem sx={{ fontFamily: 'shabnam', fontWeight: 500 }}>
              صنعت
            </MenuItem>
            <MenuItem sx={{ fontFamily: 'shabnam', fontWeight: 500 }}>
              مهندسی
            </MenuItem>
            <MenuItem sx={{ fontFamily: 'shabnam', fontWeight: 500 }}>
              اموزشی
            </MenuItem>
          </Select>
        </Box>
        {/* jobs cart */}
        <Box
          sx={{
            width: '265px',
            boxShadow: '2px 3px #c0c0c0',
            borderRadius: '10px',
          }}
        >
          <Box sx={{ p: 3, paddingRight: 12 }}>
            <Avatar
              src={
                'https://cms-wp.bigcommerce.com/wp-content/uploads/2015/03/buying-from-alibaba-798x457.jpg'
              }
              sx={{ width: '70px', height: '70px', objectFit: 'cover' }}
            />
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              textAlign: 'center',
              gap: 2,
            }}
          >
            <Typography sx={{ fontFamily: 'shabnam', fontWeight: 700 }}>
              طراحui/ux
            </Typography>
            <Typography sx={{ fontFamily: 'shabnam', fontWeight: 500 }}>
              تهران
            </Typography>
            <Typography sx={{ fontFamily: 'shabnam', fontWeight: 500 }}>
              2روز پیش
            </Typography>
            <Box
            // sx={{width:'48px'}}
            >
              <Button
                variant="contained"
                sx={{
                  bgcolor: '#D271B7',
                  ':hover': { bgcolor: '#664482' },
                  fontFamily: 'shabnam',
                }}
              >
                ارسال رزومه
              </Button>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            width: '265px',
            boxShadow: '2px 3px #c0c0c0',
            borderRadius: '10px',
          }}
        >
          <Box sx={{ p: 3, paddingRight: 12 }}>
            <Avatar
              src={
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzov_BNg52rm6Mz-hlxf5_ZfgchPM20k4JOg&usqp=CAU'
              }
              sx={{ width: '70px', height: '70px' }}
            />
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              textAlign: 'center',
              gap: 2,
            }}
          >
            <Typography sx={{ fontFamily: 'shabnam', fontWeight: 700 }}>
              طراحui/ux
            </Typography>
            <Typography sx={{ fontFamily: 'shabnam', fontWeight: 500 }}>
              تهران
            </Typography>
            <Typography sx={{ fontFamily: 'shabnam', fontWeight: 500 }}>
              2روز پیش
            </Typography>
            <Box
            // sx={{width:'48px'}}
            >
              <Button
                variant="contained"
                sx={{
                  bgcolor: '#D271B7',
                  ':hover': { bgcolor: '#664482' },
                  fontFamily: 'shabnam',
                }}
              >
                ارسال رزومه
              </Button>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            width: '265px',
            boxShadow: '2px 3px #c0c0c0',
            borderRadius: '10px',
          }}
        >
          <Box sx={{ p: 3, paddingRight: 12 }}>
            <Avatar
              src={
                'https://cdn-1.webcatalog.io/catalog/snapp/snapp-icon-filled.png'
              }
              sx={{ width: '70px', height: '70px' }}
            />
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              textAlign: 'center',
              gap: 2,
            }}
          >
            <Typography sx={{ fontFamily: 'shabnam', fontWeight: 700 }}>
              طراحui/ux
            </Typography>
            <Typography sx={{ fontFamily: 'shabnam', fontWeight: 500 }}>
              تهران
            </Typography>
            <Typography sx={{ fontFamily: 'shabnam', fontWeight: 500 }}>
              2روز پیش
            </Typography>
            <Box
            // sx={{width:'48px'}}
            >
              <Button
                variant="contained"
                sx={{
                  bgcolor: '#D271B7',
                  ':hover': { bgcolor: '#664482' },
                  fontFamily: 'shabnam',
                }}
              >
                ارسال رزومه
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
      {/* CARTS */}
      <Box sx={{ paddingTop: 5, paddingRight: 23 }}>
        <Typography
          sx={{ fontFamily: 'shabnam', fontWeight: 700, fontSize: '24px' }}
        >
          اگهی های برنامه نویسی{' '}
        </Typography>
      </Box>
      {/* C */}
      <Box
        sx={{
          p: 3,
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Box
          sx={{
            width: '265px',
            height: '230px',
            boxShadow: '2px 3px #c0c0c0',
            borderRadius: '10px',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              textAlign: 'center',
              alignItems: 'center',
              gap: 2,
              marginTop: 5,
            }}
          >
            <Typography
              sx={{ fontFamily: 'shabnam', fontWeight: 700, color: '#9747FF' }}
            >
              رزومه نداری؟
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ fontFamily: 'shabnam', fontWeight: 600 }}
            >
              همین حالا درکمترین
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ fontFamily: 'shabnam', fontWeight: 600 }}
            >
              زمان{' '}
              <span style={{ color: '#9747FF', fontFamily: 'shabnam' }}>
                رزومتو
              </span>{' '}
              بساز .
            </Typography>
            <Box
            // sx={{width:'48px'}}
            >
              <Button
                variant="contained"
                sx={{
                  bgcolor: '#fff',
                  color: '#D271B7',
                  ':hover': { bgcolor: '#d271b7', color: '#fff' },
                  fontFamily: 'shabnam',
                }}
              >
                ساخت رزومه
              </Button>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            width: '265px',
            boxShadow: '2px 3px #c0c0c0',
            borderRadius: '10px',
          }}
        >
          <Box sx={{ p: 3, paddingRight: 12 }}>
            <Avatar
              src={
                'https://cdn-1.webcatalog.io/catalog/snapp/snapp-icon-filled.png'
              }
              sx={{ width: '70px', height: '70px' }}
            />
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              textAlign: 'center',
              gap: 2,
              marginBottom: 9,
            }}
          >
            <Typography sx={{ fontFamily: 'shabnam', fontWeight: 700 }}>
              طراحui/ux
            </Typography>
            <Typography sx={{ fontFamily: 'shabnam', fontWeight: 500 }}>
              تهران
            </Typography>
            <Typography sx={{ fontFamily: 'shabnam', fontWeight: 500 }}>
              2روز پیش
            </Typography>
            <Box
            // sx={{width:'48px'}}
            >
              <Button
                variant="contained"
                sx={{
                  bgcolor: '#D271B7',
                  ':hover': { bgcolor: '#664482' },
                  fontFamily: 'shabnam',
                }}
              >
                ارسال رزومه
              </Button>
            </Box>
          </Box>
        </Box>
        {/*  */}
        <Box
          sx={{
            width: '265px',
            boxShadow: '2px 3px #c0c0c0',
            borderRadius: '10px',
          }}
        >
          <Box sx={{ p: 3, paddingRight: 12 }}>
            <Avatar
              src={
                'https://cdn-1.webcatalog.io/catalog/snapp/snapp-icon-filled.png'
              }
              sx={{ width: '70px', height: '70px' }}
            />
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              textAlign: 'center',
              gap: 2,
            }}
          >
            <Typography sx={{ fontFamily: 'shabnam', fontWeight: 700 }}>
              طراحui/ux
            </Typography>
            <Typography sx={{ fontFamily: 'shabnam', fontWeight: 500 }}>
              تهران
            </Typography>
            <Typography sx={{ fontFamily: 'shabnam', fontWeight: 500 }}>
              2روز پیش
            </Typography>
            <Box
            // sx={{width:'48px'}}
            >
              <Button
                variant="contained"
                sx={{
                  bgcolor: '#D271B7',
                  ':hover': { bgcolor: '#664482' },
                  fontFamily: 'shabnam',
                }}
              >
                ارسال رزومه
              </Button>
            </Box>
          </Box>
        </Box>
        {/*  */}
        <Box
          sx={{
            width: '265px',
            boxShadow: '2px 3px #c0c0c0',
            borderRadius: '10px',
          }}
        >
          <Box sx={{ p: 3, paddingRight: 12 }}>
            <Avatar
              src={
                'https://cdn-1.webcatalog.io/catalog/snapp/snapp-icon-filled.png'
              }
              sx={{ width: '70px', height: '70px' }}
            />
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              textAlign: 'center',
              gap: 2,
            }}
          >
            <Typography sx={{ fontFamily: 'shabnam', fontWeight: 700 }}>
              طراحui/ux
            </Typography>
            <Typography sx={{ fontFamily: 'shabnam', fontWeight: 500 }}>
              تهران
            </Typography>
            <Typography sx={{ fontFamily: 'shabnam', fontWeight: 500 }}>
              2روز پیش
            </Typography>
            <Box
            // sx={{width:'48px'}}
            >
              <Button
                variant="contained"
                sx={{
                  bgcolor: '#D271B7',
                  ':hover': { bgcolor: '#664482' },
                  fontFamily: 'shabnam',
                }}
              >
                ارسال رزومه
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
      {/*  */}
      <Box sx={{ paddingTop: 5, paddingRight: 23 }}>
        <Typography
          sx={{ fontFamily: 'shabnam', fontWeight: 700, fontSize: '24px' }}
        >
          اگهی های طراحی ui
        </Typography>
      </Box>
      <Box
        sx={{
          p: 3,
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Box
          sx={{
            width: '265px',
            height: '230px',
            boxShadow: '2px 3px #c0c0c0',
            borderRadius: '10px',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              textAlign: 'center',
              alignItems: 'center',
              gap: 2,
              marginTop: 5,
            }}
          >
            <Typography
              sx={{ fontFamily: 'shabnam', fontWeight: 700, color: '#9747FF' }}
            >
              رزومه نداری؟
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ fontFamily: 'shabnam', fontWeight: 600 }}
            >
              همین حالا درکمترین
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ fontFamily: 'shabnam', fontWeight: 600 }}
            >
              زمان{' '}
              <span style={{ color: '#9747FF', fontFamily: 'shabnam' }}>
                رزومتو
              </span>{' '}
              بساز .
            </Typography>
            <Box
            // sx={{width:'48px'}}
            >
              <Button
                variant="contained"
                sx={{
                  bgcolor: '#fff',
                  color: '#D271B7',
                  ':hover': { bgcolor: '#d271b7', color: '#fff' },
                  fontFamily: 'shabnam',
                }}
              >
                ساخت رزومه
              </Button>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            width: '265px',
            boxShadow: '2px 3px #c0c0c0',
            borderRadius: '10px',
          }}
        >
          <Box sx={{ p: 3, paddingRight: 12 }}>
            <Avatar
              src={
                'https://cdn-1.webcatalog.io/catalog/snapp/snapp-icon-filled.png'
              }
              sx={{ width: '70px', height: '70px' }}
            />
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              textAlign: 'center',
              gap: 2,
              marginBottom: 9,
            }}
          >
            <Typography sx={{ fontFamily: 'shabnam', fontWeight: 700 }}>
              طراحui/ux
            </Typography>
            <Typography sx={{ fontFamily: 'shabnam', fontWeight: 500 }}>
              تهران
            </Typography>
            <Typography sx={{ fontFamily: 'shabnam', fontWeight: 500 }}>
              2روز پیش
            </Typography>
            <Box
            // sx={{width:'48px'}}
            >
              <Button
                variant="contained"
                sx={{
                  bgcolor: '#D271B7',
                  ':hover': { bgcolor: '#664482' },
                  fontFamily: 'shabnam',
                }}
              >
                ارسال رزومه
              </Button>
            </Box>
          </Box>
        </Box>
        {/*  */}
        <Box
          sx={{
            width: '265px',
            boxShadow: '2px 3px #c0c0c0',
            borderRadius: '10px',
          }}
        >
          <Box sx={{ p: 3, paddingRight: 12 }}>
            <Avatar
              src={
                'https://cdn-1.webcatalog.io/catalog/snapp/snapp-icon-filled.png'
              }
              sx={{ width: '70px', height: '70px' }}
            />
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              textAlign: 'center',
              gap: 2,
            }}
          >
            <Typography sx={{ fontFamily: 'shabnam', fontWeight: 700 }}>
              طراحui/ux
            </Typography>
            <Typography sx={{ fontFamily: 'shabnam', fontWeight: 500 }}>
              تهران
            </Typography>
            <Typography sx={{ fontFamily: 'shabnam', fontWeight: 500 }}>
              2روز پیش
            </Typography>
            <Box
            // sx={{width:'48px'}}
            >
              <Button
                variant="contained"
                sx={{
                  bgcolor: '#D271B7',
                  ':hover': { bgcolor: '#664482' },
                  fontFamily: 'shabnam',
                }}
              >
                ارسال رزومه
              </Button>
            </Box>
          </Box>
        </Box>
        {/*  */}
        <Box
          sx={{
            width: '265px',
            boxShadow: '2px 3px #c0c0c0',
            borderRadius: '10px',
          }}
        >
          <Box sx={{ p: 3, paddingRight: 12 }}>
            <Avatar
              src={
                'https://cdn-1.webcatalog.io/catalog/snapp/snapp-icon-filled.png'
              }
              sx={{ width: '70px', height: '70px' }}
            />
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              textAlign: 'center',
              gap: 2,
            }}
          >
            <Typography sx={{ fontFamily: 'shabnam', fontWeight: 700 }}>
              طراحui/ux
            </Typography>
            <Typography sx={{ fontFamily: 'shabnam', fontWeight: 500 }}>
              تهران
            </Typography>
            <Typography sx={{ fontFamily: 'shabnam', fontWeight: 500 }}>
              2روز پیش
            </Typography>
            <Box
            // sx={{width:'48px'}}
            >
              <Button
                variant="contained"
                sx={{
                  bgcolor: '#D271B7',
                  ':hover': { bgcolor: '#664482' },
                  fontFamily: 'shabnam',
                }}
              >
                ارسال رزومه
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
      {/*  */}
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
            marginRight: '14rem',
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
    </Container>
    // Footer
  );
};

export default JobAds;
