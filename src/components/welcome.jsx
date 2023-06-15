import '../styles/welcome.css';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { Link } from 'react-router-dom';
import Banner from '../images/banner Hero.png'

function Welcome(){
return (
    <div className="welcome">
      <img src={Banner} alt="home"></img>
        <Button className='call' as={Link} to="/cities" variant="contained" endIcon={<SendIcon />}>
        Here We Go!
      </Button>
     
    </div>
)
}
export default Welcome;