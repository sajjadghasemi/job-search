import { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  TextareaAutosize,
  Checkbox,
  Button,
} from '@mui/material';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { editReducer } from '../../../../store/employersSlice';
import { useNavigate } from 'react-router-dom';
import { addAds } from '../../../../store/adsSlice';

type CompanyEditInputTypes = {
  adsInfo: string;
  salary: string;
  auth: string;
  advantages: string;
  fullTime: boolean;
  partTime: boolean;
  trainee: boolean;
  remote: boolean;
  showInfo: boolean;
};

const AddingAd = () => {
  const [skills, setSkills] = useState<React.SetStateAction<any>>([]);
  const [skillInput, setSkillInput] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const ads = useSelector((state: any) => state.adsSlice.ads);
  const currentEmployerId = useSelector(
    (state: any) => state.employersSlice.currentEmployer.id
  );

  const addSkill = () => {
    if (!skillInput) return alert('Type Something!!!');
    const newSkill: string = skillInput;
    const list: string[] = [...skills];
    list.push(newSkill);
    setSkills(list);
    setSkillInput('');
  };

  let schema = yup.object().shape({
    email: yup.string().email().required('ایمیل را وارد کنید'),
    password: yup.string().min(4).max(10).required('رمزعبور را وارد کنید'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CompanyEditInputTypes>();

  const onSubmit: SubmitHandler<CompanyEditInputTypes> = data => {
    console.log(data);
    dispatch(
      addAds({
        employerId: currentEmployerId,
        adsInfo: data.adsInfo,
        salary: data.salary,
        auth: data.auth,
        advantages: data.advantages,
        fullTime: data.fullTime,
        partTime: data.partTime,
        trainee: data.trainee,
        remote: data.remote,
        showInfo: data.showInfo,
        skills: skills,
      })
    );
    // navigate("/employer/company");
  };

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
      <Box
        component={'form'}
        onSubmit={handleSubmit(onSubmit)}
        sx={{ marginTop: 2 }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography
            sx={{
              fontFamily: 'shabnam',
              fontSize: '20px',
              fontWeight: 500,
              paddingBlock: 3,
            }}
          >
            اطلاعات آگهی
          </Typography>
          <TextField
            {...register('adsInfo', { required: true })}
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
              },
            }}
          />
          <Typography
            sx={{
              fontFamily: 'shabnam',
              fontSize: '20px',
              fontWeight: 500,
              paddingBlock: 3,
            }}
          >
            حقوق
          </Typography>
          <TextField
            {...register('salary', { required: true })}
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
              },
            }}
          />
          <Typography
            sx={{
              fontFamily: 'shabnam',
              fontSize: '20px',
              fontWeight: 500,
              paddingBlock: 3,
            }}
          >
            مهارت ها
          </Typography>
          <TextField
            onChange={(event: any) => {
              setSkillInput(event.target.value);
            }}
            value={skillInput}
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
              },
            }}
          />
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 1,
              margin:'1rem'
            }}
          >
            {skills &&
              skills.map((item: any) => (
                <Typography
                  variant="subtitle2"
                  sx={{
                    border: '1px solid limegreen',
                    padding: '.2rem',
                    borderRadius: '4px',
                  }}
                >
                  {item}
                </Typography>
              ))}
          </Box>
          <Button
            sx={{
              width: '10rem',
              fontFamily: 'shabnam',
              background: 'green',
              color: '#FFFFFF',
              borderRadius: '5px',
              ':hover': {
                background: 'darkgreen',
                color: '#FFFFFF',
              },
            }}
            onClick={addSkill}
          >
            افزودن مهارت
          </Button>
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
          <TextareaAutosize
            {...register('auth', { required: true })}
            maxRows={4}
            style={{ width: 600, height: 155 }}
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
            مزایا
          </Typography>
          <TextareaAutosize
            {...register('advantages', { required: true })}
            maxRows={4}
            style={{ width: 600, height: 155 }}
          />
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
            <Checkbox {...register('fullTime')} />

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
            <Checkbox {...register('partTime')} />

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
            <Checkbox {...register('remote')} />

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
            <Checkbox {...register('trainee')} />
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
            <Checkbox {...register('showInfo')} />
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
            type="submit"
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
      </Box>
    </Box>
  );
};

export default AddingAd;
