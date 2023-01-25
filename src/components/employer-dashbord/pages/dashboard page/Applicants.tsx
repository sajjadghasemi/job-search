import {
  Box,
  Typography,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  Avatar,
} from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';


const Applicants = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        width: '70%',
        flexDirection: 'column',
        marginRight: '20rem',
        position: 'absolute',
        // bgcolor: '#FCFCFC',
        paddingBlock: '1.5rem',
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 4 }}>
        <Box>
          <Typography
            variant="h6"
            sx={{ fontFamily: 'shabnam', fontWeight: 700, color: '#664482' }}
          >
            {' '}
            متقاضیان کار{' '}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: 4,position:'relative',right:'2rem' }}>
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
      {/* Table */}
      <Box sx={{ padding: 4,display:'flex',gap:2 }}>

        <Box sx={{display:'flex',justifyContent:'center',flexDirection:"column"}}>
     

          <Box sx={{border:'1px solid black',height:'48px',width:'163px',bgcolor:'#F5F5F5'}}><Typography align='center' sx={{fontFamily:'shabnam',fontWeight:600,p:2}}>نوع آگهی</Typography></Box>
          <Box sx={{display:"flex",flexDirection:"column",p:2,gap:8,bgcolor:"#FBFBFB",width:'132px',height:'338px',alignItems:"center"}}>

          <Box sx={{fontSize:"20px",p:2}}>1</Box>
          <Box sx={{fontSize:"20px",p:3}}>1</Box>
          <Box sx={{fontSize:"20px"}}>1</Box>

          </Box>
      
          
        </Box>
          {/*  */}
          <Box sx={{display:'flex',justifyContent:'center',flexDirection:"column"}}>
     
     <Box sx={{border:'1px solid black',height:'48px',width:'163px',bgcolor:'#F5F5F5'}}><Typography align='center' sx={{fontFamily:'shabnam',fontWeight:600,p:2}}>عکس متقاضی </Typography></Box>
     <Box sx={{display:"flex",flexDirection:"column",p:2,gap:8,bgcolor:"#FBFBFB",width:'132px',height:'338px',alignItems:"center"}}>

     <Box sx={{fontSize:"20px",p:2}}>
      <Avatar />
     </Box>
     <Box sx={{fontSize:"20px"}}>
     <Avatar />
    </Box>
     <Box sx={{fontSize:"20px",p:1}}>
     <Avatar />
      </Box>

     </Box>
 
     
   </Box>
   {/*  */}
   <Box sx={{display:'flex',justifyContent:'center',flexDirection:"column"}}>
     
     <Box sx={{border:'1px solid black',height:'48px',width:'163px',bgcolor:'#F5F5F5'}}><Typography align='center' sx={{fontFamily:'shabnam',fontWeight:600,p:2}}>نام متقاضیان</Typography></Box>
     <Box sx={{display:"flex",flexDirection:"column",p:2,gap:8,bgcolor:"#FBFBFB",width:'132px',height:'338px',alignItems:"center"}}>

     <Box sx={{fontSize:"20px",p:2}}>
      <Typography sx={{fontFamily:'shabnam',fontWeight:500}}>زهرا  اسلامی</Typography>
     </Box>
     <Box sx={{fontSize:"20px",p:3}}>
     <Typography sx={{fontFamily:'shabnam',fontWeight:500}}>هانیه توسلی</Typography>
     </Box>
     <Box sx={{fontSize:"20px"}}>
     <Typography sx={{fontFamily:'shabnam',fontWeight:500}}>رضا عابدینی</Typography>
     </Box>

     </Box>
 
     
   </Box>
  {/*  */}
  <Box sx={{display:'flex',justifyContent:'center',flexDirection:"column"}}>
     
     <Box sx={{border:'1px solid black',height:'48px',width:'163px',bgcolor:'#F5F5F5'}}><Typography align='center' sx={{fontFamily:'shabnam',fontWeight:600,p:2}}>فایل ارسال شده</Typography></Box>
     <Box sx={{display:"flex",flexDirection:"column",p:2,gap:8,bgcolor:"#FBFBFB",width:'132px',height:'338px',alignItems:"center"}}>  

     <Box sx={{fontSize:"20px",p:2}}>

      <Box sx={{display:'flex',gap:'2px'}}>
      <Typography sx={{fontFamily:'shabnam',fontWeight:500}}>فایل رزومه  </Typography>
      <DownloadIcon sx={{color:"#000000"}} />
      </Box>

     </Box>
     <Box sx={{fontSize:"20px",paddingBlock:3.2}}>
     <Box sx={{display:'flex',gap:'2px'}}>
      <Typography sx={{fontFamily:'shabnam',fontWeight:500}}>فایل رزومه  </Typography>
      <DownloadIcon sx={{color:"#000000"}} />
      </Box>
     </Box>
     <Box sx={{fontSize:"20px"}}>
     <Box sx={{display:'flex',gap:'2px'}}>
      <Typography sx={{fontFamily:'shabnam',fontWeight:500}}>فایل رزومه  </Typography>
      <DownloadIcon sx={{color:"#000000"}} />
      </Box>
     </Box>

     </Box>
 
     
   </Box>
   {/*  */}
   <Box sx={{display:'flex',justifyContent:'center',flexDirection:"column"}}>
     
     <Box sx={{border:'1px solid black',height:'48px',width:'163px',bgcolor:'#F5F5F5'}}><Typography align='center' sx={{fontFamily:'shabnam',fontWeight:600,p:2}}> وضعیت بررسی</Typography></Box>
     <Box sx={{display:"flex",flexDirection:"column",p:2,gap:8,bgcolor:"#FBFBFB",width:'132px',height:'338px',alignItems:"center"}}>

     <Box sx={{fontSize:"20px",p:2}}>
     <Typography sx={{fontFamily:'shabnam',fontWeight:500}}>درانتظار بررسی</Typography>
     </Box>
     <Box sx={{fontSize:"20px",p:3}}>
     <Typography sx={{fontFamily:'shabnam',fontWeight:500}}>تایید شده</Typography>
     </Box>
     <Box sx={{fontSize:"20px"}}>
     <Typography sx={{fontFamily:'shabnam',fontWeight:500}}>درانتظار بررسی</Typography>
     </Box>

     </Box>
 
     
   </Box>
   {/*  */}
   <Box sx={{display:'flex',justifyContent:'center',flexDirection:"column"}}>
     
     <Box sx={{border:'1px solid black',height:'48px',width:'163px',bgcolor:'#F5F5F5'}}><Typography align='center' sx={{fontFamily:'shabnam',fontWeight:600,p:2}}>نوع آگهی</Typography></Box>
     <Box sx={{display:"flex",flexDirection:"column",p:2,gap:8,bgcolor:"#FBFBFB",width:'132px',height:'338px',alignItems:"center"}}>

     <Box sx={{fontSize:"20px",p:1}}>

      <Box sx={{display:'flex'}}>
        <Typography sx={{fontFamily:'shabnam',fontWeight:500}}>تایید</Typography>
        <DoneIcon sx={{color:'#11DA0D'}} />
      </Box>
      <Box sx={{display:'flex'}}>
        <Typography sx={{fontFamily:'shabnam',fontWeight:500}}>ردمتقاضی</Typography>
        <CloseIcon sx={{color:'#C20000'}} />
      </Box>

     </Box>
     <Box sx={{fontSize:"20px"}}>
     <Box sx={{display:'flex'}}>
        <Typography sx={{fontFamily:'shabnam',fontWeight:500}}>تایید</Typography>
        <DoneIcon sx={{color:'#11DA0D'}} />
      </Box>
      <Box sx={{display:'flex'}}>
        <Typography sx={{fontFamily:'shabnam',fontWeight:500}}>ردمتقاضی</Typography>
        <CloseIcon sx={{color:'#C20000'}} />
      </Box>
     </Box>
     <Box sx={{fontSize:"20px"}}>
     <Box sx={{display:'flex'}}>
        <Typography sx={{fontFamily:'shabnam',fontWeight:500}}>تایید</Typography>
        <DoneIcon sx={{color:'#11DA0D'}} />
      </Box>
      <Box sx={{display:'flex'}}>
        <Typography sx={{fontFamily:'shabnam',fontWeight:500}}>ردمتقاضی</Typography>
        <CloseIcon sx={{color:'#C20000'}} />
      </Box>
     </Box>

     </Box>
 
     
   </Box>
      </Box>
    </Box>
  );
};

export default Applicants;
