import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
// import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Logo from '../images/2.png';

export default function FixedContainer() {
    return (
        <React.Fragment>
          <CssBaseline />
          
          {/* <div> */}
          {/* <img src={Logo} alt="Logo" style={{ width: 80, height: 80 , marginLeft: 60, marginBottom:200}} /> */}
          {/* <br /> */}
          {/* </div> */}

          <div className= "blur_bg" style={{marginTop: "7%"}}>
          <img src={Logo} alt="Logo" style={{ width: 80, height: 80 , marginLeft: 60}} />
          
          <Typography  component="h1" 
          sx={{ml:6,
          mt:4,  
          color:'white',
          fontSize: '45px',
          fontWeight: '1000',
          lineHeight: '-30px',
          }}>

           <strong>Keep everything</strong> 
            <br/><strong>in focus</strong> 
 
          </Typography>
            <br />
          <div className='final_blur_effect'>
          <Typography  component="h4" gutterBottom 
          sx={{ml:6, 
          color:'white',
          fontSize: '20px',
          fontfamily: 'Roobert',
          fontWeight: '500',
          lineHeight: '30px',
          
          }}>
            Achieve Razor-Sharp Detail with AI-powered photo stacking
            <br /> software.                         
          </Typography>
          </div>


          {/* </Box> */}
          </div>
        </React.Fragment>
      );
}