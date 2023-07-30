import '../styles/footer.css';
import '../components/nav'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Link as LinkRouter } from 'react-router-dom';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';


function Footer() {
    const pages =
    [{
      name: 'Home',
      path: '/home'
    },
    {
      name: 'Cities',
      path: '/cities'
    },
    {
      name: 'Sign In',
      path: '/signin'
    }]
    
    return (
        <footer>
            <div className="nav">
           
            <Box className="nav-footer" sx={{ flexGrow: 1,}}>
            {pages.map((page) => (
              <Button
                key={page.path}
                
                component={LinkRouter}
                to={page.path}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page.name}
              </Button>
            ))
          }
          </Box>
            
                    
                    
            
            </div>

            <div className="footer">

                <div className="others">
                    <h2>OTHER LINKS:</h2>
                    <p>LEGAL WARNING</p>
                    <p>PRIVACY POLICY</p>
                    <p>TERMS AND CONDITIONS</p>
                </div>
                <div className="contact">
                    <h2>CONTACT:</h2>
                    <p>+54 11-5555-8888</p>
                    <p>MYTINERARY@GMAIL.COM</p>
                    <p>AUTONOMOUS CITY OF BUENOS AIRES, ARGENTINA</p>
                </div>
            </div>

            <div className="icons-rrss">
                <TwitterIcon sx={{color: "white", fontSize: 40}}/>
                <FacebookRoundedIcon  sx={{color: "white", fontSize: 40}} />
                <InstagramIcon sx={{color: "white", fontSize: 40}}/>
                <YouTubeIcon sx={{color: "white", fontSize: 40}}/>
            </div>
        </footer>
    )
}

export default Footer;