import '../styles/welcome.css';
// import Button from '@mui/material/Button';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider } from '@mui/material/styles';
import Theme from './themeConfig';
import Box from '@mui/material/Box';

import { Link } from 'react-router-dom';
import Banner from '../images/banner_Hero__1_-removebg-preview.png'
import { Typography } from '@mui/material';

function Welcome() {
  return (
    <>
      <ThemeProvider theme={Theme.palette}>
        <Box className="welcome" >
          <div className="callContent"><Button bsPrefix="call" as={Link} to='/cities'>Want a New Adventure?</Button>{''}</div>

          <div className="heroContent">
           <img src={Banner} alt="banner"></img>
          </div>

          <div className='textBanner'><Typography variant="h2">Find your Perfect Trip,
            designed by insiders who know and love their cities!</Typography></div>
        </Box>
      </ThemeProvider>
    </>

  )
}
export default Welcome;