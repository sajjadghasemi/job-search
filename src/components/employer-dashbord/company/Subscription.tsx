import { Typography, Box, Button } from '@mui/material';
import Header from '../pages/dashboard layout/Header';
import image from './subSvg.svg';

const Subscription = () => {
  return (
    <>
      <Header />
      <Box sx={{ p: 3 }}>
        <Box sx={{ p: 2, dispaly: 'flex' }}>
          <Typography
            sx={{ fontFamily: 'shabnam', fontWeight: 700, fontSize: '20px' }}
          >
            با
            <strong style={{ color: '#664482' }}> خرید اشتراک </strong>
            میتوانید به راحتی آگهی خود را ثبت و بروز رسانی کنید.
          </Typography>
        </Box>
        <Box sx={{width:'80rem',display:'flex'}} >

        <Box sx={{width:'45%'}}>
        <img style={{width:'70rem',height:500,objectFit:'contain',padding:'1rem'}} src={image} alt='/'/>
        </Box>

        <Box sx={{ width:"50%",p:2,display:'flex',gap:2,justifyContent:'space-between',flexWrap:'wrap'}}>
        <Box sx={{display:'flex',flexDirection:'column', alignItems:'center',bgclor:'#FFFFFF',boxShadow:'4px 4px 4px #b0b0b0e0',width:"312px",height:'315px',gap:7,paddingBlock:'5px',borderRadius:'15px'}}>
            <Typography sx={{fontFamily:"shabnam",fontWeight:700,fontSize:'14px'}}>اشتراک 3 ماهانه</Typography>
            <Typography sx={{fontFamily:"shabnam",fontWeight:700,fontSize:'14px'}}>آگهی نامحدود</Typography>
            <Typography sx={{fontFamily:"shabnam",fontWeight:700,fontSize:'14px'}}>170000تومان</Typography>
           <Button variant="contained" sx={{fontFamily:'shabnam',color:'black',bgcolor:"#FAD167",':hover':{bgcolor:'#664482'},width:'237px'}}>خرید اشتراک </Button>

        </Box>
              <Box sx={{display:'flex',flexDirection:'column', alignItems:'center',bgclor:'#FFFFFF',boxShadow:'4px 4px 4px #b0b0b0e0',width:"312px",height:'315px',gap:7,paddingBlock:'5px',borderRadius:'15px'}}>
            <Typography sx={{fontFamily:"shabnam",fontWeight:700,fontSize:'14px'}}>اشتراک 3 ماهانه</Typography>
            <Typography sx={{fontFamily:"shabnam",fontWeight:700,fontSize:'14px'}}>آگهی نامحدود</Typography>
            <Typography sx={{fontFamily:"shabnam",fontWeight:700,fontSize:'14px'}}>170000تومان</Typography>
           <Button variant="contained" sx={{fontFamily:'shabnam',color:'black',bgcolor:"#FAD167",':hover':{bgcolor:'#664482'},width:'237px'}}>خرید اشتراک </Button>

        </Box>
              <Box sx={{display:'flex',flexDirection:'column', alignItems:'center',bgclor:'#FFFFFF',boxShadow:'4px 4px 4px #b0b0b0e0',width:"312px",height:'315px',gap:7,paddingBlock:'5px',borderRadius:'15px'}}>
            <Typography sx={{fontFamily:"shabnam",fontWeight:700,fontSize:'14px'}}>اشتراک 3 ماهانه</Typography>
            <Typography sx={{fontFamily:"shabnam",fontWeight:700,fontSize:'14px'}}>آگهی نامحدود</Typography>
            <Typography sx={{fontFamily:"shabnam",fontWeight:700,fontSize:'14px'}}>170000تومان</Typography>
           <Button variant="contained" sx={{fontFamily:'shabnam',color:'black',bgcolor:"#FAD167",':hover':{bgcolor:'#664482'},width:'237px'}}>خرید اشتراک </Button>

        </Box>
        <Box sx={{display:'flex',flexDirection:'column', alignItems:'center',bgclor:'#FFFFFF',boxShadow:'4px 4px 4px #b0b0b0e0',width:"312px",height:'315px',gap:7,paddingBlock:'5px',borderRadius:'15px'}}>            <Typography sx={{fontFamily:"shabnam",fontWeight:700,fontSize:'14px'}}>اشتراک 3 ماهانه</Typography>
            <Typography sx={{fontFamily:"shabnam",fontWeight:700,fontSize:'14px'}}>آگهی نامحدود</Typography>
            <Typography sx={{fontFamily:"shabnam",fontWeight:700,fontSize:'14px'}}>170000تومان</Typography>
           <Button variant="contained" sx={{fontFamily:'shabnam',color:'black',bgcolor:"#FAD167",':hover':{bgcolor:'#664482'},width:'237px'}}>خرید اشتراک </Button>

        </Box>
        </Box>
        {/*  */}
   
        {/*  */}


      
        </Box>
   
      </Box>
    </>
  );
};

export default Subscription;
