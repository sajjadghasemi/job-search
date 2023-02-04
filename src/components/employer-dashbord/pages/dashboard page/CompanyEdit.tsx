import {
  Box,
  Typography,
  Divider,
  Avatar,
  TextField,
  styled,
  Button,
} from '@mui/material';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { editReducer } from '../../../../store/employersSlice';
import { useNavigate } from 'react-router-dom';

type CompanyEditInputTypes = {
  companyName: string;
  activityTitle: string;
  city: string;
  address: string;
  phoneNumber: string;
  describtions: string;
  email: string;
  membersCount: string;
  aboutCompany: string;
  estYear: string;
};

const CompanyEdit = () => {
  const dispatch = useDispatch();

  let schema = yup.object().shape({
    email: yup.string().email().required('ایمیل را وارد کنید'),
    password: yup.string().min(4).max(10).required('رمزعبور را وارد کنید'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CompanyEditInputTypes>();

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<CompanyEditInputTypes> = data => {
    console.log(data);
    dispatch(
      editReducer({
        companyName: data.companyName,
        activityTitle: data.activityTitle,
        city: data.city,
        address: data.address,
        phoneNumber: data.phoneNumber,
        describtion: data.describtions,
        email: data.email,
        membersCount: data.membersCount,
        aboutCompany: data.aboutCompany,
        estYear: data.estYear,
      })
    );
    navigate('/employer/company');
  };

  const StyledBorderTextField = styled(TextField)`
    & label.Mui-focused {
      color: #000000;
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
        sx={{
          display: 'flex',
          paddingBlock: '1rem',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box sx={{ marginRight: '37rem' }}>
          <Avatar
            sx={{
              bgcolor: '#664482',
              height: '70px',
              width: '70px',
            }}
          />
        </Box>
        {/* Input Container */}
        <Box component={'form'} onSubmit={handleSubmit(onSubmit)}>
          <Box sx={{ paddingBlock: '1rem' }}>
            <Typography
              sx={{ fontFamily: 'shabnam', fontWeight: 500 }}
              variant="body1"
            >
              نام شرکت
            </Typography>
            <StyledBorderTextField
              {...register('companyName', { required: true })}
              sx={{
                width: '457px',
                borderRadius: '50%',
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
              {...register('activityTitle', { required: true })}
              sx={{
                width: '457px',
                borderRadius: '50%',
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
              {...register('city', { required: true })}
              sx={{
                width: '457px',
                borderRadius: '50%',
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
              {...register('address', { required: true })}
              sx={{
                width: '457px',
                borderRadius: '50%',
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
              {...register('phoneNumber', { required: true })}
              sx={{
                width: '457px',
                borderRadius: '50%',
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
              {...register('describtions', { required: true })}
              sx={{
                width: '457px',
                borderRadius: '50%',
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
              {...register('email', { required: true })}
              sx={{
                width: '457px',
                borderRadius: '50%',
              }}
              fullWidth
            />
          </Box>
          <Box sx={{ paddingBlock: '1rem' }}>
            <Typography
              sx={{ fontFamily: 'shabnam', fontWeight: 500 }}
              variant="body1"
            >
              تعداد کارمندان
            </Typography>
            <StyledBorderTextField
              {...register('membersCount', { required: true })}
              sx={{
                width: '457px',
                borderRadius: '50%',
              }}
              type={'number'}
              fullWidth
            />
          </Box>
          <Box sx={{ paddingBlock: '1rem' }}>
            <Typography
              sx={{ fontFamily: 'shabnam', fontWeight: 500 }}
              variant="body1"
            >
              درباره شرکت
            </Typography>
            <StyledBorderTextField
              {...register('aboutCompany', { required: true })}
              sx={{
                width: '457px',
                borderRadius: '50%',
              }}
              fullWidth
            />
          </Box>
          <Box sx={{ paddingBlock: '1rem' }}>
            <Typography
              sx={{ fontFamily: 'shabnam', fontWeight: 500 }}
              variant="body1"
            >
              سال تاسیس
            </Typography>
            <StyledBorderTextField
              {...register('estYear', { required: true })}
              sx={{
                width: '457px',
                borderRadius: '50%',
              }}
              fullWidth
              type={'number'}
            />
          </Box>
          {/*  */}
          <Button
            sx={{
              color: 'black',
              bgcolor: '#DDBEDF',
              fontFamily: 'shabnam',
              height: '48px',
              width: '457px',
              ':hover': { bgcolor: '#664482' },
            }}
            type="submit"
          >
            ذخیره
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default CompanyEdit;
